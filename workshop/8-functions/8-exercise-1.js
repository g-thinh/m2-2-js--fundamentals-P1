// Q1
// Write a function that accepts two integers and displays
// the greater one, using `console.log`

// Define the function
function max(num1, num2) {}

// Call the function
max(12, 43);


// Solution

function max(a,b) {
    if (a > b ){
        console.log(`${a} is the bigger number`);
    } else {
        console.log(`${b} is the bigger number`);
    }
}
max(12, 43);