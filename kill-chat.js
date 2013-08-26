// is the extension enabled in this system?
var enabled = null;
chrome.storage.sync.get("chat_killer_enabled", function(check) {
	enabled = check["chat_killer_enabled"];
	if (!enabled) {
		// not previous value: set default to enabled
		enabled = "1";
		chrome.storage.sync.set({"chat_killer_enabled": enabled});
	}
	if (enabled == "1") {
		var elem = document.getElementById("chatiframe");
		if (elem != null)
		{
			// kill chat box
			var parent = elem.parentElement;
			parent.removeChild(elem);
			elem = document.getElementById("loadingchat");
			parent.removeChild(elem);
			console.log('Chat iframe killed.');
		}
		else
		{
			// there is no chat in the page!
			console.log('Chat iframe not loaded in the current page!');
		}
	}
	else {
		// nothing to do...
		console.log('Extension not enabled.')
	}
});