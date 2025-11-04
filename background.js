// This Service Worker script manages the availability of the side panel.

// 1. Set the default behavior when the extension is installed/updated.
// This is the CRITICAL FIX: We tell Chrome to automatically open the panel 
// (which it handles with the required user gesture) when the icon is clicked.
chrome.runtime.onInstalled.addListener(() => {
    chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true })
        .catch((error) => console.error("Error setting panel behavior:", error));
});

// 2. Function to enable the sidebar and set its path for a specific tab.
const setSidePanelForTab = async (tabId) => {
    try {
        await chrome.sidePanel.setOptions({
            tabId: tabId,
            path: 'sidebar.html', // This must match your HTML file name
            enabled: true
        });
    } catch (e) {
        // Suppress errors on restricted Chrome pages (like chrome://extensions)
        console.warn("Could not set side panel path for restricted tab:", e.message);
    }
};

// 3. Ensure the sidebar is set up for any tab the user navigates to.
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    // Only run if the tab has completed loading and is not a chrome:// page
    if (changeInfo.status === 'complete' && tab.url && !tab.url.startsWith("chrome://")) {
        setSidePanelForTab(tabId);
    }
});

// 4. Ensure the sidebar is set up for the currently active tab right after installation.
chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs[0] && tabs[0].id) {
        setSidePanelForTab(tabs[0].id);
    }
});

// NOTE: We have removed the explicit chrome.action.onClicked listener entirely, 
// as chrome.sidePanel.setPanelBehavior now handles the user click action automatically.