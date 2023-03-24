var x = "Hellow World";
var js_sucks = true
document.write("Hello World");
document.write(x);



var a = 2;
var b = 3;
var c = a + b;
document.write(z);
var d = c++; // The variable d is equal to the variable c plus 1
var e = dd--; //The variable e is equal to the variable d minus 1
document.write(d);
d == c //Is the variable d equal to the variable c: true (1) or false (0)
a != b //Is the variable a not equal to the variable c: true (1) of false (0)

//Comparisons
mp > 5 && gb > 16 //megapixels must be greater than 5 and gigabytes must be greater than 16

mp > 10 || gb > 16 //megapixels must be greater than 10 or gigabytes must be greater than 16

//Conditionals
// if (condition){
//     Task to be performed if the condition is true. 
// }else{
//     Task to be performed if the condition is false.
// }

if (e>d){
    document.write("Hell Yeah!")
}
else{
    document.write("Hell Naw!")
}

// An ARRAY special variable which lets us store mutliple values in a single variable
// ARRAY values are written inside square brackets separated by commas
// ARRAYs can only store values of the same type ie, strings or integers, but not both

var array_item = ["item1", "item2", "item3"];
var array_nums = [2, 3, 5, 6, 4];

document.write(array_item[2]); //We should expect this set of instructions to print "item3" as that string is the 3rd item in the array "array_item" when counting from 0

// Loops... Looping is a repeat sequence of instructions until a condition is satisfied
var repeat = "I love Javascript";
//FOR LOOPS consist of 3 main parts. Declaring the initial value to the variable, the condition, and counter-statement
// Above the initial value to the variable repeat is 'I love Javascript'

var i; //Declare the variable i
for(i = 1; i <= 10; i++){ //Create the for loop that will set the initial value of the variable i as 1, and increment it by 1 until the value of i becomes equal to or greater than 1
    document.write("I love Javascript"); //Each time the loop repeats then the for loop will print the string 'I love Javascript'
}

//DO WHILE LOOP
//DO WHILE LOOPs are broken into 2 parts. Do; the instructions to be executed until it satisfies the condition. While; defines the condition.

// do{
//     block of code to be executed
// }while(condition);

var i = 1 //Declare the intial value of the variable i as 1
do{
    document.write("I love Javascript"); //Print the string 'I love Javascript'
    i = i +1; //And increase the value of the variable i by plus 1
}
while(i<=10);//This code will continue to execute while the variable i is less than or equal to 10

//Dialog Box
//There are 3 types of dialog boxes in Javascript
// 1. Alert dialog box, 2. Prompt dialog box, 3. Confirm dialog box

// Alert boxes display messages such as warnings and have only 1 button "OK" to select and proceed.

alert("I am a cool mfer!");

//Prompt dialog boxes are used to capture user input
//Consists of a text box for users to input values
//Dialog boxes also present two buttons; 'OK' and 'Cancel'

prompt("Who is your daddy?");

//Confirm dialog boxes present users with an option to confirm a selection
//Confirm dialog boxes present two buttons; 'OK' and 'Cancel' which translates to 'true(yes)' or 'false(no)'

confirm("Do you really want to delete your Daddy?");

//Functions are blocks of reusable code
//Functions are only used when they are called

// function feelme(){ // use the keyword function and give the function a name
//     code // place the reusable block of code defined by the function 'feelme' inside the curly brackets here
// }

function print(){ //defines the function named 'print'
    document.write("I know Javascript!"); //defined that the function named print will print the string "I know Javascript!" when called upon
}
print(); //Calls the function named 'print' and executes it, thus printing the string "I know Javascript!"

//Parameters are passed while calling functions
//Within the function parameters can be manipulated

function add(num1, num2){
    var result = num1 + num2;
    document.write(result);
}
add(3, 4);