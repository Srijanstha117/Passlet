// Content script for Passlet extension
// This script runs on web pages and can interact with the page content

console.log('Passlet content script loaded');

// Listen for messages from the popup or background script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'fillPassword') {
        // Fill password in active input field
        const activeElement = document.activeElement;
        if (activeElement && (activeElement.type === 'password' || activeElement.type === 'text')) {
            activeElement.value = request.password;
            activeElement.dispatchEvent(new Event('input', { bubbles: true }));
            sendResponse({ success: true });
        } else {
            sendResponse({ success: false, error: 'No active input field' });
        }
    }
    return true;
});

// Add context menu for password fields
document.addEventListener('contextmenu', (e) => {
    if (e.target.type === 'password') {
        // Could add context menu options here in the future
        console.log('Password field right-clicked');
    }
});
