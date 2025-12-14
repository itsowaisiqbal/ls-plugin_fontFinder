# FontFinder Plugin for Lens Studio

A Lens Studio panel plugin that allows you to search, preview, and import Google Fonts directly into your Lens Studio projects.

## Features

- 🔍 Browse top 25 Google Fonts by popularity
- 👁️ Live preview with custom text
- 🎨 Support for all font variants (weights and styles)
- ⬇️ One-click download and import into your project
- 📝 Automatically creates a Text object with the imported font

## Setup Instructions

### 1. Get a Google Fonts API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the **Google Fonts Developer API**:
   - Go to "APIs & Services" > "Library"
   - Search for "Google Fonts Developer API"
   - Click "Enable"
4. Create an API key:
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "API Key"
   - Copy your new API key

**Quick Link**: [Get API Key](https://developers.google.com/fonts/docs/developer_api#APIKey)

### 2. Configure the Plugin

1. Open `fontFinder/config.js`
2. Replace the empty string with your API key:

```javascript
export const GOOGLE_FONTS_API_KEY = 'YOUR_API_KEY_HERE';
```

3. Save the file

### 3. Install the Plugin in Lens Studio

1. Open Lens Studio
2. Go to **Lens Studio** > **Preferences** (macOS) or **File** > **Preferences** (Windows)
3. Select **Plugins** from the left sidebar
4. Click **+ Add New Location**
5. Select the parent directory containing the `fontFinder` folder
   - ⚠️ Do NOT select the `fontFinder` folder itself
   - Select the folder that CONTAINS `fontFinder`
6. The plugin should appear in the "Installed Plugins" list
7. Make sure the checkbox next to "fontFinder" is checked

### 4. Use the Plugin

1. In Lens Studio, go to **Window** > **fontFinder**
2. The plugin panel will open showing a list of fonts
3. Click on a font to preview it
4. Type custom text in the preview area
5. Select a font variant (weight/style) from the dropdown
6. Click **Download & Create Text** to import the font and create a text object

## Troubleshooting

### "No fonts loading"
- Check that your API key is correctly set in `config.js`
- Check the Lens Studio console (View > Logger Panel) for error messages
- Ensure you have an internet connection

### "Download failed"
- Check the Lens Studio console for detailed error logs
- The plugin now includes extensive debugging information
- Look for lines starting with `[FontFinder]`

### "Font imported but text not created"
- Check console logs for specific errors
- Verify that the font file was actually downloaded (look for ✓ checkmarks in logs)

## How It Works

1. **Fetches fonts** from Google Fonts API (top 25 by popularity)
2. **Displays fonts** in a scrollable list with live preview
3. **Downloads font** files (WOFF2/TTF) when you click the button
4. **Imports font** into your Lens Studio project's assets
5. **Creates a Text object** with a ScreenTransform component and applies the font

## Permissions

This plugin requires the following permissions (defined in `module.json`):
- `filesystem` - To save and import font files
- `network` - To download fonts from Google Fonts

## Technical Details

- **Entry Point**: `fontFinder/main.js`
- **Configuration**: `fontFinder/config.js`
- **Plugin Type**: Panel Plugin
- **Dependencies**: Lens Studio 5.x

## Files Structure

```
fontFinder/
├── main.js          # Main plugin implementation
├── config.js        # API key configuration
├── module.json      # Plugin metadata and permissions
├── jsconfig.json    # JavaScript compiler settings
└── support/
    └── EditorAPI.d.ts  # TypeScript definitions
```

## Development

To modify the plugin:

1. Make your changes to the source files
2. In Lens Studio Preferences > Plugins, uncheck and re-check the plugin to reload it
3. Or restart Lens Studio

## License

[Your License Here]

## Support

For issues or questions, please check the Lens Studio documentation:
- [Plugin Development](https://developers.snap.com/lens-studio/extending-lens-studio/plugins-development/overview)
- [Common Tasks](https://developers.snap.com/lens-studio/extending-lens-studio/plugins-development/common-tasks)
