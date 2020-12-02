var inputText = document.querySelector("#input-txt")
var outputText = document.querySelector("#output-txt")
var btnTranslate = document.querySelector("#btn-translate")

// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text="
var serverURL = "https://api.funtranslations.com/translate/yoda.json?text="

btnTranslate.addEventListener("click",
function callback(){
    fetch(serverURL + inputText.value)
    .then(res => res.json())
    .then(json => outputText.innerText = json.contents.translated)  
})