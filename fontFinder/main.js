import PanelPlugin from "LensStudio:PanelPlugin";
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
    this._pluginSystem = pluginSystem;
    this.fonts = [];  
    this.categoryFonts = []; 
    this.selectedFont = null; 
    this.selectedVariant = null; 
    this.updateTimeout = null; 
    this.panelWidget = null; 
    this.tempDirs = []; 
    this.resetTimers = []; 
    this.currentCategory = "all";
    this.localFontCache = {};   
  }
  
  downloadAndImportFont(font, variant) {
    const fontFamily = font.family;
    const fontData = this.fonts.find(f => f.family === fontFamily);
    
    if (!fontData || !fontData.files || !fontData.files[variant]) {
      return Promise.reject(new Error(`Font file not found for ${fontFamily} ${variant}`));
    }
    
    if (fontData.local || fontData.localPath) {
      return this.importLocalFont(fontData, variant);
    }
    
    const fontUrl = fontData.files[variant];
    
    return new Promise((resolve, reject) => {
      const request = new Network.HttpRequest();
      request.url = fontUrl;
      request.method = Network.HttpRequest.Method.Get;
      
      Network.performHttpRequest(request, (response) => {
        if (response.statusCode === 200) {
          try {
            const tempDir = FileSystem.TempDir.create();
            this.tempDirs.push(tempDir);
            
            const fontExtension = fontUrl.endsWith('.woff2') ? '.woff2' : '.ttf';
            const sanitizedName = fontFamily.replace(/[^a-zA-Z0-9]/g, '_');
            const fileName = `${sanitizedName}_${variant}${fontExtension}`;
            const tempFilePath = tempDir.path.appended(new Editor.Path(fileName));
            
            const fontBytes = response.body.toBytes();
            FileSystem.writeFile(tempFilePath, fontBytes);
            
            if (!FileSystem.exists(tempFilePath)) {
              reject(new Error('Failed to write temp file'));
              return;
            }
            
            const model = this._pluginSystem.findInterface(Editor.Model.IModel);
            const assetManager = model.project.assetManager;
            
            const fontFinderFolder = `fontFinder`;
            const fontFamilyFolder = `${fontFinderFolder}/${fontFamily}`;
            
            const importResult = assetManager.importExternalFile(
              tempFilePath,
              fontFamilyFolder,
              Editor.Model.ResultType.Auto
            );
            
            const tempDirIndex = this.tempDirs.indexOf(tempDir);
            if (tempDirIndex > -1) {
              this.tempDirs.splice(tempDirIndex, 1);
            }
            
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

  importLocalFont(fontData, variant) {
    return new Promise((resolve, reject) => {
      try {
        const fontFamily = fontData.family;
        const localPath = fontData.localPath || fontData.files[variant];
        
        const fontFileUrl = import.meta.resolve(localPath);
        const fontFilePath = new Editor.Path(fontFileUrl);
        
        if (!FileSystem.exists(fontFilePath)) {
          reject(new Error(`Local font file not found: ${localPath}`));
          return;
        }
        
        const model = this._pluginSystem.findInterface(Editor.Model.IModel);
        const assetManager = model.project.assetManager;
        
        const fontFinderFolder = `fontFinder`;
        const fontFamilyFolder = `${fontFinderFolder}/${fontFamily}`;
        
        const importResult = assetManager.importExternalFile(
          fontFilePath,
          fontFamilyFolder,
          Editor.Model.ResultType.Auto
        );
        
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
        console.error(`[FontFinder] Error importing local font:`, error.message);
        reject(error);
      }
    });
  }

  async fetchFonts(category = 'all', limit = 0) {
    return new Promise((resolve, reject) => {
      try {
        let categoryFonts = [];
        
        if (category === 'all') {
          const allFontsMap = {};
          Object.values(fontData.categories || {}).forEach(catArr => {
            (catArr || []).forEach(font => {
              allFontsMap[font.family] = font;
            });
          });
          categoryFonts = Object.values(allFontsMap);
        } else if (CUSTOM_CATEGORIES[category]) {
          const fontFamilies = CUSTOM_CATEGORIES[category];
          
          const allFontsMap = {};
          Object.values(fontData.categories || {}).forEach(catArr => {
            (catArr || []).forEach(font => {
              allFontsMap[font.family] = font;
            });
          });
          
          categoryFonts = fontFamilies
            .map(familyName => allFontsMap[familyName])
            .filter(font => font !== undefined);
            
        } else {
          reject(new Error(`Category "${category}" not found`));
          return;
        }
        
        if (!categoryFonts || categoryFonts.length === 0) {
          reject(new Error(`No fonts found for category "${category}"`));
          return;
        }
        
        categoryFonts.sort((a, b) => a.family.localeCompare(b.family));
        
        const fonts = limit ? categoryFonts.slice(0, limit) : categoryFonts;
        
        resolve(fonts);
      } catch (error) {
        console.error("[FontFinder] Error loading font data:", error);
        reject(new Error("Failed to load font data from JSON"));
      }
    });
  }

  
  createWidget(parentWidget) {
    const outerContainer = new Ui.Widget(parentWidget);
    const outerLayout = new Ui.BoxLayout();
    outerLayout.setDirection(Ui.Direction.TopToBottom);
    outerLayout.spacing = 0;
    outerLayout.setContentsMargins(0, 0, 0, 0);
    outerContainer.layout = outerLayout;
    
    const scrollArea = new Ui.VerticalScrollArea(outerContainer);
    outerLayout.addWidget(scrollArea);
    
    const container = new Ui.Widget(scrollArea);
    scrollArea.setWidget(container);
    
    const mainLayout = new Ui.BoxLayout();
    mainLayout.setDirection(Ui.Direction.TopToBottom);
    mainLayout.spacing = 6;
    mainLayout.setContentsMargins(10, 10, 10, 10);
    container.layout = mainLayout;
    
    const fontHeader = new Ui.Label(container);
    fontHeader.text = "📚 FONTS";
    fontHeader.setFixedHeight(18);
    
    const updateFontCount = (count) => {
      fontHeader.text = `📚 FONTS (${count})`;
    };
    
    const categoryDropdown = new Ui.ComboBox(container);
    categoryDropdown.setFixedHeight(28);
    
    const searchInput = new Ui.TextEdit(container);
    searchInput.placeholderText = "Search fonts...";
    searchInput.setFixedHeight(28);
    searchInput.enabled = false;
    
    const surpriseButton = new Ui.PushButton(container);
    surpriseButton.text = "✨ Surprise Me";
    surpriseButton.setFixedHeight(30);
    surpriseButton.enabled = false;
    
    const fontScrollArea = new Ui.VerticalScrollArea(container);
    fontScrollArea.setMinimumHeight(100);
    const fontListContainer = new Ui.Widget(fontScrollArea);
    const fontListLayout = new Ui.BoxLayout();
    fontListLayout.setDirection(Ui.Direction.TopToBottom);
    fontListLayout.spacing = 0;
    fontListContainer.layout = fontListLayout;
    fontScrollArea.setWidget(fontListContainer);

    const brandingLabel = new Ui.Label(container);
    brandingLabel.text = "Loading...";
    brandingLabel.setFixedHeight(22);
    brandingLabel.wordWrap = true;

    const variantsDropdown = new Ui.ComboBox(container);
    variantsDropdown.setFixedHeight(30);
    variantsDropdown.enabled = false; 
    
    const downloadButton = new Ui.PushButton(container);
    downloadButton.text = "⬇️ Download Font";
    downloadButton.setFixedHeight(30);
    downloadButton.enabled = false; 
    
    const previewFrame = new Ui.CalloutFrame(container);
    previewFrame.setMinimumHeight(160);
    const previewFrameLayout = new Ui.BoxLayout();
    previewFrameLayout.setDirection(Ui.Direction.TopToBottom);
    previewFrameLayout.setContentsMargins(10, 10, 10, 10);
    previewFrameLayout.spacing = 4;
    previewFrame.layout = previewFrameLayout;

    const previewArea = new Ui.WebEngineView(previewFrame);
    previewArea.setMinimumHeight(140);
    const previewSpinner = new Ui.ProgressIndicator(previewFrame);
    previewSpinner.setFixedHeight(14);
    previewSpinner.visible = false;

    previewFrameLayout.addWidget(previewArea);
    previewFrameLayout.addWidget(previewSpinner);
    
    const typingHeaderWidget = new Ui.Widget(container);
    const typingHeaderLayout = new Ui.BoxLayout();
    typingHeaderLayout.setDirection(Ui.Direction.LeftToRight);
    typingHeaderLayout.setContentsMargins(0, 0, 0, 0);
    typingHeaderLayout.spacing = 8;
    typingHeaderWidget.layout = typingHeaderLayout;

    const typingLabel = new Ui.Label(typingHeaderWidget);
    typingLabel.text = "Type to Preview";
    typingLabel.setFixedHeight(18);

    const charCountLabel = new Ui.Label(typingHeaderWidget);
    charCountLabel.text = "0 chars · 0 lines";
    charCountLabel.setFixedHeight(18);

    typingHeaderLayout.addWidget(typingLabel);
    typingHeaderLayout.addStretch(1);
    typingHeaderLayout.addWidget(charCountLabel);
    
    const textBoxFrame = new Ui.CalloutFrame(container);
    textBoxFrame.setMinimumHeight(50);
    const frameLayout = new Ui.BoxLayout();
    frameLayout.setDirection(Ui.Direction.TopToBottom);
    frameLayout.spacing = 0;
    frameLayout.setContentsMargins(8, 8, 8, 8);
    textBoxFrame.layout = frameLayout;
    
    const typingArea = new Ui.TextEdit(textBoxFrame);
    typingArea.placeholderText = "Type here...";
    typingArea.plainText = "Build with SNAP!";
    typingArea.setMinimumHeight(30);
    typingArea.enabled = false; 
    
    frameLayout.addWidget(typingArea);

    const separator = new Ui.Widget(container);
    separator.setFixedHeight(12);
    
    const dividerLine = new Ui.Label(container);
    dividerLine.text = "";
    dividerLine.setFixedHeight(1);
    dividerLine.autoFillBackground = true;
    dividerLine.backgroundRole = Ui.ColorRole.Mid;
    
    const disclaimer = new Ui.Label(container);
    disclaimer.text = "ⓘ Google Fonts • Open Font License (OFL)";
    disclaimer.wordWrap = true;
    disclaimer.setFixedHeight(20);
    
    const formatVariant = (variant) => {
      if (!variant) return "Regular";
      if (variant === "regular") return "Regular";
      if (variant === "italic") return "Italic";
      if (variant === "display") return "Display";
      const isItalic = variant.indexOf("italic") !== -1;
      const weight = variant.replace("italic", "");
      return `${weight || "400"}${isItalic ? " Italic" : ""}`;
    };
    
    const parseVariant = (variant) => {
      const isItalic = variant.indexOf("italic") !== -1;
      const digits = variant.match(/\d+/);
      const weight = digits ? parseInt(digits[0], 10) : 400;
      return { weight, isItalic };
    };
    
    let selectedVariant = null;
    let currentCategory = this.currentCategory;
    let categoryFonts = [];
    let searchTimer = null;
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
    
    const showLoadingPreview = () => {
      previewSpinner.visible = true;
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
    
    const updateCharCount = () => {
      const text = typingArea.plainText || "";
      const chars = text.length;
      const lines = text ? text.split("\n").length : 0;
      charCountLabel.text = `${chars} chars · ${lines} lines`;
    };
    updateCharCount();
    
    const updatePreview = () => {
      if (!this.selectedFont) {
        return;
      }
      previewSpinner.visible = true;
      
      const text = typingArea.plainText || "";
      const fontFamily = this.selectedFont.family;
      const variant = selectedVariant || "regular";
      const { weight, isItalic } = parseVariant(variant);
      const ital = isItalic ? 1 : 0;
      
      if (this.selectedFont.local || this.selectedFont.localPath) {
        try {
          const localPath = this.selectedFont.localPath || this.selectedFont.files[variant];
          
          let base64Font = this.localFontCache[localPath];
          
          if (!base64Font) {
            const fontFileUrl = import.meta.resolve(localPath);
            const fontFilePath = new Editor.Path(fontFileUrl);
            
            if (FileSystem.exists(fontFilePath)) {
              const fontBytes = FileSystem.readBytes(fontFilePath);
              
              base64Font = Base64.encode(fontBytes);
              
              this.localFontCache[localPath] = base64Font;
            } else {
              throw new Error(`Local font file not found: ${localPath}`);
            }
          }
          
          if (base64Font) {
            
            const html = `
              <!DOCTYPE html>
              <html>
              <head>
                <meta charset="UTF-8">
                <style>
                  @font-face {
                    font-family: '${fontFamily}';
                    src: url(data:font/opentype;base64,${base64Font}) format('opentype');
                  }
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
            previewSpinner.visible = false;
            return;
          }
        } catch (error) {
          console.error(`[FontFinder] Error loading local font preview:`, error.message);
        }
      }
      
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
      previewSpinner.visible = false;
    };
    
    const buildVariantDropdown = (font) => {
      variantsDropdown.clear();
      variantOptions.length = 0;
      const variants = font && font.variants ? font.variants : ["regular"];
      variants.forEach((variant, idx) => {
        variantsDropdown.addItem(formatVariant(variant));
        variantOptions[idx] = variant;
      });
      selectedVariant = variants.length ? variants[0] : "regular";
      if (variants.length > 0) {
        variantsDropdown.currentText = formatVariant(variants[0]);
      }
    };
    
    const renderFontList = (fontsToRender) => {
      fontListLayout.clear(Ui.ClearLayoutBehavior.DeleteClearedWidgets);
      fontLabels.length = 0;
      fontNames.length = 0;
      this.fonts = fontsToRender || [];
      
      updateFontCount(fontsToRender ? fontsToRender.length : 0);
      
      if (!fontsToRender || fontsToRender.length === 0) {
        const emptyLabel = new Ui.Label(fontListContainer);
        emptyLabel.text = "No fonts found";
        emptyLabel.setFixedHeight(32);
        fontListLayout.addWidget(emptyLabel);
        this.selectedFont = null;
        previewSpinner.visible = false;
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
      
      fontListLayout.addStretch(1);
      
      setSelectedFont(fontsToRender[0], 0);
      
      downloadButton.enabled = true;
      typingArea.enabled = true;
      variantsDropdown.enabled = true;
      searchInput.enabled = true;
      surpriseButton.enabled = true;
    };
    
    const applySearchAndRender = () => {
      const term = (searchInput.plainText || "").trim().toLowerCase();
      let filtered = categoryFonts;
      if (term) {
        filtered = allFonts.filter(f => f.family.toLowerCase().indexOf(term) !== -1);
      }
      renderFontList(filtered);
    };
    
    const loadCategory = (category) => {
      currentCategory = category;
      downloadButton.enabled = false;
      typingArea.enabled = false;
      variantsDropdown.enabled = false;
      searchInput.enabled = false;
      surpriseButton.enabled = false;
      showLoadingPreview();
      
      this.fetchFonts(category, 0)
        .then(fonts => {
          categoryFonts = fonts;
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
          previewSpinner.visible = false;
          console.error("[FontFinder]", error.message);
        });
    };
    
    const setSelectedFont = (font, itemIndex) => {
      this.selectedFont = font;
      
      brandingLabel.text = font.family;
      
      fontLabels.forEach((item, i) => {
        if (i === itemIndex) {
          item.autoFillBackground = true;
          item.backgroundRole = Ui.ColorRole.Highlight;
          item.foregroundRole = Ui.ColorRole.HighlightedText;
        } else {
          item.autoFillBackground = false;
          item.backgroundRole = Ui.ColorRole.Window;
          item.foregroundRole = Ui.ColorRole.WindowText;
        }
      });
      buildVariantDropdown(font);
      updatePreview();
    };
    
    this.panelWidget = outerContainer;
    
    const categoryOrder = ['all', 'gaming', 'fantasy', 'branded', 'fun', 'elegant', 'retro', 'handwriting', 'modern', 'bold', 'futuristic', 'thatowais'];
    
    categoryOrder.forEach(catKey => {
      const displayName = CATEGORY_LABELS[catKey] || catKey;
      categoryDropdown.addItem(displayName);
    });
    
    const defaultCategory = "all";
    const defaultDisplayName = CATEGORY_LABELS[defaultCategory] || defaultCategory;
    categoryDropdown.currentText = defaultDisplayName;
    
    downloadButton.onClick.connect(() => {
      if (!this.selectedFont || !selectedVariant) {
        return;
      }
      
      downloadButton.text = "⏳ Downloading...";
      downloadButton.enabled = false;
      
      this.downloadAndImportFont(this.selectedFont, selectedVariant)
        .then(() => {
          downloadButton.enabled = true;
          downloadButton.text = "✓ Downloaded";
          
          const resetTimer = setTimeout(() => {
            downloadButton.text = "⬇️ Download Font";
          }, 800);
          
          if (!this.resetTimers) this.resetTimers = [];
          this.resetTimers.push(resetTimer);
        })
        .catch((error) => {
          console.error(`[FontFinder] Error:`, error.message);
          downloadButton.enabled = true;
          downloadButton.text = "✗ Failed";
          
          const resetTimer = setTimeout(() => {
            downloadButton.text = "⬇️ Download Font";
          }, 1200);
          
          if (!this.resetTimers) this.resetTimers = [];
          this.resetTimers.push(resetTimer);
        });
    });
    
    showLoadingPreview();
    
    loadCategory(defaultCategory);
    
    variantsDropdown.onCurrentTextChange.connect((txt) => {
      const matchIdx = variantOptions.findIndex(v => formatVariant(v) === txt);
      if (matchIdx >= 0) {
        selectedVariant = variantOptions[matchIdx];
        updatePreview();
      }
    });
    
    typingArea.onTextChange.connect(() => {
      updateCharCount();
      
      if (this.updateTimeout) {
        clearTimeout(this.updateTimeout);
      }
      this.updateTimeout = setTimeout(() => {
        updatePreview();
      }, 500);
    });
    
    searchInput.onTextChange.connect(() => {
      if (searchTimer) {
        clearTimeout(searchTimer);
      }
      searchTimer = setTimeout(() => {
        applySearchAndRender();
      }, 200);
    });
    
    categoryDropdown.onCurrentTextChange.connect((displayName) => {
      if (displayName) {
        const categoryKey = Object.keys(CATEGORY_LABELS).find(key => CATEGORY_LABELS[key] === displayName) || displayName;
        searchInput.plainText = "";
        loadCategory(categoryKey);
      }
    });
    
    surpriseButton.onClick.connect(() => {
      if (!this.fonts || this.fonts.length === 0) {
        return;
      }
      
      const randomIndex = Math.floor(Math.random() * this.fonts.length);
      const randomFont = this.fonts[randomIndex];
      
      setSelectedFont(randomFont, randomIndex);
    });
    
    mainLayout.addWidget(surpriseButton);
    mainLayout.addWidget(categoryDropdown);
    mainLayout.addWidget(fontHeader);
    mainLayout.addWidget(searchInput);
    mainLayout.addWidget(fontScrollArea);
    
    mainLayout.addWidget(separator);
    mainLayout.addWidget(dividerLine);
    
    mainLayout.addWidget(brandingLabel);
    mainLayout.addWidget(variantsDropdown);
    mainLayout.addWidget(downloadButton);
    
    mainLayout.addWidget(previewFrame);
    
    mainLayout.addWidget(typingHeaderWidget);
    mainLayout.addWidget(textBoxFrame);
    
    mainLayout.addWidget(disclaimer);
    
    return outerContainer;
  }
  
  
  
  deinit() {
    if (this.updateTimeout) {
      clearTimeout(this.updateTimeout);
    }
    
    if (this.resetTimers && this.resetTimers.length > 0) {
      this.resetTimers.forEach(timer => clearTimeout(timer));
      this.resetTimers = [];
    }
    
    if (this.tempDirs && this.tempDirs.length > 0) {
      this.tempDirs = [];
    }
  }
  
}
