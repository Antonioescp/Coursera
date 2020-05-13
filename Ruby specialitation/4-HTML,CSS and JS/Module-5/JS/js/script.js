document.addEventListener("DOMContentLoaded",
	function (event) {
		//querySelector atajo
		function qs(nombre){
			return document.querySelector(nombre);
		}

		usuario = {
			nombre: null,
			edad: null,
			clase: null
		};

		function enviar () {
			usuario.nombre = qs("#nombre").value;
			usuario.edad = qs("#edad").value;
			usuario.clase = qs("#clase").value;
		}

		qs("#enviar").onclick = enviar;
	}
);
