document.getElementById("closeTabs").addEventListener("click", () => { 
    chrome.tabs.query({ currentWindow: true }, function (tabs) {
        if (tabs.length > 1) {     //this checks if there are multiple tabs open or not 
            let activeTab = tabs.find(tab => tab.active);    // Get the active tab

            for (let tab of tabs) {  // Loop through all the tabs
                if (tab.id !== activeTab.id) {   // Close all the tabs except the active one
                    chrome.tabs.remove(tab.id);
                }
            }
        }
    });
});

