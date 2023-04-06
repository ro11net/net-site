var x = "fml"

// localFunction with a localVar inside the function
// This will define a function
function localFunction(){
    //This will create a variable and store value 50
    var localVar = 50;
    console.log(localVar);
}
//This will print the value of variable -->
console.log(localVar)

var globalVar = 5
function newFunction(){
    console.log(globalVar);
}
console.log(globalVar)
newFunction();

// Hoisting: the concept that all variables are logically moved to top when the program is run. This means undeclared vars can be used. 

// Strings: Anything inside quotes is a string.

var newStr = "Hey I am a string!"

// Find the length of the string
stringName.length;

var newStr1 = "This is also a string for 2 reasons";
var strLength = newStr1.length;

// To join or concatenate two strings the concat method is used.
string1.concat(string2)

var string1 = "Hey";
var string2 = "String";
var string3 = string1.concat(string2)

// String concatenation can also work using the '+' operator

var string4 = "Hey";
var string5 = "String 6";
var string6 = string4 + string5;

//Sub string extraction method called 'substr' 
var myString = "I am in love with strings.";
myString.substr(5,7); //Pick 7 characters beginning from the 5th position returning "in love"

//toUpperCase() method is used to convert a string to uppercase
//toLowerCase() method is used to convert a string to lowercase

var myCase = "Don't mess with my case.";
myCase.toUpperCase(); // Will return the value of the variable 'myCase' in all upper case letters ie; "DON'T MESS WITH MY CASE."
myCase.toLowerCase(); // Will return the value of the variable 'myCase' in all lower case letters ie; "don't mess with my case."


//The toFixed method is used for rounding off numbers to a fixed number of decimal places
var myNum = 3.162345;
myNum.toFixed(2); //Will round off the value stored in the variable 'myNum' to the 2nd decimal place resulting in; "3.16"
myNum.toFixed(1); //Will round off the value stored in the variable 'myNum' to the 1st decimal place resulting in; "3.2"

//The toString method is used to convert variables of type 'number' and return them as type 'string'
var myNum1 = 456;
myNum1.toString();

//The toPrecision method is used to return a rounded off number with a precise number of decimal places
var myNum2 = 35.163847;
myNum2.toPrecision(3); //Will return the value of the variable 'myNum2' rounded off with exactly 3 numbers; "35.2"
myNum2.toPrecision(5); //Will return the value of the variable 'myNum2' rounded off with exactly 5 numbers; "35.164"

//Objects in JS
// 3 Ways to define an object: 1, object literal. 2, new keyword. 3, object constructor
// object literal defines an object like any other variable. var objectName followed by itemns inside curly brackets
var Student = {
    name: "Roger",
    class: 12,
    roll_no: 50
}

//New keyword refers to creating an instance of the object
var Student1 = new Object();
Student1.name = "Bernie";
Student1.class = 11;
Student1.roll_no = 35;
// dot operator (.) is used to write keys and assign values to it

// Object constructor is a function which has the same name as the object

function Student2(name, class, roll_no){
    this.name  = name;
    this.class = class;
    this.roll_no = roll_no;
}
var Student3 = new Student2("Sanders", 9, 25);

// Accessing properties of JS objects
// 1, dot operator. 2, bracket notation
// Dot operator (.) Can be used to to replace values of existing properties of an object
Student.name = "Margret";
// Dot operator (.) Can also be used to add properties and values to an object
Student.house = "Yellow";
// Bracket notation can be used to access object properties
Student['name']; // Returns the same results as Student.name
Student['name'] = "Thatcher"; // Will assign a new value to the property name of object Student

// Date is a built-in JS Object
var myDate = newDate(); //By default the myDate variable with the date object will contain a long string with day, month, day of the month, year, time, and time zone properties
// Date methods
getDay() // Returns the day of the week as a number between 0 and 6
getDate() // Returns the day of the month as a number between 1 and 31
getTime() // Returns the number of milliseconds elapsed since January 1, 1970
getFullYear() // Returns the current year
getMonth() // Returns the current month of the year
getMinutes() 
getHours()
getSeconds()
// Call these date methods using the (.) Dot operator
myDate.getFullYear();

