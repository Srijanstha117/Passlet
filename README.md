# Passlet - Password Generator & Wallet

A Chrome extension that generates strong, random passwords and stores them securely in a wallet section.

## Features

- **Strong Password Generation**: Generate passwords with customizable length (8-64 characters)
- **Character Options**: Choose from uppercase, lowercase, numbers, and symbols
- **Secure Storage**: Passwords are stored locally in Chrome's storage
- **Wallet Management**: Save, search, and manage your passwords
- **Copy to Clipboard**: Easy one-click copying of generated passwords
- **Modern UI**: Clean, responsive interface with tabbed navigation

## Installation

1. **Download the Extension**
   - Clone or download this repository to your local machine

2. **Open Chrome Extensions**
   - Open Chrome and navigate to `chrome://extensions/`
   - Enable "Developer mode" in the top right corner

3. **Load the Extension**
   - Click "Load unpacked"
   - Select the `passlet` folder containing the extension files

4. **Access the Extension**
   - Click the Passlet icon in your Chrome toolbar
   - The extension popup will open with the password generator

## Usage

### Generating Passwords

1. **Set Password Length**: Use the slider to set password length (8-64 characters)
2. **Choose Character Types**: Select which character types to include:
   - Uppercase letters (A-Z)
   - Lowercase letters (a-z)
   - Numbers (0-9)
   - Symbols (!@#$%^&*)
3. **Generate**: Click "Generate Password" to create a new password
4. **Copy**: Click the copy button (📋) to copy the password to clipboard

### Saving Passwords

1. **Generate a Password**: Follow the steps above
2. **Add Label**: Enter a descriptive label (e.g., "Gmail", "Facebook")
3. **Save**: Click "Save to Wallet" to store the password

### Managing Your Wallet

1. **View Saved Passwords**: Click the "Wallet" tab
2. **Search**: Use the search box to find specific passwords
3. **Copy Saved Passwords**: Click "Copy" on any saved password
4. **Delete**: Remove individual passwords or clear all at once

## File Structure

```
passlet/
├── manifest.json          # Extension configuration
├── popup.html            # Main popup interface
├── popup.css             # Styling for the popup
├── popup.js              # Main functionality
├── background.js         # Background service worker
├── content.js            # Content script for web pages
├── icons/                # Extension icons
└── README.md             # This file
```

## Security Features

- **Local Storage**: All passwords are stored locally in your browser
- **No Cloud Sync**: Your passwords never leave your device
- **Secure Generation**: Uses cryptographically secure random number generation
- **Input Validation**: Ensures at least one character type is selected

## Browser Compatibility

- Chrome 88+ (Manifest V3)
- Edge 88+ (Chromium-based)
- Other Chromium-based browsers

## Development

To modify or extend the extension:

1. **Edit Files**: Modify the HTML, CSS, or JavaScript files as needed
2. **Reload Extension**: Go to `chrome://extensions/` and click the reload button
3. **Test Changes**: Click the extension icon to see your changes

## Troubleshooting

- **Extension Not Loading**: Ensure Developer mode is enabled
- **Passwords Not Saving**: Check that the extension has storage permissions
- **Copy Not Working**: Some websites may block clipboard access

## License

This project is open source and available under the MIT License.

## Contributing

Feel free to submit issues, feature requests, or pull requests to improve the extension.

---

**Note**: This extension stores passwords locally in your browser. While this provides privacy, it also means passwords are lost if you clear browser data or uninstall the extension. Always keep backups of important passwords.
