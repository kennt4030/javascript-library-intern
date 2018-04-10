// Declarations
// Functions allow us to execute some action, and they are able to be used in a repeated fashion.
// Here's an example of declaration of a function:

function hello() {
    console.log("Hello World!");
}

// Calls
// When we want to call a function, that means that we're going to use it, we say the name of the function followed by parenthesis:
hello();

// Practice
// Write a function that prints "Pacers won!" to the console.
function pacersWon(){
    console.log("Pacers won!");
}
pacersWon();

// What happens if we call the function 5 times?

pacersWon();
pacersWon();
pacersWon();
pacersWon();
pacersWon();

// Parameters and Arguments
// A few things to know:

// Parameters are the names listed in the function definition.
// Arguments are the real values received by the function when you call it.
// Here's a function with a parameter:
function numberEntered(x){
    console.log("The number you entered was: ", x);
}

// Think of the x paramter just like a variable that can take in a different value each time that the function is called. When we call the function it must now have an argument to satisfy the parameter:
numberEntered(5);
numberEntered(4);
numberEntered(3);
numberEntered(2);
numberEntered(1);

// Two Params
// Let's try this same thing with two params(slang for parameters, of course)
function addAnyTwoNumbers(x, y){
    console.log(x + y);
}

addAnyTwoNumbers(4, 5);
addAnyTwoNumbers(6, 11);
addAnyTwoNumbers(7, 8);

// The return Keyword
// When JS reaches a return statement it will stop executing that function. The return is the value that the function spits out. It is the value that gets distilled down and returned out of the function. It's best to see it with a function that does some math:

// Declare the function:
function getMyTaxReturnAndDoMyTaxesAndStuff(a, x, y, z){
    let myInc = a * x;
    let myTaxes = myInc - y;
    let total = myTaxes + z;
    return total; 
}

// Call the function with arguments

getMyTaxReturnAndDoMyTaxesAndStuff(10000, 5, 50000, 0);

// Possible Solutions
// Write a function that returns the value of two numbers added together.
function add(x, y){
    let sum = x + y;
    console.log(sum);
    return sum;
}

add(1, 1);

// Write a function that takes in a first and last name. It returns a whole name.

function fullName(first, last){
    var wholeName = first + " " + last;
    console.log(wholeName);
    return wholeName;
}

fullName("Paul", "O'Connor");

// Write a function that returns your pet's name and breed.

function petNameAndBreed(name, breed){
    var petDetails = name + ", " + breed;
    console.log(petDetails);
    return petDetails;
}
petNameAndBreed("Sansa", "Generic");

