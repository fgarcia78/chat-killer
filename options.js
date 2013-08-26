// Save options
function save_options() {
	var check = document.getElementById("enabled").checked;
	value1 = check ? "1" : "0";
	check = document.getElementById("message").checked;
	value2 = check ? "1" : "0";
	chrome.storage.sync.set(
		{'chat_killer_enabled': value1,
		 'chat_killer_message': value2}, function() {
			var status = document.getElementById("status");
			status.innerHTML = "<p><em>Options saved.</em></p>";
			setTimeout(function() {
				status.innerHTML = "";
			}, 1000);
	});
}

// Restore Options
function restore_options() {
	var value1, value2 = null;
	chrome.storage.sync.get(null, function(check) {
		value1 = check["chat_killer_enabled"];
		value2 = check["chat_killer_message"];
		if (!value1) {
			value1 = "1";
			chrome.storage.sync.set({"chat_killer_enabled": value1});
		}
		if (!value2) {
			value2 = "1";
			chrome.storage.sync.set({"chat_killer_message": value2});
		}
		var check = document.getElementById("enabled");
		check.checked = value1 == "1" ? true : false;
		check = document.getElementById("message");
		check.checked = value2 == "1" ? true : false;
	});
}

// Initialize
document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('#save').addEventListener('click', save_options);
