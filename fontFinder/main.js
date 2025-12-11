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

    const label = new Ui.Label(parentWidget)
    label.text = "Hello World"
    return label
  }
  
  
  
  deinit() {
  }
  
}
