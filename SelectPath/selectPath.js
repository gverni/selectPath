function selectPath () {
  var strFound = window.find('\\\\', false, false, true)
  if (strFound) {
    var selObj = window.getSelection()
    selObj.modify('extend', 'right', 'character')
    while (selObj.toString().charCodeAt(selObj.toString().length - 1) > 32) {
      selObj.modify('extend', 'right', 'character')
    }
    selObj.modify('extend', 'left', 'character')
  } else {
    window.alert('No  network path found on the page!')
  }
}
console.log('executing selectPath.js')

chrome.runtime.onConnect.addListener(function(port) {
  console.log('Received connect...')
  port.onMessage.addListener(function(msg) {
   console.log('Recieved message...')
  });
});

chrome.extension.onRequest.addListener(
  function(request, sender, sendResponse) {
    window.alert('received')
  });
