document.addEventListener('DOMContentLoaded', inicializar);
function inicializar(){
  alert();}
function hablar(){
    var text = document.getElementById('q').value;
    var u = new SpeechSynthesisUtterance();
   u.text = text;
   u.lang = 'es';
   u.name = "spanish";
   u.rate = 1;
   u.onend = function(event) {
     var voiceSelect = document.getElementById('voiceSelect');
     var option = document.createElement('option');
     option.textContent = text;
     voiceSelect.appendChild(option);
    }
   speechSynthesis.speak(u);
}
shortcut.add("Ctrl+Shift+x",function() {
	alert("Hi there!");
});

function saveTextAsFile()
{
// grab the content of the form field and place it into a variable
    var textToWrite = document.getElementById("q").value;
//  create a new Blob (html5 magic) that conatins the data from your form feild
    var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});
// Specify the name of the file to be saved
    var fileNameToSaveAs = "mica.txt";

// Optionally allow the user to choose a file name by providing
// an imput field in the HTML and using the collected data here
// var fileNameToSaveAs = txtFileName.text;

// create a link for our script to 'click'
    var downloadLink = document.createElement("a");
//  supply the name of the file (from the var above).
// you could create the name here but using a var
// allows more flexability later.
    downloadLink.download = fileNameToSaveAs;
// provide text for the link. This will be hidden so you
// can actually use anything you want.
    downloadLink.innerHTML = "My Hidden Link";

// allow our code to work in webkit & Gecko based browsers
// without the need for a if / else block.
    window.URL = window.URL || window.webkitURL;

// Create the link Object.
    downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
// when link is clicked call a function to remove it from
// the DOM in case user wants to save a second file.
    downloadLink.onclick = destroyClickedElement;
// make sure the link is hidden.
    downloadLink.style.display = "none";
// add the link to the DOM
    document.body.appendChild(downloadLink);

// click the new link
    downloadLink.click();
}

function destroyClickedElement(event)
{
// remove the link from the DOM
    document.body.removeChild(event.target);
}

// EOF
