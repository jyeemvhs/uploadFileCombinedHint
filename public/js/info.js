

function successInfo(data) { 
	if (!data)
		alert("Error data");
	else {
		//???
	}
}

function requestClicked(){
$.get("/info2",successInfo);
  return false;
}

$(document).ready(function(){   
  	$("#requestButton").click(requestClicked);
});  		
  
  
