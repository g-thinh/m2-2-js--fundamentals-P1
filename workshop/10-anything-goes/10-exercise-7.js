// The purpose of this exercise is to re-implement standard array methods
// Do not use the array methods .map, .filter and .every
// You can use for loops to implement your logic

// Q7
// - map returns an array with the same number of elements as lst
// - if lst = [a1, a2, a3, a4, a5] then map(lst, f) returns [f(a1), f(a2), f(a3), f(a4), f(a5)]
// - map returns a new array created by applying func to the elements of the original array
//
// Example:
// function toUpperCase(str) { return str.toUpperCase(); }
// map(["bob", "susie"], toUpperCase) returns ["BOB", "SUSIE"]

// ### THE GOAL ###
// The array gets mapped to the function that counts the length of characters in each of 
// its elements

function map(lst, func) {
  // lst is an array and func is a function

  //define empty array to hold the new array created by applying the function
  let result = [];

  //loop through every item in the list
  for(let i = 0; i < lst.length; i++) {

    //apply the function to the list item and add it to the results array
    result.push(func(lst[i]));
    
  }
  //print out the results
  console.log(result);
}

//do not modify
// -------------------------------------------------------------------------
function charCount(str) {
  return str.length;
}


console.log('Q7: ', map(['Cyborg', 'Robin', 'Batman', 'Superman', 'Aquaman', 'Flash'], charCount));
//returns [6,5,6,8,7,5]

console.log('Q7: ', map(['Scott', 'Bob', 'Ric', 'Jim'], charCount));
//returns [5,3,3,3]


// ### WHAT IT SHOULD LOOK LIKE WITHOUT ###

['Cyborg', 'Robin', 'Batman', 'Superman', 'Aquaman', 'Flash'].map(item => item.length);
//returns [6,5,6,8,7,5]