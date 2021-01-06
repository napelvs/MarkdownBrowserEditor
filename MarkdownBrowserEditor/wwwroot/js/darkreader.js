// Dark Reader
const DarkReader = require('../lib/darkreader');

var darkModeButton = document.getElementById('enableDarkMode');
var lightModeButton = document.getElementById('enableLightMode');

darkModeButton.addEventListener('click', function () {
    DarkReader.enable();
    darkModeButton.classList.toggle('active');
});

lightModeButton.addEventListener('click', function () {
    DarkReader.disable();
    lightModeButton.classList.toggle('active');
});