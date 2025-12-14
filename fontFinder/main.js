/**
 * FontFinder - Lens Studio Plugin
 * 
 * Browse and download 1,900+ Google Fonts directly into your Lens Studio project.
 * All font data is loaded from fonts.json (no API key required).
 * Fonts are organized by category: popular, game, branded, etc.
 */

import PanelPlugin from "LensStudio:PanelPlugin";
import * as Subprocess from "LensStudio:Subprocess";
import * as RemoteServiceModule from "LensStudio:RemoteServiceModule";
import * as AssetLibrary from "LensStudio:AssetLibrary";
import * as App from "LensStudio:App";
import * as Serialization from "LensStudio:Serialization";
import * as Shell from "LensStudio:Shell";
import * as Ui from "LensStudio:Ui";
import * as Network from "LensStudio:Network";
import * as FileSystem from "LensStudio:FileSystem";
import fontData from "./fonts.json";
import { CUSTOM_CATEGORIES, CATEGORY_LABELS } from "./categories.js";



export class FontFinder extends PanelPlugin {
  static descriptor() {
    return {
      id: 'com.itsowaisiqbal.fontfinder',
      name: 'fontFinder',
      description: 'Search, preview, and import Google Fonts directly into your Lens Studio project.',
      
      dependencies: [Ui.IGui],
      
      
    };
  }
  
  constructor(pluginSystem) {
    super(pluginSystem);
    this.fonts = []; // Store fetched fonts
    this.categoryFonts = []; // Raw fonts for current category
    this.selectedFont = null; // Store selected font
    this.selectedVariant = null; // Store selected variant
    this.updateTimeout = null; // Debounce timer for preview updates
    this.panelWidget = null; // Reference to the panel widget for closing
    this.tempDirs = []; // Keep references to temp directories to prevent garbage collection
    this.resetTimers = []; // Keep references to button reset timers
    this.currentCategory = "all";
  }
  
  // Download font and import into Lens Studio
  downloadAndImportFont(font, variant) {
    const fontFamily = font.family;
    const fontData = this.fonts.find(f => f.family === fontFamily);
    
    if (!fontData || !fontData.files || !fontData.files[variant]) {
      return Promise.reject(new Error(`Font file not found for ${fontFamily} ${variant}`));
    }
    
    const fontUrl = fontData.files[variant];
    
    return new Promise((resolve, reject) => {
      const request = new Network.HttpRequest();
      request.url = fontUrl;
      request.method = Network.HttpRequest.Method.Get;
      
      Network.performHttpRequest(request, (response) => {
        if (response.statusCode === 200) {
          try {
            // Create temp directory for font file and keep reference to prevent garbage collection
            const tempDir = FileSystem.TempDir.create();
            this.tempDirs.push(tempDir);
            
            const fontExtension = fontUrl.endsWith('.woff2') ? '.woff2' : '.ttf';
            const sanitizedName = fontFamily.replace(/[^a-zA-Z0-9]/g, '_');
            const fileName = `${sanitizedName}_${variant}${fontExtension}`;
            const tempFilePath = tempDir.path.appended(new Editor.Path(fileName));
            
            // Write font bytes to temp file
            const fontBytes = response.body.toBytes();
            FileSystem.writeFile(tempFilePath, fontBytes);
            
            // Verify file exists
            if (!FileSystem.exists(tempFilePath)) {
              reject(new Error('Failed to write temp file'));
              return;
            }
            
            // Import font into Lens Studio project
            const model = this.pluginSystem.findInterface(Editor.Model.IModel);
            const assetManager = model.project.assetManager;
            
            // Create folder structure: fontFinder / FontFamily /
            const fontFinderFolder = `fontFinder`;
            const fontFamilyFolder = `${fontFinderFolder}/${fontFamily}`;
            
            // Import the font file
            const importResult = assetManager.importExternalFile(
              tempFilePath,
              fontFamilyFolder,
              Editor.Model.ResultType.Auto
            );
            
            // Clean up temp directory
            const tempDirIndex = this.tempDirs.indexOf(tempDir);
            if (tempDirIndex > -1) {
              this.tempDirs.splice(tempDirIndex, 1);
            }
            
            // Get the imported asset
            let fontAsset = null;
            if (importResult) {
              if (importResult.primary) {
                fontAsset = importResult.primary;
              } else if (importResult.asset) {
                fontAsset = importResult.asset;
              } else {
                fontAsset = importResult;
              }
            }
            
            if (fontAsset && fontAsset.name) {
              console.log(`[FontFinder] ✓ Downloaded: ${fontFamily} ${variant} → Assets/${fontFamilyFolder}/${fontAsset.name}`);
              resolve({ 
                fontAsset, 
                folder: fontFamilyFolder,
                fontFamily,
                variant 
              });
            } else {
              reject(new Error('Font asset not found in import result'));
            }
            
          } catch (error) {
            console.error(`[FontFinder] Error:`, error.message);
            reject(error);
          }
        } else {
          reject(new Error(`Download failed with status: ${response.statusCode}`));
        }
      });
    });
  }

