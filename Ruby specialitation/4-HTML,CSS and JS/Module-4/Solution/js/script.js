(function (window){
	var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

	for (var i = 0; i < names.length; i++) {

	  if (names[i].charAt().toLowerCase() == "j") {
	    byeSpeaker.speak(names[i]);
	  } else {
	    helloSpeaker.speak(names[i]);
	  }
	  console.log()
	}

})(window);



