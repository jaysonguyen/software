/* When should use const*/
/* 
    Use const when you declare
    + A new Array
    + A new Function
    + A new RegExp
*/

/* You cannot reassign the array */
const cars = ['mers, volvo, BMW'];
cars[0] = 'vinfast'
console.log(cars[0]);
/* cars = ['toyota, volvo, audi'] //ERROR */

/* Constant Object */
const car = {type: 'Fiat', model: '500', color: "white"};
/* You can chageg a property */
car.color = 'red';
console.log(car.color);
// ypu can add a property
car.owner = "Nguyen";
console.log(car.owner);

/* You can not reassign the object */
/* car =  {type: 'volvo', model: 'EX400', color: "red"}; // ERROR */
const number2 = 10;
/* number2 = 2; //ERROR ASSIGNMENT TO CONSTANT VARIABLE */
console.log(number2);

/* REDECLARING */
var x = 2;
var x = 3;
x = 4;
console.log(x); 

/* Redeclaring an exsting "var", or "let" variable to "const", in the same
scope, is not allowed */

var x = 2; // Allowed;
//const x = 2; // Not Allowed; 
{
var x = 2; // Allowed; 
//const x = 2; // Not Allowed; 
}

{
//const x = 2; // Allowed; 
//const x = 2; // Not Allowed; 
}

/* Reassing an exsting :"const" variable, in the samw scope, is not allowed*/
const number4 = 2; //Allowed
// number4 = 2; // Not Allowed;
// var number4 = 2; // Not Allowed;
// let number4 = 2; // Not Allowed;
// const number4 = 2; // Not Allowed;

{
    const number5 = 2 // Allowed
    // number5 = 2 // Not Allowed;
    // var number5 = 2; // Not Allowed;
    // let number5 = 2; // Not Allowed;
    // const number5 = 2; // Not Allowed;
}

/* Redeclaring a variable with const, in another scope, or in a nother block, is allowed */
const number6 = 2;
console.log(number6);
{
    const number6 = 3;
    console.log(number6);
}

{
    const number6 = 4;
    console.log(number6);
}

/* Can use the variable before it is declared */
carName = 'mers';
var carName;

/* Const variable before it is declared will resullts in a referenceError */
/* alert(carName);
const carName = "volvo"; //ERROR */

/* Array */
const animals = ["dog, cat, lion"];
console.log(animals);
/* ARRAY ARE OBJECTS */
// use names to access its "members". In this example 
const person = {firstName: "John", 
    lastName: "Doe", 
    age: 46
};

//Array Element can be objects
// Can have different types in the same Array
// such as: function, object..
function myFunction(){
    console.log("hello");
}
var myArray = new Array(3);
myArray[0] = Date.now;
myArray[1] = myFunction();
myArray[2] = animals;

/* Array properties and Methods */
// cars.length //returns the number of elements
let length = animals.length;
console.log(length);
// cars.sort()  // Sorts the array

/* Accessing the First Array Element */
let ani = animals[0];
console.log(ani);
// Accessing the last array element
let lastani = animals[animals.length - 1];
console.log(lastani);

/* Looping array element */
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits.length;

text = "<ul>";
for (let i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";

document.getElementById("demo").innerHTML = text; 

/* Looping array element with forEach()
/* const fruits = ["Banana", "Orange", "Apple", "Mango"];
let text = "<ul>";
fruits.forEach(myFunction);
text += "</ul>";
document.getElementById("demo").innerHTML = text;

function myFunction(value) {
  let text;
  text += "<li>" + value + "</li>"; 
} */

// Adding Array Element
fruits.push("Lemon");
console.log(fruits);

fruits[fruits.length] = "Dragon Fruit"
console.log(fruits);

/* Note  */
// Array is accessed by number checking: Array.isArray(fruits)
// Object is accessed by named