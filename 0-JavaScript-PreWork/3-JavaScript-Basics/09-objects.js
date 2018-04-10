// Object Literals
// Here is the syntax for an object literal:
var bobAlcorn = {
    name             : "Bob Alcorn",
    age              : 59,
    vocation        : "Chief Operating Officer",
    isRetired        : false
};

// Discuss
// Key points about the code above:
// It's created using the var keyword, like a variable
// It gets wrapped in curly braces: { }.
// name, age, vocation, and isRetired are properties.
// Each of the properties has a value following the colon.

// Dot Notations
// In coding the dot . is an operator, like a plus symbol. It gives you access inside the object. When we use the object's name, then the ., we can see inside at the properties and access their values. Check it out:
console.log(bobAlcorn); //prints the whole object
console.log(bobAlcorn.name); //prints the object, then the value for the name property
console.log(bobAlcorn.age); //same as above, but age

// Undefined
// It's good to know about undefined. When we try to access a property that doesn't exist, we get undefined:
console.log(bobAlcorn.middleName); //undefined bc this property does not exist