// Methods for setting property values for the Date object
setDate()
setTime()
setFullYear()
setMonth()
setMinutes()
setHours()
setSeconds()
myDate.setFullYear(2025); //Uses the dot operator and the setFullYear method on the date object held by the variable 'myDate' to change the value of the Year property within the Date object of 'myDate'

// Document Object Model is a tree structure of objects created by the browser
// Accessing objects. Document is the root node, and must always be accessed before accessing any of the below nodes
// 3 Identifiers for ID'ing nodes. 1, Tag name. 2, Class. 3, ID. 
getElementsByTagName(); 
getElementsbyClassName();
getElemntById();

document.getElementsByTagName('p'); //This method will get all the paragraph tags present on the webpage.
document.getElementsByClassName('newClass'); // This method will get that tag based on the class name that is assigned to it
document.getElementById('newId'); // Will access the tag with the id that is assigned to it

// Methods to access HTML elements based on specified CSS selectors
querySelector() // This method returns only the first element that matches with teh selector
querySelectorAll() // This method returns all the matching elements

document.querySelector(".className"); 
document.querySelector("#idName");
document.querySelector("tagName");

// JS provides the innerHTML property which can used to set the contents of HTML
// First we must access the element and the use the innerHTML property with the dot operator

document.getElementById("lone-p").innerHTML = "Here is some text for you!"; //Will print "Here is some text for you!" on the HTML page
document.getElementById("not-alone").innerHTML = "Replaced you!"; 

//Example
<p id = "bold-me"></p>
document.getElementByID("bold-me").innerHTML = "<b>Just like this</b>";

// Creating new elements
// Use the createElement method
document.createElement("p");

//Example
<div id="meDiv"></div>
var newEl = document.createElement("p"); //Creates a new element and stores it as a variable
var someText = documentCreateTextNode("Some Text here!"); //Creates some for text for the new element are stores it in a variable
var insertThis = newEl.appendChild(someText); // Inserts the text from the var 'someText' and inserts it into the new elements
document.getElementById("meDiv").appendChild(insertThis); //Inserts the newly created element into the div

// removeChild method
<div id="thisDiv">
    <p id="thisP">
        Ha! I am going to be removed.
    </p>
</div>

var divEl = document.getElementById("thisDiv"); //This will access the div using the div's ID name and store it as a variable named 'divEl'
var pEl = document.getElementById("thisP"); //This will access the 'p' element by the p's ID name and store it as a variable named 'pEl'
divEl.removeChild(pEL); //This will remove the paragraph element from the div

//Set Attribute method
//setAttribute method can set the value of attributes present in elements
//setAttribute uses 2 parameters. 1, name of attribute. 2, value of attribute. 
//Example

<a>Google</a>
var aEl = document.querySelector("a"); //This will access the anchor element and store it as a variable named 'aEl'
aEl.setAttribute("href","http://google.com"); //This will set a href attribute with a value or 'http://google.com' in the element

//Remove Attribute
//removeAttribute method takes only the name of the attribute as an argument
//Example

<a href="http://google.com">Google</a>
document.querySelector("a").removeAttribute("href");

// Manipulating CSS elements with JS
// Use the style property of  the CSS element

el.style.CSSProperty = value;
<p>Here I come, again.</p>
var el = document.querySelector("p");
el.style.fontSize = "25px";
el.style.color = "green";
el.style.display = "none";
el.style.background = "red"; //Will change the background color of the selected element to RED

document.querySelector("p").style.margin = "20px"; //Will create a margin of 20 pixels on all sides of the element 'p'

//Events
onclick(); //Occurs when the HTML element is clicked 
onload(); //Occurs when the browser finishes loading the web page
onkeydown(); // Occurs when any key on the keyboard is pressed
onmouseout(); //Occurs when the pointer is moved out of any element
onmouseover(); //Occurs when the pointer moves over any element

//Events can be written inline
<button onlick="alert('Oh! Clicked.')">Click me</button>;

// Events can also be written as functions
<button onclick="clicked()">Click me</button>;

function clicked(){
    alert('Oh! Clicked.');
}

