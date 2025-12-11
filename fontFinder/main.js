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
    // Step 1: Create container widget
    const container = new Ui.Widget(parentWidget);

    const dummyPreviewText = "The quick brown fox jumps over the lazy dog 123";
    
    // Step 2: Create main horizontal layout (left: fonts, right: preview/typing)
    const mainLayout = new Ui.BoxLayout();
    mainLayout.setDirection(Ui.Direction.LeftToRight);
    mainLayout.spacing = 14;
    mainLayout.setContentsMargins(12, 12, 12, 12);
    container.layout = mainLayout;
    
    // Step 3: Create left side container (for tabs and font list)
    const leftSide = new Ui.Widget(container);
    const leftLayout = new Ui.BoxLayout();
    leftLayout.setDirection(Ui.Direction.TopToBottom);
    leftLayout.spacing = 8;
    leftSide.layout = leftLayout;
    leftSide.setFixedWidth(230); // Sidebar width
    
    // Step 4: Create TabBar
    const tabBar = new Ui.TabBar(leftSide);
    tabBar.addTab("Fonts");
    
    // Step 5: Create scrollable area for font list
    const fontScrollArea = new Ui.VerticalScrollArea(leftSide);
    
    // Step 6: Create container for font list items
    const fontListContainer = new Ui.Widget(fontScrollArea);
    const fontListLayout = new Ui.BoxLayout();
    fontListLayout.setDirection(Ui.Direction.TopToBottom);
    fontListLayout.spacing = 4;
    fontListContainer.layout = fontListLayout;
    
    // Set the widget for scroll area
    fontScrollArea.setWidget(fontListContainer);
    
    // Step 7: Create right side container (for branding, preview, typing)
    const rightSide = new Ui.Widget(container);
    const rightLayout = new Ui.BoxLayout();
    rightLayout.setDirection(Ui.Direction.TopToBottom);
    rightLayout.spacing = 12;
    rightSide.layout = rightLayout;
    
    // Step 8: Create branding label
    const brandingLabel = new Ui.Label(rightSide);
    brandingLabel.text = "fontFinder © 2025 by itsowaisiqbal";
    
    // Step 9: Create preview area using WebEngineView to display fonts
    const previewArea = new Ui.WebEngineView(rightSide);
    previewArea.setFixedHeight(260); // Set a fixed height for preview
    
    // Step 10: Create typing area
    const typingArea = new Ui.TextEdit(rightSide);
    typingArea.placeholderText = "Type here to see preview...";
    typingArea.plainText = dummyPreviewText;
    typingArea.setFixedHeight(140);
    
    // Step 11: Variants section (styles)
    const variantsContainer = new Ui.Widget(rightSide);
    const variantsLayout = new Ui.BoxLayout();
    variantsLayout.setDirection(Ui.Direction.LeftToRight);
    variantsLayout.spacing = 6;
    variantsContainer.layout = variantsLayout;
    
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
    const fontButtons = [];
    const variantButtons = [];
    
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
      previewArea.load(dataUri);
      
      console.log(`[FontFinder] Preview updated with font: ${fontFamily}, variant: ${variant}`);
    };
    
    // Helper to clear variant buttons
    const clearVariantButtons = () => {
      variantsLayout.clear(Ui.ClearLayoutBehavior.DeleteClearedWidgets);
      while (variantButtons.length) variantButtons.pop();
    };
    
    // Build variant buttons for selected font
    const buildVariantButtons = (font) => {
      clearVariantButtons();
      const variants = font && font.variants ? font.variants : ["regular"];
      variants.forEach((variant, idx) => {
        const btn = new Ui.PushButton(variantsContainer);
        btn.text = formatVariant(variant);
        btn.setFixedHeight(26);
        btn.checkable = true;
        btn.checked = idx === 0;
        
        btn.onClick.connect(() => {
          selectedVariant = variant;
          variantButtons.forEach(b => b.checked = false);
          btn.checked = true;
          updatePreview();
        });
        
        variantButtons.push(btn);
        variantsLayout.addWidget(btn);
      });
      
      // Default variant selection
      selectedVariant = variants.length ? variants[0] : "regular";
    };
    
    // Helper to set selected font and refresh UI
    const setSelectedFont = (font, buttonIndex) => {
      this.selectedFont = font;
      fontButtons.forEach((btn, i) => {
        btn.checked = i === buttonIndex;
      });
      buildVariantButtons(font);
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
        
        fonts.forEach((font, index) => {
          const fontButton = new Ui.PushButton(fontListContainer);
          fontButton.text = font.family;
          fontButton.setFixedHeight(28);
          fontButton.checkable = true;
          fontButton.checked = false;
          
          fontButton.onClick.connect(() => {
            console.log(`[FontFinder] Font clicked: ${font.family}`);
            setSelectedFont(font, index);
          });
          
          fontButtons.push(fontButton);
          fontListLayout.addWidget(fontButton);
        });
        
        console.log(`[FontFinder] Created ${fontButtons.length} font buttons`);
        
        // Select the first font by default
        if (fonts.length > 0) {
          setSelectedFont(fonts[0], 0);
          fontButtons[0].checked = true;
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
    
    // Step 12: Connect typing area to preview (real-time updates)
    typingArea.onTextChange.connect(() => {
      updatePreview();
      if (this.selectedFont) {
        console.log(`[FontFinder] Text changed. Selected font: ${this.selectedFont.family}`);
      }
    });
    
    // Step 13: Add widgets to layouts
    leftLayout.addWidget(tabBar);
    leftLayout.addWidget(fontScrollArea);
    
    rightLayout.addWidget(brandingLabel);
    rightLayout.addWidget(previewArea);
    rightLayout.addWidget(variantsContainer);
    rightLayout.addWidget(typingArea);
    
    mainLayout.addWidget(leftSide);
    mainLayout.addWidget(rightSide);
    
    return container;
  }
  
  
  
  deinit() {
  }
  
}
