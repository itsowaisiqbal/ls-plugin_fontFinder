import PanelPlugin from "LensStudio:PanelPlugin";
import * as Subprocess from "LensStudio:Subprocess";
import * as RemoteServiceModule from "LensStudio:RemoteServiceModule";
import * as AssetLibrary from "LensStudio:AssetLibrary";
import * as App from "LensStudio:App";
import * as Serialization from "LensStudio:Serialization";
import * as Shell from "LensStudio:Shell";
import * as Ui from "LensStudio:Ui";



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
  }

  
  createWidget(parentWidget) {
    // Step 1: Create container widget
    const container = new Ui.Widget(parentWidget);

    // Step 2: Create main horizontal layout (left: tabs/fonts, right: preview/typing)
    const mainLayout = new Ui.BoxLayout();
    mainLayout.setDirection(Ui.Direction.LeftToRight);
    mainLayout.spacing = 10;
    mainLayout.setContentsMargins(10, 10, 10, 10);
    container.layout = mainLayout;
    
    // Step 3: Create left side container (for tabs and font list)
    const leftSide = new Ui.Widget(container);
    const leftLayout = new Ui.BoxLayout();
    leftLayout.setDirection(Ui.Direction.TopToBottom);
    leftLayout.spacing = 5;
    leftSide.layout = leftLayout;
    leftSide.setFixedWidth(200); // Fixed width for left sidebar
    
    // Step 4: Create TabBar
    const tabBar = new Ui.TabBar(leftSide);
    tabBar.addTab("Fonts");
    
    // Step 5: Create scrollable area for font list
    const fontScrollArea = new Ui.VerticalScrollArea(leftSide);
    
    // Step 6: Create container for font list items
    const fontListContainer = new Ui.Widget(fontScrollArea);
    const fontListLayout = new Ui.BoxLayout();
    fontListLayout.setDirection(Ui.Direction.TopToBottom);
    fontListLayout.spacing = 2;
    fontListContainer.layout = fontListLayout;
    
    // Set the widget for scroll area
    fontScrollArea.setWidget(fontListContainer);
    
    // Step 7: Create right side container (for branding, preview, typing)
    const rightSide = new Ui.Widget(container);
    const rightLayout = new Ui.BoxLayout();
    rightLayout.setDirection(Ui.Direction.TopToBottom);
    rightLayout.spacing = 10;
    rightSide.layout = rightLayout;
    
    // Step 8: Create branding label
    const brandingLabel = new Ui.Label(rightSide);
    brandingLabel.text = "fontFinder © 2025 by itsowaisiqbal";
    
    // Step 9: Create preview area
    const previewArea = new Ui.Label(rightSide);
    previewArea.text = "Preview will appear here";
    previewArea.wordWrap = true;
    
    // Step 10: Create typing area
    const typingArea = new Ui.TextEdit(rightSide);
    typingArea.placeholderText = "Type here to see preview...";
    typingArea.plainText = "";
    typingArea.setFixedHeight(100);
    
    // Step 11: Add some sample fonts (we'll replace this with API later)
    // Now we can reference previewArea and typingArea
    const sampleFonts = ["Arial", "Helvetica", "Times New Roman", "Courier New", "Verdana"];
    let selectedFont = null;
    const fontButtons = [];
    
    sampleFonts.forEach(fontName => {
      const fontButton = new Ui.PushButton(fontListContainer);
      fontButton.text = fontName;
      fontButton.setFixedHeight(25);
      
      // Handle font selection
      fontButton.onClick.connect(() => {
        selectedFont = fontName;
        // Update preview text (font styling will be added when we integrate Google Fonts API)
        if (typingArea.plainText) {
          previewArea.text = typingArea.plainText;
        }
      });
      
      fontButtons.push(fontButton);
      fontListLayout.addWidget(fontButton);
    });
    
    // Step 12: Connect typing area to preview (real-time updates)
    typingArea.onTextChange.connect(() => {
      previewArea.text = typingArea.plainText || "Preview will appear here";
      // TODO: Apply selected font to preview
    });
    
    // Step 13: Add widgets to layouts
    leftLayout.addWidget(tabBar);
    leftLayout.addWidget(fontScrollArea);
    
    rightLayout.addWidget(brandingLabel);
    rightLayout.addWidget(previewArea);
    rightLayout.addWidget(typingArea);
    
    mainLayout.addWidget(leftSide);
    mainLayout.addWidget(rightSide);
    
    return container;
  }
  
  
  
  deinit() {
  }
  
}
