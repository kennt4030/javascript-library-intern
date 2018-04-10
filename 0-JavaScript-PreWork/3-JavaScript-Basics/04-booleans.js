// Description
// Very often, in programming, you will need a data type that can only have one of two values, such as:
YES / NO
ON / OFF
TRUE / FALSE

// Examples
var isLoggedIn = true;
var isAuthenticated = true;
var hasLoggedInToday = false;
var hasToken = false;

// Comparison Operators

// Operator	Meaning
// ==	Equality
// ===	Strict Equality
// !=	Inequality
// !==	Strict Inequality
// >	Greater than
// >=	Greater than or equal
// <	Less than
// <=	Less than or equal

// Printing Values
// We can play with the boolean operators and print a few items out:
console.log(2 > 1); //true
console.log(3 < 2); //false

var test = 2 >= 3; //What will this print?
console.log(test);
console.log("Two is greater than one? " + (2 > 1));
console.log(3 >= 1);

// Other Operations
// Expression	Result	Reason
// 2 == "2";	True	This checks for equality, not type.
// 1 == "1";	True	This checks for equality, not type.
// 2 === "2";	False	Equality is the same, but type is different.
// 2 === 2;	True	Equality and type are the same.
// "Password12!!" === "Password12!!"	True	Equality and type are the same.

// Logical Operators
console.log("&& :", 2===2 && 1===1 ); //true because?
console.log("|| :", 2===2 || 2===1 ); //true because?
console.log("!=", 2 != 1) //true because?