chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.executeScript(null, {file: 'selectPath.js'})
})

chrome.extension.onRequest.addListener(
  function(request, sender, sendResponse) {
    window.alert('received')
  });