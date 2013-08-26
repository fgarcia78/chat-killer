// get chat iframe element
var elem = document.getElementById("chatiframe");

// chat box loaded?
if (elem != null)
{
	// kill the iframe
	var parent = elem.parentElement;
	parent.removeChild(elem);

	// now kill the 'loading...' span
	elem = document.getElementById("loadingchat");
	parent.removeChild(elem);

	// log it
	console.log('Chat iframe killed.');
}
else
{
	console.log('Chat iframe not loaded in the page!');
}
