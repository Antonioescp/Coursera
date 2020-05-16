// lecture 40
// var x = "Hello World";


// lecture 41
// var must always be used to declared a variable
// same variable can hold different types

// functions
// function name (event) {}
// a variable can store a function, var a function (event) {}
// functions are invoked taking the name with parenthesis a()
// arguments are define without var function a (x,y) {}

// All legal
// function compare (x,y) {}
// var a = compare(4,5); we can save it to a var
// compare(4, "a"); we can use different value types as arguments
// compare(); it can be invoked argumentless

// var message = "in global";
// console.log("global: message = " + message);

// var a = function () {
// 	var message = "inside a";
// 	console.log("a: message = " + message);
	
// 	var b = function () {
// 	console.log("b: message = " + message);
// 	}
// 	b();
// }
// a();



// lecture 42
// var x; // if commented an error shows
// console.log(x);

// if(x == undefined){ // undefined is a reserved keyword
// 	console.log("x is undefined");
// }

// x = 5;
// if (x == undefined){ // again undefined keyword
// 	console.log("x is undefined");
// } else{ // since it was defined, this will execute
// 	console.log("x has been defined");
// }

// lecture 43
// String concatenation
// var string = "Hello";
// string += " World";
// console.log(string + "!");

// // Regular math operators
// console.log((5+4) / 3);
// console.log(undefined / 5); // Shows NaN wich means, not a number

// function test1 (a) {
// 	console.log(a/5);
// }

// test1(); // will output NaN

// Equality
// var x = 4, y = 4; // var shortcut definition
// if (x == y){
// 	console.log("x=4 is equal to y=4");
// }

// x = "4";
// if (x==y){ // converts types to the other so it can be compared
// 	console.log("x='4' is equal to y=4");
// }

// if(x===y){ // compares but it does not converts wich is called stric equallity or type coertion
// 	console.log("x equal to y")
// }else{
// 	console.log("Strict: x is not equal to y")
// }

//Objects
// var company1 = new Object();
// company1.name = "Aftermath";
// company1.ceo = new Object();
// company1.ceo.firstName = "Juan";
// company1.ceo.lastName = "Perez";
// company1.stackvalue = true;

// var company = {
// 	name: "aftermath",
// 	ceo: {
// 		firstName: "Juan", lastName: "Perez"
// 	}
// }


// console.log(company);
// console.log(company1);

// var company = new Object();
// company.name = "Facebook";
// company.ceo = new Object();
// company.ceo.firstName = "Mark";
// var soc = "stock of company";
// company[soc] = 140; // so we can use spaces for names

// console.log(company);

// console.log(company[soc]);
// console.log(company.ceo.firstName);

// simpler object creation

// var objectLiteral = {
// 	is_a: "Company",
// 	name: "Facebook",
// 	ceo: {
// 		firstName: "Mark",
// 		lastName: "Zuckaritas",
// 		favColor: "Red"
// 	},
// 	$stock: 110
// };

// console.log(objectLiteral);

// function createCompany (name, ceofn, ceoln){
// 	var company = {
// 		"nombre": name,
// 		"CEO": {
// 			"primer nombre": ceofn,
// 			"apellido": ceoln
// 		}
// 	};
// 	return company;
// }

// var newCompany = createCompany("Facebook", "Mark", "Zukaritas");

// console.log(newCompany);

// console.log(newCompany["CEO"]["primer nombre"]);

// Functions are regular objects

// function multiply(x,y){
// 	return x*y;
// }

// multiply.version = "v1.0";

// console.log(multiply.version);

// //function factory
// function makeMultiplier (multiplier){
// 	var myFunction = function (x){
// 		return multiplier*x;
// 	};
// 	return myFunction;
// }

// var multiplyBy3 = makeMultiplier(3);

// console.log(multiplyBy3);

// console.log(multiplyBy3(10));

// // passing function as argunments
// function doOperation(x, operation){
// 	return operation(x);
// }

// var result = doOperation(5,multiplyBy3);
// console.log(result);
// result = multiplyBy3(5);
// console.log(result);

// function Cubo(a,b,c,d){
// 	this.a = a;
// 	this.b = b;
// 	this.c = c;
// 	this.d = d;
// }

// Cubo.prototype.perimetro = function () {
// 	var per = this.a+this.b+this.c+this.d;
// 	return per;
// };

// Cubo.prototype.arribaA = function (){
// 	this.a += 10;
// };

// var cubo1 = new Cubo(1,1,1,1);
// console.log("Created: " + cubo1);
// cubo1.arribaA();
// console.log("Lado a: "+cubo1.a);
// cubo1.arribaA();
// console.log("lado a: "+cubo1.a);

// IIFE inmediatly invoked function expresion 

