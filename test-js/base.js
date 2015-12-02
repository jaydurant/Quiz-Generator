
window.onload = (HttpRequest("quotes.json",storeJSON));

var jsonOutput;

function storeJSON(fileOutput){
	jsonOutput = JSON.parse(fileOutput);
}

document.getElementById('next-button').onclick = changeQuestion;

function changeQuestion(){
	var questionLength = jsonOutput.quotes.length;
	Math.floor(Math.random() * questionLength);
}