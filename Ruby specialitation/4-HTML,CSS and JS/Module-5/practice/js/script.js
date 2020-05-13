// console.log(document.getElementById("title"));
// console.log(document instanceof HTMLDocument);

//	Event Handling
document.addEventListener("DOMContentLoaded",
	function (event){
		function sayHello(){
			this.textContent = "has been said";
			var name = document.getElementById("name").value;
			var message = "<h2>Hello " + name + "!</h2>";
			// document.getElementById("para").textContent = message;
			document.getElementById("para").innerHTML = message;

			if(name.toLowerCase()==="student"){
				var title = document.querySelector("#title").textContent;
				title += " & Lovin' it!";
				document.querySelector("#title").textContent = title;
				}
			}

		// unobstrusive
		document.querySelector("button").addEventListener("click",sayHello);
		document.querySelector("body").addEventListener("mousemove",
			function (event){
				if(event.shiftKey === true){
					console.log("X: " + event.clientX);
					console.log("Y: " + event.clientY);
				}
				}
			);
	}
);



// document.querySelector("button").onclick = sayHello;

