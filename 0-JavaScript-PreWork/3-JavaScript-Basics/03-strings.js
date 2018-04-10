// String Examples
console.log("I was born in Indianapolis.");
console.log("I've lived in three states.");
console.log("I like Indiana the best.");
console.log("My bank account had two million bucks in it. It's gone now.");

// Variables
var tweet = "Lebron is king! Westbrook for president!";
var facebookPost = "Just thought I'd share this goofy video of my dog eating our couch.";
var username = 'jamespauloconnor';

// NUMBERS IN A STRING
var password = "123456789HELLO";
var birthDay = "August 11";

// Concatenation
// Concatenating happens when we add 2 strings together.
var birthCity = "Indianapolis ";
var birthState = "Indiana";

console.log(birthCity + ", " + birthState);

// Strings and Numbers
// We can mix strings and integers together.
var ageInAugust = 40; 
var highSchool = "Bill Murray High School";
var graduatedHighSchool = 1994;

console.log(highSchool + commaWithSpace + graduatedHighSchool);
console.log("My age in August:", ageInAugust);

// Write a string that has two variables. Output I graduated from Bill Murray High School in 1994.
var gradYear = 1994;
var highSchool = "Bill Murray High School";

console.log("I graduated from " + highSchool + " in " + gradYear + ".");

// String Methods
//length - returns the length of a string (including spaces)
console.log(highSchool.length); 

//lower or upper case
console.log(highSchool.toUpperCase()); //BILL MURRAY HIGH SCHOOL
console.log(highSchool.toLowerCase()); //bill murray high school

console.log(highSchool.split(" ")); //splits the string into an array on each space['Bill', 'Murray', 'High', 'School' ]
console.log(highSchool.slice(10)); // cuts off everything before the nth index