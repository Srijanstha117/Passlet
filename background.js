// Background service worker for Passlet extension
chrome.runtime.onInstalled.addListener(() => {
    console.log('Passlet extension installed successfully!');
});

// Handle extension icon click
chrome.action.onClicked.addListener((tab) => {
    // This will open the popup when the extension icon is clicked
    console.log('Passlet extension icon clicked');
});

// Listen for messages from content scripts or popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'generatePassword') {
        // Handle password generation request if needed
        sendResponse({ success: true });
    }
    return true;
});