//The Event Listener function allows us to attach events to the HTML elements
<button>Click me</button>
var myBtn = document.querySelector("button");
myBtn.addEventListener('click',function(){ //addEventListener method takes 2 parameters. 1, type of event. 2, function.
    alert("Oh! Clicked."); // The function tells what to do when the event is encountered. The type of event here is 'click' and the function is 'alert'.
})

// Remove Event Listener
// This function also take two arguments. 1, the event to remove. 2, function to perform when the event is removed. 
var myBtn1 = document.querySelector("button");
myBtn1.removeEventListener('click');

// Browser Object Model enables JS to interact with the browser
// Consists of an object known as Window
// The window object represents the browser window. Every object is a child of the window object. Even the document object is a child of the window object.
// The screen object contains info about the user's screen.
// The history object contains info about the user's browser history.
// The location object which gives us access to the URL.
// The navigator object gives us details about the user's browser. 

window.innerHeight() //Returns the browser window height in pixels excluding the tool bar and scroll bar
window.innerWidth() // Returns the browser window width in pixels excluding the tool bar and scroll bar

window.screen.height/width
screen.height(); //Returns the height of the entire user's screen in pixels, and includes the tool bar and the scroll bar
screen.width

// History object gives access to the history of the browser using the back() and forward() method
history.back(); //Return is the same as pressing the back button on the browser
window.history.forward(); // Return is the same as pressing the forward button on the browser

// Location object returns details about the URL. hostname, and protocol.
window.location.href(); //Returns the URL of the current page
window.location.hostname(); //Returns the domain name of the website
window.location.protocol(); //Returns the protocol of the website

//Navigator Object can return information such as
appName(); //Returns the name
appVersion(); //Returns the version
cookieEnabled(); //Returns true is cookie is enabled, else returns false
ononline(); //Returns true is the browser is online else returns false

//Cookies in JS enable us to store data in the user's browser
document.cookie = "key1:value1;"; // Use this syntax when creating cookies
// By default cookies are deleted when the browser is closed, but an expiration date can be set manually with the field 'expires'

document.cook = "key2:value2;expires:Date";

var myCook = document.cookie; //Returns the cookies which are already present

//Replace cookies in the same way they are created
document.cook = "username=Roger Sand; expires=Thu, 18 Dec 2023 12:00:00 UTC; path=/";

//Delete existing cookies
document.cookie = "username=; expires= Past_date;";

//ES6 variables
// Variables declared using var are function scoped
// ES6 can declare variables using 'let' and 'const'
// 'let' is the same as 'var' except it is block scoped
// Block scopes are created when we write conditional statements or loops
// Example of a var with block scope

for(var count=0; count<5; count++)
{//some action}
console.log(count);

for(let count=0; count<5; count++)
{//some action}
console.log(count);

//const() is used to declare constant variables

// Arrow function is the ES6 shorthand way of writing functions
// Functions can then be stored in a variable for later use
let varName = (parameters) => {};

//Template strings use backticks (``) instead of double or single quotes
let str = `Hey, its a string template.`;

let a = 5;
let str1 = `I am ${a} years old.`; 
console.log(str1); //Will return "I am 5 years old."

//Class in JS are methods and variables combined
//Methods are the functions declared inside a class
// Declare a class using the keyword class
class className{};
//Or declare a class using the class expression
var varName = class{};
// Or declare a named class expression and store it in a variable
var class2Name = class class2Name{};

//Constructor method is a special method in a class used for creating and initializing objects created within its class
// Only 1 constructor method in a class
// Example defining a class

class Student{ //Defines a object type class named Student
    constructor(name, roll_no){
        this.name = name; // Defines a constructor for the class student and initializes it with the variables 'name' and 'roll_no'
        this.roll_no = roll_no;
    }
    showName(){ //Defines a method of the class Student
        return name; //The method returns the value of the key 'name' from the class 'Student'
    }
    showRoll(){ //Defines a method of the class Student
        return roll_no; // The method returns the value of the key 'roll_no' from the class 'Student'
    }
}

let objName = new ClassName();  // The keyword 'new' instantiates the object class named 'ClassName' for use

let student1 = new Student("Mickey", 45); //Creates an instance of the class 'Student' with parameters to define the values of 'name' and 'roll_no'

student1.showName(); //Calls the 1st method using the instance variable
student1.showRoll(); // Calls the 2nd method using the instance variable




