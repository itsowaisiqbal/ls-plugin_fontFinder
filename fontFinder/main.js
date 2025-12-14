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
import { GOOGLE_FONTS_API_KEY } from "./config.js";



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
    this.selectedFont = null; // Store selected font
    this.selectedVariant = null; // Store selected variant
    this.updateTimeout = null; // Debounce timer for preview updates
    this.panelWidget = null; // Reference to the panel widget for closing
    this.tempDirs = []; // Keep references to temp directories to prevent garbage collection
    this.resetTimers = []; // Keep references to button reset timers
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

  // Function to fetch fonts from Google Fonts API (top 25 by popularity)
  async fetchFonts() {
    // Check API key first
    if (!GOOGLE_FONTS_API_KEY || GOOGLE_FONTS_API_KEY.trim() === '') {
      console.error(`[FontFinder] Google Fonts API key is not configured. Please add your API key to config.js`);
      return Promise.reject(new Error('Google Fonts API key is not configured'));
    }
    
    const url = `https://www.googleapis.com/webfonts/v1/webfonts?sort=popularity&key=${GOOGLE_FONTS_API_KEY}`;
    
    return new Promise((resolve, reject) => {
      const request = new Network.HttpRequest();
      request.url = url;
      request.method = Network.HttpRequest.Method.Get;
      
      Network.performHttpRequest(request, (response) => {
        if (response.statusCode === 200) {
          try {
            const bodyString = response.body.toString();
            const data = JSON.parse(bodyString);
            const allFonts = data.items || [];
            const topFonts = allFonts.slice(0, 25);
            
            console.log(`[FontFinder] Loaded ${topFonts.length} fonts`);
            resolve(topFonts);
          } catch (error) {
            console.error("[FontFinder] Error parsing font data:", error);
            reject(new Error("Failed to parse font data"));
          }
        } else {
          if (response.statusCode === 400 || response.statusCode === 403) {
            reject(new Error(`API key error. Please check your Google Fonts API key in config.js`));
          } else {
            reject(new Error(`API request failed with status: ${response.statusCode}`));
          }
        }
      });
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
    
    // Left sidebar - font list
    const leftSide = new Ui.Widget(container);
    const leftLayout = new Ui.BoxLayout();
    leftLayout.setDirection(Ui.Direction.TopToBottom);
    leftLayout.spacing = 0;
    leftSide.layout = leftLayout;
    leftSide.setFixedWidth(240);
    
    // Header for font list
    const fontHeader = new Ui.Label(leftSide);
    fontHeader.text = "FONTS";
    fontHeader.setFixedHeight(40);
    
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
    
    // Download button
    const downloadButton = new Ui.PushButton(topBar);
    downloadButton.text = "Download Font";
    downloadButton.setFixedHeight(32);
    downloadButton.setFixedWidth(140);
    
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
    typingContainer.setMinimumHeight(140);
    const typingLayout = new Ui.BoxLayout();
    typingLayout.setDirection(Ui.Direction.TopToBottom);
    typingLayout.spacing = 6;
    typingLayout.setContentsMargins(0, 0, 0, 0);
    typingContainer.layout = typingLayout;
    
    const typingLabel = new Ui.Label(typingContainer);
    typingLabel.text = "Preview Text";
    typingLabel.setFixedHeight(20);
    
    const typingArea = new Ui.TextEdit(typingContainer);
    typingArea.placeholderText = "Type to preview...";
    typingArea.plainText = "";
    typingArea.setMinimumHeight(100);
    
    typingLayout.addWidget(typingLabel);
    typingLayout.addWidget(typingArea);
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
    const fontLabels = [];
    const fontNames = [];
    const variantOptions = [];
    
    // Optimized preview update with Google Fonts CDN
    const updatePreview = () => {
      const text = typingArea.plainText || "";
      const fontFamily = this.selectedFont ? this.selectedFont.family : "Arial";
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
            body {
              margin: 0;
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
              min-height: 260px;
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
    
    // Helper to set selected font and refresh UI
    const setSelectedFont = (font, itemIndex) => {
      this.selectedFont = font;
      // Update radio button selection (automatic highlighting)
      fontLabels.forEach((item, i) => {
        item.checked = (i === itemIndex);
      });
      buildVariantDropdown(font);
      updatePreview();
    };
    
    // Store panel reference
    this.panelWidget = container;
    
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
          console.log("[FontFinder] Download complete, will reset button in 0.8s");
          
          // Smoothly transition back to default state
          const resetTimer = setTimeout(() => {
            console.log("[FontFinder] Resetting button text to 'Download Font'");
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
    
    // Initial preview (before fonts load)
    updatePreview();
    
    // Fetch fonts asynchronously
    this.fetchFonts()
      .then(fonts => {
        this.fonts = fonts;
        
        fontListLayout.clear(Ui.ClearLayoutBehavior.DeleteClearedWidgets);
        fontLabels.length = 0;
        fontNames.length = 0;
        
        fonts.forEach((font, index) => {
          // Create a radio button styled as a list item (no checkbox visible, just highlighting)
          const fontItem = new Ui.RadioButton(fontListContainer);
          fontItem.text = "  " + font.family; // Padding for clean look
          fontItem.setFixedHeight(32);
          
          fontItem.onClick.connect(() => {
            setSelectedFont(font, index);
          });
          
          fontLabels.push(fontItem);
          fontNames.push(font.family);
          fontListLayout.addWidget(fontItem);
        });
        
        // Select the first font by default
        if (fonts.length > 0) {
          setSelectedFont(fonts[0], 0);
        }
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
                padding: 20px;
                font-family: Arial, sans-serif;
                font-size: 16px;
                background: #fee;
                color: #c00;
              }
            </style>
          </head>
          <body>
            Error: ${error.message}
          </body>
          </html>
        `;
        const errorDataUri = `data:text/html;charset=utf-8,${encodeURIComponent(errorHtml)}`;
        previewArea.load(errorDataUri);
        console.error("[FontFinder]", error.message);
      });
    
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
    
    // Assemble UI
    leftLayout.addWidget(fontHeader);
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
