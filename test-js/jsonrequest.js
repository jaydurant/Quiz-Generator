function HttpRequest(sUrl,fpCallback){
	//a new asynchronous request is created
	var request = new XMLHttpRequest();
	request.open("Get",sUrl,true);

	//the request_readystate function detects whether the request for data was successful by checking for the 200 status
	function request_readystatechange(){
		if(request.readyState === 4 ){
			if(request.status === 200){
				fpCallback(request.responseText);
			}
			//if the requst was not successful the error status code can be seen in the 
			else{
				console.log("An error occured trying to connect to the server:" + tempRequest.status);
			}
		}
		
	}

	request.onreadystatechange = request_readystatechange ;
	request.send();
}