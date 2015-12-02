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