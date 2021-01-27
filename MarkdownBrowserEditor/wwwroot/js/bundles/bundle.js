(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
//// This string gets set when the markdown editor webpage is opened
//var previewContent = '![image](https://uicdn.toast.com/toastui/img/tui-editor-bi.png)'
//    + '\n\n# Awesome Editor!'
//    + '\n\nIt has been _released as opensource in 2018_ and has ~~continually~~evolved to ** receive 10k GitHub ⭐️ Stars **.'
//    + '\n\n## Create Instance'
//    + '\n\nYou can create an instance with the following code and use`getHtml()` and`getMarkdown()` of the[Editor](https://github.com/nhn/tui.editor).'
//    + '\n\n> See the table below for default options'
//    + '\n\n> > More API information can be found in the document'
//    + '\n| name | type | description |'
//    + '\n| --- | --- | --- |'
//    + '\n| el | `HTMLElement` | container element |'
//    + '\n\n## Features';
//// -----------------------
//// --- Markdown Editor ---
//// -----------------------
//// If changing this file, make sure to bundle it using browserify
//// Run the following command in the command line: 'npm run build'
//const Editor = require('../lib/toastui-editor');

//const editor = new Editor({
//    el: document.querySelector('#editor'),
//    height: '800px',
//    initialEditType: 'markdown',
//    previewStyle: 'vertical',
//    initialValue: previewContent
//});

//exports.editor = editor;
//// ------------------------------------
//// --- Real-time collaborate server ---
//// ------------------------------------s
//var signalR = require('../lib/signalr');

//var connection = new signalR.HubConnectionBuilder()
//    .configureLogging(signalR.LogLevel.Debug)
//    .withUrl('/editorhub')
//    .build();

//// On button click, connect the user to the specified group. In a group mutiple users can meet and edit together
//var group = document.getElementById("groupName");
//document.getElementById('joinGroupButton').addEventListener('click', function () {

//    // Start connection and make sure the server is successfully connected. Also, inform the user
//    var serverStatus = document.getElementById('serverStatus');
//    connection.start().then(function () {
//        serverStatus.classList.add('badge-success');
//        serverStatus.innerHTML = 'Connected to group ' + group.value;
//        connection.invoke("JoinGroup", group.value).catch(err => console.error(err));
//    }).catch(function (err) {
//        serverStatus.classList.add('badge-danger');
//        serverStatus.innerHTML = 'Not Connected';
//        return console.error(err.toString());
//    });
//})

//// On user edit, the markdown is changed
//connection.on('ReceiveMessage', function (markdownText) {
//    editor.setMarkdown(markdownText, true);
//})

//// When a user presses a button, the function gets the text and progagates it to the hub, where is received by the "ReceiveMessage" function
//document.getElementById('editor').addEventListener('keyup', function (event) {
//    var markdownText = editor.getMarkdown();
//    connection.invoke('SendMessage', markdownText).catch(function (err) {
//        return console.error(err.toString());
//    });
//    event.preventDefault();
//})

//const DarkReader = require('../lib/darkreader');

//var lightModeButton = document.getElementById('enableLightMode');
//DarkReader.enable();

//if (DarkReader.isEnabled()) {
//    lightModeButton.innerHTML = "asd";
//    console.log("asd");
//} else {
//    lightModeButton.innerHTML = "dsa";
//    console.log("dsa");
//}
},{}]},{},[1]);
