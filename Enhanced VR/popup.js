// document.addEventListener('DOMContentLoaded', function() => {
    document.addEventListener('DOMContentLoaded', () => { 
      chrome.tabs.query({ currentWindow: true }, (tabs) => {
        if (tabs.length > 1) {
          const activeTab = tabs.find(tab => tab.active);
          chrome.tabs.remove(tabs.filter(tab => tab.id !== activeTab.id).map(tab => tab.id));
        }
      });
      // Close popup after 1 second (optional)
      setTimeout(() => window.close(), 1000);
    });