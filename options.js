// Save options
function save_options() {
	var check = document.getElementById("enabled").checked;
	value = check ? "1" : "0";
	chrome.storage.sync.set({'chat_killer_enabled': value}, function() {
		var status = document.getElementById("status");
		status.innerHTML = "<p><em>Options saved.</em></p>";
		setTimeout(function() {
			status.innerHTML = "";
		}, 1000);
	});
}

// Restore Options
function restore_options() {
	var value = null;
	chrome.storage.sync.get("chat_killer_enabled", function(check) {
		value = check["chat_killer_enabled"];
		if (!value) {
			value = "1";
			chrome.storage.sync.set({"chat_killer_enabled": value});
		}
		var check = document.getElementById("enabled");
		check.checked = value == "1" ? true : false;
	});
}

// Initialize
document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('#save').addEventListener('click', save_options);
