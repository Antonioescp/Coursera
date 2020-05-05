(function(window){
	var toniGreeter = {};
	toniGreeter.name = "toni";
	toniGreeter.saludar = function (){
		console.log("Hola "+toniGreeter.name);
	}

	window.toniGreeter = toniGreeter;
})(window);
