
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

	if(currentQuote === randNumber){
		changeQuestion();
	}
	else{
		//change visibility 
		document.getElementById("quote-text").innerHTML = quoteArray[randNumber]["quote-text"]; 
		document.getElementById("quote-author").innerHTML = quoteArray[randNumber]["quote-author"];
		//show visibility
		currentQuote = randNumber;
	}
}
function HttpRequest(sUrl,fpCallback){
	request = new XMLHttpRequest();
	request.open("Get",sUrl,true);

	var tempRequest = request;
	function request_readystatechange(){
		if(tempRequest.readyState === 4 ){
			if(tempRequest.status === 200){
				fpCallback(tempRequest.responseText);
			}
			else{
				console.log("An error occured trying to connect to the server:" + tempRequest.status);
			}
		}
		
	}

	request.onreadystatechange = request_readystatechange ;
	request.send();
}