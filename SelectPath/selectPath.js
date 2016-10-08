function selectPath (previous) {
  var strFound = window.find('\\\\', false, previous, true)
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

chrome.runtime.onConnect.addListener(function(port) {
  port.onMessage.addListener(function(msg) {
   selectPath (msg['direction']==='previous')
  });
});
