import PanelPlugin from "LensStudio:PanelPlugin";
import * as Subprocess from "LensStudio:Subprocess";
import * as RemoteServiceModule from "LensStudio:RemoteServiceModule";
import * as AssetLibrary from "LensStudio:AssetLibrary";
import * as App from "LensStudio:App";
import * as Serialization from "LensStudio:Serialization";
import * as Shell from "LensStudio:Shell";
import * as Ui from "LensStudio:Ui";
import * as Network from "LensStudio:Network";
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
    console.log("[FontFinder] Plugin initialized");
  }

  // Function to fetch fonts from Google Fonts API (top 25 by popularity)
  async fetchFonts() {
    const url = `https://www.googleapis.com/webfonts/v1/webfonts?sort=popularity&key=${GOOGLE_FONTS_API_KEY}`;
    
    console.log("[FontFinder] Starting font fetch from Google Fonts API...");
    console.log("[FontFinder] API URL:", url);
    
    return new Promise((resolve, reject) => {
      const request = new Network.HttpRequest();
      request.url = url;
      request.method = Network.HttpRequest.Method.Get;
      
      Network.performHttpRequest(request, (response) => {
        console.log("[FontFinder] API Response Status:", response.statusCode);
        
        if (response.statusCode === 200) {
          try {
            const bodyString = response.body.toString();
            const data = JSON.parse(bodyString);
            const allFonts = data.items || [];
            
            console.log("[FontFinder] Total fonts fetched:", allFonts.length);
            
            const topFonts = allFonts.slice(0, 25);
            console.log("[FontFinder] Using top 25 fonts by popularity");
            topFonts.forEach(font => {
              console.log("[FontFinder] - Font:", font.family, "Variants:", font.variants);
            });
            
            resolve(topFonts);
          } catch (error) {
            console.error("[FontFinder] Error parsing font data:", error);
            reject(new Error("Failed to parse font data: " + error));
          }
        } else {
          console.error("[FontFinder] API request failed with status:", response.statusCode);
          reject(new Error(`API request failed with status: ${response.statusCode}`));
        }
      });
    });
  }

  
  createWidget(parentWidget) {
    // Modern, clean UI with proper styling
    const container = new Ui.Widget(parentWidget);
    const dummyPreviewText = "The quick brown fox jumps over the lazy dog 123";
    
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
    
    topBarLayout.addWidget(brandingLabel);
    topBarLayout.addStretch(1);
    topBarLayout.addWidget(variantsDropdown);
    
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
    
    // Typing area - modern input
    const typingContainer = new Ui.Widget(rightSide);
    typingContainer.setContentsMargins(20, 0, 20, 16);
    const typingLayout = new Ui.BoxLayout();
    typingLayout.setDirection(Ui.Direction.TopToBottom);
    typingLayout.spacing = 8;
    typingContainer.layout = typingLayout;
    
    const typingLabel = new Ui.Label(typingContainer);
    typingLabel.text = "Custom Text";
    
    const typingArea = new Ui.TextEdit(typingContainer);
    typingArea.placeholderText = "Type to preview...";
    typingArea.plainText = dummyPreviewText;
    typingArea.setFixedHeight(100);
    
    typingLayout.addWidget(typingLabel);
    typingLayout.addWidget(typingArea);
    
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
    
    // Function to update preview with selected font, variant, and text
    const updatePreview = () => {
      const text = typingArea.plainText || dummyPreviewText;
      const fontFamily = this.selectedFont ? this.selectedFont.family : "Arial";
      const variant = selectedVariant || "regular";
      const { weight, isItalic } = parseVariant(variant);
      const ital = isItalic ? 1 : 0;
      const googleFamilyParam = `${encodeURIComponent(fontFamily)}:ital,wght@${ital},${weight}`;
      
      const html = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <style>
            @import url('https://fonts.googleapis.com/css2?family=${googleFamilyParam}&display=swap');
            body {
              margin: 0;
              padding: 20px;
              font-family: '${fontFamily}', sans-serif;
              font-size: 24px;
              font-weight: ${weight};
              font-style: ${isItalic ? "italic" : "normal"};
              background: #f5f6f7;
              color: #1f1f1f;
              word-wrap: break-word;
              overflow-wrap: break-word;
            }
          </style>
        </head>
        <body>
          ${text.replace(/\n/g, '<br>')}
        </body>
        </html>
      `;
      
      const dataUri = `data:text/html;charset=utf-8,${encodeURIComponent(html)}`;
      previewSpinner.start();
      previewArea.load(dataUri);
      previewArea.onLoadFinished.connect(() => {
        previewSpinner.stop();
      });
      
      console.log(`[FontFinder] Preview updated with font: ${fontFamily}, variant: ${variant}`);
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
    
    // Initial preview (before fonts load)
    updatePreview();
    
    // Fetch fonts asynchronously
    this.fetchFonts()
      .then(fonts => {
        this.fonts = fonts;
        console.log("[FontFinder] Fonts loaded, creating UI buttons...");
        
        fontListLayout.clear(Ui.ClearLayoutBehavior.DeleteClearedWidgets);
        fontLabels.length = 0;
        fontNames.length = 0;
        
        fonts.forEach((font, index) => {
          // Create a radio button styled as a list item (no checkbox visible, just highlighting)
          const fontItem = new Ui.RadioButton(fontListContainer);
          fontItem.text = "  " + font.family; // Padding for clean look
          fontItem.setFixedHeight(32);
          
          fontItem.onClick.connect(() => {
            console.log(`[FontFinder] Font selected: ${font.family}`);
            setSelectedFont(font, index);
          });
          
          fontLabels.push(fontItem);
          fontNames.push(font.family);
          fontListLayout.addWidget(fontItem);
        });
        
        console.log(`[FontFinder] Created ${fontLabels.length} font items`);
        
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
            Error fetching fonts: ${error.message}
          </body>
          </html>
        `;
        const errorDataUri = `data:text/html;charset=utf-8,${encodeURIComponent(errorHtml)}`;
        previewArea.load(errorDataUri);
        console.error("[FontFinder] Font fetch error:", error);
      });
    
    // Handle variants dropdown change
    variantsDropdown.onCurrentTextChange.connect((txt) => {
      const matchIdx = variantOptions.findIndex(v => formatVariant(v) === txt);
      if (matchIdx >= 0) {
        selectedVariant = variantOptions[matchIdx];
        updatePreview();
      }
    });
    
    // Step 12: Connect typing area to preview (real-time updates)
    typingArea.onTextChange.connect(() => {
      updatePreview();
      if (this.selectedFont) {
        console.log(`[FontFinder] Text changed. Selected font: ${this.selectedFont.family}`);
      }
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
  }
  
}
