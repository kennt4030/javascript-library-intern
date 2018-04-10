// Let's look at a for loop. It's very common, and you need to know how to write onemptied.
// Quick thought: What if we wanted to print a range of numbers all the way to 100.
for (var i = 1; i < 101; i += 1){
    console.log(i);
}

// Syntax
// Let's look at the syntax of a for loop. This takes a lot of practice and a lot of reading. Then, more practice.
// Here's the structure:
    // for (setup; test expression; increment) {
    //     body;    
    // }

// And another example:
        //1        //2    //3
        for ( var i = 1; i <= 10; i++){
            console.log("Number:", i);
        }

        // This is the starting point. We're starting to count from 1.
        // This is the conditional section, the condition to be met. As long as it's under 10 or equal to 10, keep going.
        // This is what it does when it keeps going. i++ is shorthand for saying, add 1.
        // This loop is going to start at 1. It's going to check if i is less than 10. It is. It's 1. So we're going to execute the third spot: i++. So add 1 to i. Then, print i to the console. The value of i prints each time until it reaches 10.
