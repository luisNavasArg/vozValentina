document.addEventListener('DOMContentLoaded', inicializar);
var frases = new Array();
function inicializar(){
 var boton = document.getElementById('boto');
 boton.style.backgroundColor="#ea80ef";
 boton.style.Color="black";
 boton.style.fontSize=15;
 boton.style.boxShadow="4px 3px 5px black";
 boton.style.borderRadius=30 + "px";
 boton.style.padding=10 + "px";
 boton.style.border = 0 + "px";
 
 var botonHablar =document.getElementById('botonHablar');

}
var lista= [];
function hablar(id){
    var text = document.getElementById(id).value;
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
     frases.push(text);
   }
     speechSynthesis.speak(u);

}

var todasFrases= " ";

function guardarTexto(){
  for (var i = 0; i < frases.length; ) {
    todasFrases =todasFrases + " \n" + frases[i];
    i++;
  }
  //  create a new Blob (html5 magic) that conatins the data from your form feild
      var textFileAsBlob = new Blob([todasFrases], {type:'text/plain'});
  // Specify the name of the file to be saved
      var fileNameToSaveAs = "mica.txt";

      console.log(todasFrases);

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
