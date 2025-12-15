# fontFinder

A Lens Studio plugin to browse, preview, and download 1,900+ Google Fonts directly into your projects.

## Features

- 🎨 **1,900+ Fonts** - Complete Google Fonts library
- 🎮 **Curated Categories** - Gaming, Fantasy, Branded, Retro, Modern, and more
- 👀 **Live Preview** - See fonts in real-time before downloading
- ⚡ **No API Key** - Works offline with embedded font metadata
- 🔍 **Search & Filter** - Find fonts quickly by name or category
- ✨ **Surprise Me** - Random font picker per category
- ⬇️ **One-Click Download** - Fonts import directly to your project

## Installation

1. Clone this repository
2. Open Lens Studio
3. Go to **Preferences** (Lens Studio > Preferences on macOS, Edit > Preferences on Windows)
4. Click on **Plugins**
5. Under **Additional Libraries**, click **Add New Location**
6. Locate the cloned repository folder and link it as the new location
7. Check the **Plugins** list - `fontFinder` should appear
8. Enable the `fontFinder` plugin
9. Once enabled, go to **Window** menu and look for **fontFinder**

## Usage

1. **Browse** - Select a category or search for a font
2. **Preview** - See the font displayed in real-time
3. **Customize** - Choose font weight/style variant
4. **Test** - Type custom text to preview
5. **Download** - Click "Download Font" to add it to your project

Fonts are imported to: `Assets/fontFinder/{FontFamily}/`

## Categories

- 🌐 All Fonts
- 🎮 Gaming & Action
- 🧙 Fantasy & Medieval
- 💼 Branded & Professional
- 🎨 Fun & Playful
- ✨ Elegant & Luxury
- 📻 Retro & Vintage
- ✍️ Handwriting & Script
- 🔷 Modern & Minimal
- 💪 Bold & Impact
- 🚀 Futuristic & Tech
- 👤 thatowais (https://www.instagram.com/thatowais/)

## Technical Details

- **Architecture**: Built on Lens Studio PanelPlugin with custom category system
- **Preview**: Google Fonts CDN for live rendering via WebEngineView
- **Download**: Direct font file import via Lens Studio Asset Manager
- **Permissions**: `filesystem`, `network`

## Support

For support, reach out to me on Instagram [@itsowaisiqbal](https://www.instagram.com/itsowaisiqbal/)

## License

This plugin uses fonts from [Google Fonts](https://fonts.google.com/), licensed under the [Open Font License (OFL)](https://scripts.sil.org/ofl).

---

Made by [@itsowaisiqbal](https://github.com/itsowaisiqbal)
