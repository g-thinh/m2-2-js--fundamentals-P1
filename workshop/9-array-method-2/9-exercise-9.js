/**
 * NOTE: For the exercises in this section, you are not allowed to use the
 * `for` or `while` loops.
 *
 * You must solve them using array methods like filter, map, forEach, etc.
 *
 * You will also need to verify that your functions work as expected.
 * Be sure to test them. :)
 */

// Q9
// Write a function that accepts an array of grades (numerical values) and returns the average.
// The returned average should also be rounded to the nearest unit. (no decimals, please!)

// HINT: Check the `Math` built-in object.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

function calculateAverage(grades) {
    //accumulative method
    let result = grades.reduce((a,b) => a+ b, 0);
    console.log(Math.round(result/grades.length));
}

console.log(calculateAverage([76, 60, 83, 100, 78]));
//returns 79