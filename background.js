chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
	if (changeInfo.status === 'complete') {
		if (tab.url.match(/docs.google.com\/document\/d/g)) {
			chrome.tabs.executeScript(null, {file: "changeDom.js"})
		}
    }
})