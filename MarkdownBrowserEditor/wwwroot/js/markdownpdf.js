// ---------------------------------
// --- Markdown to PDF Converter ---
// ---------------------------------
var markdownpdf = require("../lib/markdown-pdf")
var concat = require('../lib/concat-stream')
var editorModule = require('./editor')

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

// Start file download.
document.getElementById('mdToPDFButton').addEventListener("click", function () {
    var markdownText = editorModule.editor.getMarkdown();
    var text = concat(markdownpdf().from.string(markdownText).to.string());
    var filename = "MarkdownToPDF.pdf";

    download(filename, text);
}, false);
