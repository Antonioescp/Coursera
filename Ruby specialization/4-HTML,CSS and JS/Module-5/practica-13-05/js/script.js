document.addEventListener("DOMContentLoaded", function (event){

	// query selector shortcut
	function qs (nombre) {
		return document.querySelector(nombre);
	}

	// enviar info
	function enviar () {
		var html = "Nombre: ";
		html += qs("#nombre").value || "valor no ingresado";
		html += "<br>";
		html += "Edad: ";
		html += qs("#edad").value || "valor no ingresado";

		qs("#target").innerHTML = html;
	}

	qs("#send").onclick = enviar;
	// enviada

	// ajax implementado

	function show () {
		$ajaxTools.realizarPeticion("snippet/red_div.txt",
				function (request){
					qs("#show_target").innerHTML = request;
				},false
			);
	}

	qs("#show").onclick = show;

	function hide(){
		qs("#show_target").innerHTML = "";
	}

	qs("#hide").onclick = hide;

	function esconder () {
		qs("#target").innerHTML = "";
	}

	qs("#unsend").onclick = esconder;

	window.usuario = {
		nombre:null,
		apellido:null,
		edad:null
	}

	function get (){
		$ajaxTools.realizarPeticion("data/data.json",function(request){
			usuario = request;
			qs("#data").innerHTML = "Bienvenido " + usuario.nombre;
		});
	}

	qs("#get_data").onclick = get;
});