// The purpose of this exercise is to re-implement standard array methods
// Do not use the array methods .map, .filter and .every
// You can use for loops to implement your logic

// Q9
// - every(lst, func) returns a true if func returns true for every element of lst
//
// Example:
// function isEven(num) { return num % 2 === 0 }
// every([2,4,12], isEven) returns true
// every([2,3,12], isEven) returns false

function every(lst, func) {
  // lst is an array and f is a function
  // func takes 1 argument and returns a boolean

  //create emtpy array to hold results
  let result = [];

  // declare a bool
  let isTrue;

  //loop through each item in the list
  for(let i=0; i < lst.length;i++) {

    //the function must return a bool, so it can be applied on each item
    if(func(lst[i])) {

      //if function returns true, add the item to the results list
      result.push(lst[i]);
    }
  }

  //this checks if ALL of the items were even compared to the results array
  if (lst.length == result.length) {
    isTrue = true;
  } else {
    isTrue = false;
  }
  //return a bool, just like .every()
  console.log(isTrue);

}
// -------------------------------------------------------------------------
function isEven(num) {
  return num % 2 === 0;
}
console.log('Q9: ', every([2, 42, 540, 8, 64], isEven));
console.log('Q9: ', every([2, 42, 540, 3, 64], isEven));
