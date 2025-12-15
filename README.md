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

1. Clone or download this repository
2. Copy the `fontFinder` folder to your Lens Studio plugins directory:
   - **macOS**: `~/Library/Application Support/Snap/Lens Studio/Plugins/`
   - **Windows**: `%APPDATA%\Snap\Lens Studio\Plugins\`
3. Restart Lens Studio
4. Open the plugin via **Window > Panels > fontFinder**

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

- **Metadata**: Local `fonts.json` (no API calls required)
- **Preview**: Google Fonts CDN for live rendering
- **Download**: Direct font file import via Lens Studio Asset Manager
- **Permissions**: `filesystem`, `network`

## License

This plugin uses fonts from [Google Fonts](https://fonts.google.com/), licensed under the [Open Font License (OFL)](https://scripts.sil.org/ofl).

---

Made by [@itsowaisiqbal](https://github.com/itsowaisiqbal)
