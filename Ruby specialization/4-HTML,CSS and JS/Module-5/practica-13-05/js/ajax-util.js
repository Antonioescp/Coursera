(function (global){

	var ajaxTools = {};

	function inicializador () {
		if(window.XMLHttpRequest){
			return (new XMLHttpRequest());
		}else if(window.ActiveXObject){
			return (new ActiveXObject("Microsoft.XMLHTTP"));
		}else {
			alert("Su navegador no es compatible con ajax");
			return (null);
		}
	}

	ajaxTools.realizarPeticion = function (url, responseHandler, isJsonResponse){
		var peticion = inicializador();

		peticion.onreadystatechange = function (){
				handleResponse(peticion, responseHandler, isJsonResponse);
			};

		// realizando peticion 
		peticion.open("GET", url, true);
		peticion.send(null); // POST Only
	};

	function handleResponse (request, responseHandler, isJsonResponse){
		if((request.readyState == 4)&&(request.status == 200)){
			if(isJsonResponse == undefined){
				isJsonResponse = true;
			}
			if(isJsonResponse){
				responseHandler(JSON.parse(request.responseText))
			}else{
				responseHandler(request.responseText);
			}
		}
	}

	global.$ajaxTools = ajaxTools;

})(window);