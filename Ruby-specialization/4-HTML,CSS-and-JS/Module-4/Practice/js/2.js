(function(window) {
	var jorgeGreeter = {};
	jorgeGreeter.name = "jorge";
	jorgeGreeter.decirHola = function (){
		console.log("Hola "+jorgeGreeter.name);
	}

	window.jorgeGreeter = jorgeGreeter;
})(window);