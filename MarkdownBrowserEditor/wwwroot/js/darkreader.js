// Dark Reader
const DarkReader = require('../lib/darkreader');

var lightModeButton = document.getElementById('enableLightMode');
DarkReader.enable();

if (DarkReader.isEnabled()) {
    lightModeButton.innerHTML = "asd";
    console.log("asd");
}

//var darkModeButton = document.getElementById('enableDarkMode');
//var lightModeButton = document.getElementById('enableLightMode');

//darkModeButton.addEventListener('click', function () {
//    DarkReader.enable();
//    darkModeButton.classList.toggle('active');
//    darkModeButton.innerHTML = "Light Mode Activated";
//});

//lightModeButton.addEventListener('click', function () {
//    DarkReader.disable();
//    lightModeButton.classList.toggle('active');
//    lightModeButton.innerHTML = "Night Mode Activated";
//});