  // Load fonts from JSON file using custom categories
  async fetchFonts(category = 'all', limit = 0) {
    return new Promise((resolve, reject) => {
      try {
        let categoryFonts = [];
        
        if (category === 'all') {
          // Combine all fonts from all categories, removing duplicates
          const allFontsMap = {};
          Object.values(fontData.categories || {}).forEach(catArr => {
            (catArr || []).forEach(font => {
              allFontsMap[font.family] = font;
            });
          });
          categoryFonts = Object.values(allFontsMap);
        } else if (CUSTOM_CATEGORIES[category]) {
          // Use custom category mapping
          const fontFamilies = CUSTOM_CATEGORIES[category];
          
          // Build a map of all available fonts for quick lookup
          const allFontsMap = {};
          Object.values(fontData.categories || {}).forEach(catArr => {
            (catArr || []).forEach(font => {
              allFontsMap[font.family] = font;
            });
          });
          
          // Filter fonts based on custom category list
          categoryFonts = fontFamilies
            .map(familyName => allFontsMap[familyName])
            .filter(font => font !== undefined);
            
          console.log(`[FontFinder] Custom category "${category}": found ${categoryFonts.length} of ${fontFamilies.length} fonts`);
        } else {
          reject(new Error(`Category "${category}" not found`));
          return;
        }
        
        if (!categoryFonts || categoryFonts.length === 0) {
          reject(new Error(`No fonts found for category "${category}"`));
          return;
        }
        
        // Sort fonts alphabetically by family name
        categoryFonts.sort((a, b) => a.family.localeCompare(b.family));
        
        // Limit the number of fonts to return (optional)
        const fonts = limit ? categoryFonts.slice(0, limit) : categoryFonts;
        
        console.log(`[FontFinder] Loaded ${fonts.length} fonts from "${category}" category (sorted A-Z)`);
        resolve(fonts);
      } catch (error) {
        console.error("[FontFinder] Error loading font data:", error);
        reject(new Error("Failed to load font data from JSON"));
      }
    });
  }

  
  createWidget(parentWidget) {
    // Modern, clean UI with proper styling
    const container = new Ui.Widget(parentWidget);
    
    // Main layout with better spacing
    const mainLayout = new Ui.BoxLayout();
    mainLayout.setDirection(Ui.Direction.LeftToRight);
    mainLayout.spacing = 0;
    mainLayout.setContentsMargins(0, 0, 0, 0);
    container.layout = mainLayout;
    
    // Left sidebar - font list and controls
    const leftSide = new Ui.Widget(container);
    const leftLayout = new Ui.BoxLayout();
    leftLayout.setDirection(Ui.Direction.TopToBottom);
    leftLayout.spacing = 8;
    leftSide.layout = leftLayout;
    leftSide.setFixedWidth(280);
    
    // Header for font list with counter
    const fontHeader = new Ui.Label(leftSide);
    fontHeader.text = "FONTS";
    fontHeader.setFixedHeight(24);
    fontHeader.setContentsMargins(12, 12, 12, 0);
    
    // Helper to update font count in header
    const updateFontCount = (count) => {
      fontHeader.text = `FONTS (${count})`;
    };
    
    // Category dropdown
    const categoryDropdown = new Ui.ComboBox(leftSide);
    categoryDropdown.setFixedHeight(28);
    categoryDropdown.setContentsMargins(12, 0, 12, 0);
    
    // Search box
    const searchInput = new Ui.TextEdit(leftSide);
    searchInput.placeholderText = "Search fonts...";
    searchInput.setFixedHeight(28);
    searchInput.setContentsMargins(12, 0, 12, 0);
    searchInput.enabled = false;
    
    // Scrollable font list
    const fontScrollArea = new Ui.VerticalScrollArea(leftSide);
    const fontListContainer = new Ui.Widget(fontScrollArea);
    const fontListLayout = new Ui.BoxLayout();
    fontListLayout.setDirection(Ui.Direction.TopToBottom);
    fontListLayout.spacing = 0;
    fontListContainer.layout = fontListLayout;
    fontScrollArea.setWidget(fontListContainer);
    
    // Right side - preview and controls
    const rightSide = new Ui.Widget(container);
    const rightLayout = new Ui.BoxLayout();
    rightLayout.setDirection(Ui.Direction.TopToBottom);
    rightLayout.spacing = 16;
    rightSide.layout = rightLayout;
    
    // Top bar with branding and variant selector
    const topBar = new Ui.Widget(rightSide);
    const topBarLayout = new Ui.BoxLayout();
    topBarLayout.setDirection(Ui.Direction.LeftToRight);
    topBarLayout.spacing = 16;
    topBarLayout.setContentsMargins(20, 16, 20, 0);
    topBar.layout = topBarLayout;
    
    const brandingLabel = new Ui.Label(topBar);
    brandingLabel.text = "fontFinder";
    
    // Variants dropdown in top bar
    const variantsDropdown = new Ui.ComboBox(topBar);
    variantsDropdown.setFixedHeight(32);
    variantsDropdown.setFixedWidth(180);
    variantsDropdown.enabled = false; // Disabled until fonts load
    
    // Download button
    const downloadButton = new Ui.PushButton(topBar);
    downloadButton.text = "Download Font";
    downloadButton.setFixedHeight(32);
    downloadButton.setFixedWidth(140);
    downloadButton.enabled = false; // Disabled until fonts load
    
    topBarLayout.addWidget(brandingLabel);
    topBarLayout.addStretch(1);
    topBarLayout.addWidget(variantsDropdown);
    topBarLayout.addWidget(downloadButton);
    
    // Preview area - larger, cleaner
    const previewContainer = new Ui.Widget(rightSide);
    previewContainer.setContentsMargins(20, 0, 20, 0);
    const previewLayout = new Ui.BoxLayout();
    previewLayout.setDirection(Ui.Direction.TopToBottom);
    previewLayout.spacing = 8;
    previewContainer.layout = previewLayout;
    
    const previewArea = new Ui.WebEngineView(previewContainer);
    previewArea.setFixedHeight(300);
    const previewSpinner = new Ui.ProgressIndicator(previewContainer);
    previewSpinner.setFixedHeight(20);
    
    previewLayout.addWidget(previewArea);
    previewLayout.addWidget(previewSpinner);
    
    // Typing area - single cohesive component with label and input
    const typingContainer = new Ui.Widget(rightSide);
    typingContainer.setContentsMargins(20, 0, 20, 16);
    typingContainer.setMinimumHeight(160);
    const typingLayout = new Ui.BoxLayout();
    typingLayout.setDirection(Ui.Direction.TopToBottom);
    typingLayout.spacing = 8;
    typingLayout.setContentsMargins(0, 0, 0, 0);
    typingContainer.layout = typingLayout;
    
    const typingLabel = new Ui.Label(typingContainer);
    typingLabel.text = "Preview Text";
    typingLabel.setFixedHeight(20);
    
    // Create a CalloutFrame for a bordered container
    const textBoxFrame = new Ui.CalloutFrame(typingContainer);
    textBoxFrame.setMinimumHeight(110);
    const frameLayout = new Ui.BoxLayout();
    frameLayout.setDirection(Ui.Direction.TopToBottom);
    frameLayout.spacing = 0;
    frameLayout.setContentsMargins(10, 10, 10, 10);
    textBoxFrame.layout = frameLayout;
    
    const typingArea = new Ui.TextEdit(textBoxFrame);
    typingArea.placeholderText = "Type to preview...";
    typingArea.plainText = "Build with SNAP!";
    typingArea.setMinimumHeight(85);
    typingArea.enabled = false; // Disabled until fonts load
    
    frameLayout.addWidget(typingArea);
    
    typingLayout.addWidget(typingLabel);
    typingLayout.addWidget(textBoxFrame);
    typingLayout.addStretch(0);
    
    // Helper to format variant label
    const formatVariant = (variant) => {
      if (!variant) return "Regular";
      if (variant === "regular") return "Regular";
      if (variant === "italic") return "Italic";
      const isItalic = variant.indexOf("italic") !== -1;
      const weight = variant.replace("italic", "");
      return `${weight || "400"}${isItalic ? " Italic" : ""}`;
    };
    
    // Helper to parse weight/style from variant
    const parseVariant = (variant) => {
      const isItalic = variant.indexOf("italic") !== -1;
      const digits = variant.match(/\d+/);
      const weight = digits ? parseInt(digits[0], 10) : 400;
      return { weight, isItalic };
    };
    
    // State
    let selectedVariant = null;
    let currentCategory = this.currentCategory;
    let categoryFonts = [];
    let searchTimer = null;
    // Build a master list of all unique fonts across categories for search
    const allFontsMap = {};
    Object.values(fontData.categories || {}).forEach(catArr => {
      (catArr || []).forEach(font => {
        allFontsMap[font.family] = font;
      });
    });
    const allFonts = Object.values(allFontsMap);
    const fontLabels = [];
    const fontNames = [];
    const variantOptions = [];
    
    // Show loading state in preview
    const showLoadingPreview = () => {
      const loadingHtml = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <style>
            body {
              margin: 0;
              padding: 0;
              height: 300px;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              background: #f8f9fa;
              font-family: -apple-system, BlinkMacSystemFont, sans-serif;
            }
            .spinner {
              width: 40px;
              height: 40px;
              border: 4px solid #e0e0e0;
              border-top-color: #333;
              border-radius: 50%;
              animation: spin 0.8s linear infinite;
            }
            @keyframes spin {
              to { transform: rotate(360deg); }
            }
            .text {
              margin-top: 16px;
              color: #666;
              font-size: 14px;
            }
          </style>
        </head>
        <body>
          <div class="spinner"></div>
          <div class="text">Loading fonts...</div>
        </body>
        </html>
      `;
      previewArea.load(`data:text/html;charset=utf-8,${encodeURIComponent(loadingHtml)}`);
    };
    
    // Optimized preview update with Google Fonts CDN
    const updatePreview = () => {
      // Don't update preview if fonts aren't loaded yet
      if (!this.selectedFont) {
        return;
      }
      
      const text = typingArea.plainText || "";
      const fontFamily = this.selectedFont.family;
      const variant = selectedVariant || "regular";
      const { weight, isItalic } = parseVariant(variant);
      const ital = isItalic ? 1 : 0;
      
      // Use optimized Google Fonts URL with display=block to prevent layout shift
      const googleFamilyParam = `${encodeURIComponent(fontFamily)}:ital,wght@${ital},${weight}`;
      
      const html = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=${googleFamilyParam}&display=block" rel="stylesheet">
          <style>
            html, body {
              margin: 0;
              padding: 0;
              height: 100%;
              overflow-y: auto;
            }
            body {
              padding: 20px;
              font-family: '${fontFamily}', sans-serif;
              font-size: 32px;
              font-weight: ${weight};
              font-style: ${isItalic ? "italic" : "normal"};
              background: #ffffff;
              color: #1f1f1f;
              word-wrap: break-word;
              overflow-wrap: break-word;
              line-height: 1.5;
              opacity: 0;
              animation: fadeIn 0.2s ease-in forwards;
            }
            @keyframes fadeIn {
              to { opacity: 1; }
            }
          </style>
        </head>
        <body>
          ${text.replace(/\n/g, '<br>')}
        </body>
        </html>
      `;
      
      const dataUri = `data:text/html;charset=utf-8,${encodeURIComponent(html)}`;
      previewArea.load(dataUri);
    };
    
    // Helper to clear variant buttons
    const buildVariantDropdown = (font) => {
      variantsDropdown.clear();
      variantOptions.length = 0;
      const variants = font && font.variants ? font.variants : ["regular"];
      variants.forEach((variant, idx) => {
        variantsDropdown.addItem(formatVariant(variant));
        variantOptions[idx] = variant;
      });
      selectedVariant = variants.length ? variants[0] : "regular";
      // Track selected index manually since currentIndex might not be available
      if (variants.length > 0) {
        // Select first item by setting it as current text
        variantsDropdown.currentText = formatVariant(variants[0]);
      }
    };
    
    // Render font list into UI
    const renderFontList = (fontsToRender) => {
      fontListLayout.clear(Ui.ClearLayoutBehavior.DeleteClearedWidgets);
      fontLabels.length = 0;
      fontNames.length = 0;
      this.fonts = fontsToRender || [];
      
      // Update font count in header
      updateFontCount(fontsToRender ? fontsToRender.length : 0);
      
      if (!fontsToRender || fontsToRender.length === 0) {
        const emptyLabel = new Ui.Label(fontListContainer);
        emptyLabel.text = "No fonts found";
        emptyLabel.setFixedHeight(32);
        fontListLayout.addWidget(emptyLabel);
        this.selectedFont = null;
        const emptyHtml = `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="UTF-8">
            <style>
              body {
                margin: 0;
                padding: 0;
                height: 300px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: #f8f9fa;
                font-family: -apple-system, BlinkMacSystemFont, sans-serif;
                color: #666;
              }
            </style>
          </head>
          <body>No fonts match your search.</body>
          </html>
        `;
        previewArea.load(`data:text/html;charset=utf-8,${encodeURIComponent(emptyHtml)}`);
        return;
      }
      
      fontsToRender.forEach((font, index) => {
        const fontItem = new Ui.ClickableLabel(fontListContainer);
        fontItem.text = "  " + font.family;
        fontItem.setFixedHeight(28);
        
        fontItem.onClick.connect(() => {
          setSelectedFont(font, index);
        });
        
        fontLabels.push(fontItem);
        fontNames.push(font.family);
        fontListLayout.addWidget(fontItem);
      });
      
      // Add stretch at the end to push all items to the top (prevents gaps)
      fontListLayout.addStretch(1);
      
      // Select the first font by default and show preview
      setSelectedFont(fontsToRender[0], 0);
      downloadButton.enabled = true;
      typingArea.enabled = true;
      variantsDropdown.enabled = true;
      searchInput.enabled = true;
    };
    
    // Apply search filter and render
    const applySearchAndRender = () => {
      const term = (searchInput.plainText || "").trim().toLowerCase();
      let filtered = categoryFonts;
      if (term) {
        filtered = allFonts.filter(f => f.family.toLowerCase().indexOf(term) !== -1);
      }
      renderFontList(filtered);
    };
    
    // Load category data and render
    const loadCategory = (category) => {
      currentCategory = category;
      downloadButton.enabled = false;
      typingArea.enabled = false;
      variantsDropdown.enabled = false;
      searchInput.enabled = false;
      showLoadingPreview();
      
      this.fetchFonts(category, 0)
        .then(fonts => {
          categoryFonts = fonts;
          console.log(`[FontFinder] Category "${category}" loaded ${fonts.length} fonts`);
          applySearchAndRender();
        })
        .catch(error => {
          const errorHtml = `
            <!DOCTYPE html>
            <html>
            <head>
              <meta charset="UTF-8">
              <style>
                body {
                  margin: 0;
                  padding: 0;
                  height: 300px;
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                  background: #fee;
                  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
                }
                .error-icon {
                  font-size: 40px;
                  margin-bottom: 16px;
                }
                .error-text {
                  color: #c00;
                  font-size: 16px;
                  text-align: center;
                  padding: 0 20px;
                }
              </style>
            </head>
            <body>
              <div class="error-icon">⚠️</div>
              <div class="error-text">${error.message}</div>
            </body>
            </html>
          `;
          const errorDataUri = `data:text/html;charset=utf-8,${encodeURIComponent(errorHtml)}`;
          previewArea.load(errorDataUri);
          console.error("[FontFinder]", error.message);
        });
    };
    
    // Helper to set selected font and refresh UI
    const setSelectedFont = (font, itemIndex) => {
      this.selectedFont = font;
      // Update label selection by changing background
      fontLabels.forEach((item, i) => {
        if (i === itemIndex) {
          // Selected item - set background
          item.autoFillBackground = true;
          item.backgroundRole = Ui.ColorRole.Highlight;
          item.foregroundRole = Ui.ColorRole.HighlightedText;
        } else {
          // Unselected item - clear background
          item.autoFillBackground = false;
          item.backgroundRole = Ui.ColorRole.Window;
          item.foregroundRole = Ui.ColorRole.WindowText;
        }
      });
      buildVariantDropdown(font);
      updatePreview();
    };
    
    // Store panel reference
    this.panelWidget = container;
    
    // Populate category dropdown with custom categories
    const categoryOrder = ['all', 'gaming', 'fantasy', 'branded', 'fun', 'elegant', 'retro', 'handwriting', 'modern', 'bold', 'futuristic'];
    
    categoryOrder.forEach(catKey => {
      const displayName = CATEGORY_LABELS[catKey] || catKey;
      categoryDropdown.addItem(displayName);
    });
    
    const defaultCategory = "all";
    const defaultDisplayName = CATEGORY_LABELS[defaultCategory] || defaultCategory;
    categoryDropdown.currentText = defaultDisplayName;
    
    // Download button handler
    downloadButton.onClick.connect(() => {
      if (!this.selectedFont || !selectedVariant) {
        return;
      }
      
      // Disable button during download
      downloadButton.text = "Downloading...";
      downloadButton.enabled = false;
      
      this.downloadAndImportFont(this.selectedFont, selectedVariant)
        .then(() => {
          // Re-enable immediately so user can download another font
          downloadButton.enabled = true;
          downloadButton.text = "✓ Downloaded";
          
          // Smoothly transition back to default state
          const resetTimer = setTimeout(() => {
            downloadButton.text = "Download Font";
          }, 800);
          
          // Store timer reference to prevent it from being garbage collected
          if (!this.resetTimers) this.resetTimers = [];
          this.resetTimers.push(resetTimer);
        })
        .catch((error) => {
          console.error(`[FontFinder] Error:`, error.message);
          // Re-enable immediately
          downloadButton.enabled = true;
          downloadButton.text = "✗ Failed";
          
          // Smoothly transition back to default state
          const resetTimer = setTimeout(() => {
            downloadButton.text = "Download Font";
          }, 1200);
          
          // Store timer reference
          if (!this.resetTimers) this.resetTimers = [];
          this.resetTimers.push(resetTimer);
        });
    });
    
    // Show loading state initially
    showLoadingPreview();
    
    // Fetch fonts for default category
    loadCategory(defaultCategory);
    
    // Handle variants dropdown change
    variantsDropdown.onCurrentTextChange.connect((txt) => {
      const matchIdx = variantOptions.findIndex(v => formatVariant(v) === txt);
      if (matchIdx >= 0) {
        selectedVariant = variantOptions[matchIdx];
        updatePreview();
      }
    });
    
    // Connect typing area to preview (debounced for better performance)
    typingArea.onTextChange.connect(() => {
      // Debounce updates to avoid excessive reloads while typing
      if (this.updateTimeout) {
        clearTimeout(this.updateTimeout);
      }
      this.updateTimeout = setTimeout(() => {
        updatePreview();
      }, 300); // 300ms debounce
    });
    
    // Handle search input
    searchInput.onTextChange.connect(() => {
      if (searchTimer) {
        clearTimeout(searchTimer);
      }
      searchTimer = setTimeout(() => {
        applySearchAndRender();
      }, 200);
    });
    
    // Handle category change
    categoryDropdown.onCurrentTextChange.connect((displayName) => {
      if (displayName) {
        // Convert display name back to category key
        const categoryKey = Object.keys(CATEGORY_LABELS).find(key => CATEGORY_LABELS[key] === displayName) || displayName;
        searchInput.plainText = "";
        loadCategory(categoryKey);
      }
    });
    
    // Assemble UI
    leftLayout.addWidget(fontHeader);
    leftLayout.addWidget(categoryDropdown);
    leftLayout.addWidget(searchInput);
    leftLayout.addWidget(fontScrollArea);
    
    rightLayout.addWidget(topBar);
    rightLayout.addWidget(previewContainer);
    rightLayout.addWidget(typingContainer);
    
    mainLayout.addWidget(leftSide);
    mainLayout.addWidget(rightSide);
    
    return container;
  }
  
  
  
  deinit() {
    // Clean up timers
    if (this.updateTimeout) {
      clearTimeout(this.updateTimeout);
    }
    
    // Clean up reset timers
    if (this.resetTimers && this.resetTimers.length > 0) {
      this.resetTimers.forEach(timer => clearTimeout(timer));
      this.resetTimers = [];
    }
    
    // Clean up temp directories
    if (this.tempDirs && this.tempDirs.length > 0) {
      this.tempDirs = [];
    }
  }
  
}
