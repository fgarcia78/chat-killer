// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  console.log('Killing chat box...');
  chrome.tabs.executeScript({
    file: 'kill-chat.js'
  });
});
