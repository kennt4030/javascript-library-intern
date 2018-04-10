// Description
// Conditionals are used to check certain conditions in your application. Conditionals have the power to alter the state of your application based on certain conditions being met or unmet, true or untrue.
// In this module, we'll look at if statements and how they are used with conditionals.

// Sample Code
//1
var isOn = true;

//2
if(isOn === true) {
    console.log("The light is on.");
}

// Shorter Phrasing
// You'll often see the statement written in a shorthand way:
var isOn = true;

if(isOn) {
    console.log("The light is on. It's bright.");
}

// More Practice
// Let's write a conditional that checks to see if the weather is greater than 70. If it is, we want to print "Wear shorts today! It's going to be hot!".
var weather = 75;

if(weather > 70){
    console.log("Wear shorts today! It's going to be hot!");
}

