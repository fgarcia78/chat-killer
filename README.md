chat-killer
===========

Chrome/Chromium extension to automatically kill the chat component in edx.org's CS-169.2x course.

## Installation

- Download the extension to a directory of your computer
- Go to the Extensions page in Chrome or Chromium ([chrome://extensions][1])
- Make sure that **'Developer mode'** is active
- Click on **'Load unpacked extension'** and look for the path where you saved the extension; the extension will load and its icon and information will appear in the list

[1]: chrome://extensions

## How to use

Not need to do anything: the extension will remove automatically the chat component in any page of the CS-169.2x course. Go to the extension Options (in the Extensions page) if you want to disable it.

## How it works

The extension simply looks for the DOM element of the chat iframe and kills it before the page starts to load the iframe.
