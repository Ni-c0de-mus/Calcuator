/*
//String Data Type
var string;
string = 'It\'s a bird';

//Numeric Data Type
var num1 = 1;
var num2 = 3.14347545646;

//Boolean Data Type
var bool1 = true;
var bool2 = false;
var bool3 = 1;
var bool4 = 0;

//Undefined Data Type
var hey;

// Null Data Type
var hey2 = null;



console.log();
document.write();

//Funtions

var width = 6
var height = 3
var area = width * height

function getArea(width, height) {
 return area;
}


var greeting = "Hello World"

function sayHello() {
  document.write(greeting);
}

sayHello(); */

//Conditions
/*
var i = 1
var e = 1
if (i > e) {
  alert("i is greater than e");
}
if (i < e) {
  alert("i is less than than e");
}
else {
  alert("i is equal to e");
}
*/

//Loops

//FOR Loop

/*
for (i=1; i<=5; i++) {
  document.write(i +"<br />");
}
*/

//WHILE Loop
/*
var i=0;
while (i<=10) {
   document.write(i + "<br />");
   i++;
}
*/

//FUNCTIONS

/*function myNumbers(a, b) {
  return a*b;
}

var x = myNumbers(5,6)

console.log(x) */

//Alerts, Promt's, and Confirmation'
/*
alert("OOF");

var user = prompt("OOF")

var result = confirm("You sure bro?");
*/

//OBJECTS
/*
function person (name, age) {
  this.name = name;
  this.age = age;
}

var Liam = new person("Liam", 14);
var James = new person("James", 21);

alert(Liam.name);
*/

//METHODS
/*
function person(name, age) {
  this.name = name;
  this.age = age;
  this.changeName = function (name) {
    this.name = name;
  }
}

var p = new person("David", 21);
p.changeName("John");

alert(p.age);
*/

//ARRAYS
  /*var numbers = ['Five',77,'Six',43]
  alert(numbers.reverse());
*/

//LOOPS (TRAVERSY)
/*
  var numbers = [33,54,76,34,2,6];
  numbers.forEach(function(number){
    console.log(number);
  });
*/
//Conditions (TRAVERSY)
/*
  var fruit = 'mango';

  switch(fruit){
    case "banana":
      alert('I hate bananas');
      break;
    case "apple":
      alert('I love apples');
      break;
    case "orange":
      alert('Oranges are ok');
      break;
    default:
      alert('I love fruit');
      break;
  }
*/

//Objects  (TRAVERSY)

//Object Literal

/*
var person = {
    firstName: 'Brad',
    lastName: 'Traversy',
    age: 34,
    children: ['Brianna', 'Nicholas'],
    address: {
      street: '555 Something st',
      city: 'Boston',
      state: 'MA'
    },
    fullName: function() {
      return this.firstName +" "+this.lastName;
    }
}

  console.log(person.fullName());
*/

//Object Cunstructor
/*
var apple = new Object();
apple.color = 'red';
apple.shape = 'round';

apple.describe = function(){
  return 'The color of an Apple is ' +this.color +
  ', and the shape of an Apple is ' + apple.shape +
   '.';
}

console.log(apple.describe());
*/

//Constructor Pattern
/*
function Fruit(name, color, shape){
  this.name = name;
  this.color = color;
  this.shape = shape;

  this.describe = function(){
      return 'A ' +this.name+ ' is ' + this.color
      +' and has a ' + this.shape + ' shape.';
  }
}

var apple = new Fruit('apple', 'red', 'round');

var melon = new Fruit('melon', 'green', 'round');

console.log(melon.describe());
*/

//Object Arrays
/*
var users = [
  {
    name: 'John Doe',
    age: 30
  },
  {
    name: 'John Smith',
    age: 45
  },
  {
    name: 'Shadow Teck',
    age: 14
  },
]

console.log(users[0].age);
*/

//Events (TRAVERSY)
/*
function showDate(){
  var time = document.getElementById('time');
  time.innerHTML = Date();
}

function clearDate(){
  var time = document.getElementById('time');
  time.innerHTML = '';
} */

//Interactivity (TRAVERSY)
/*function changeBackground(x) {
  console.log(x.value);
  var body = document.getElementById('body');
  body.style.backgroundColor = x.value;
}
*/

//Forms (TRAVERSY)
/*
function validateForm() {
  var firstName = document.forms["myForm"]["firstName"].value;
}

if(firstName == null || firstName == " "){
  alert("First Name is Required");
}
*/

function calc() {
  var a = parseInt(document.querySelector("#value1").value);
  var b = parseInt(document.querySelector("#value2").value);
  var op = document.querySelector("#operator").value;
  var calculate;

  if (op == "add") {
    calculate = a + b;
  } else if (op == "min") {
    calculate = a - b;
  } else if (op == "div") {
    calculate = a / b;
  } else if (op == "mul") {
    calculate = a * b;
  }

  alert(calculate);

}
