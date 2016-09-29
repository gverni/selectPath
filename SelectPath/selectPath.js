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

selectPath()
