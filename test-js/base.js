
window.onload = (HttpRequest("quotes.json",storeJSON));

var jsonOutput;
var currentQuote = 0;

function storeJSON(fileOutput){
	jsonOutput = JSON.parse(fileOutput);
}

document.getElementById('next-button').onclick = changeQuestion;

function changeQuestion(){
	var quoteArray = jsonOutput.quotes;
	var questionLength = quoteArray.length;
	var randNumber = Math.floor(Math.random() * questionLength);

	//change visibility
	
	if(currentQuote === randNumber){
		return changeQuestion();
	}

	document.getElementById("quote-container").classList.add("visible-hidden");
	document.getElementById("quote-container").classList.remove("visible-shown");
	


	//show visibility
	setTimeout(function(){
		document.getElementById("quote-text").innerHTML = quoteArray[randNumber]["quote-text"]; 
		document.getElementById("quote-author").innerHTML = quoteArray[randNumber]["quote-author"];

		document.getElementById("quote-container").classList.remove("visible-hidden");
		document.getElementById("quote-container").classList.add("visible-shown");
		currentQuote = randNumber;
	},500);	

}