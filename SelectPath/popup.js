 var port

 chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    port = chrome.tabs.connect(tabs[0].id);
 })

function searchPath(direction) {
    port.postMessage({"direction": direction});
}

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#next').addEventListener("click", function(){searchPath('next')});
  document.querySelector('#previous').addEventListener('click', function(){searchPath('previous')});
});
