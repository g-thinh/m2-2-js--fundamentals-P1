// Q4
// Write a function that takes an array and a value as arguments and
// returns true if the value is in the array else it returns false.

function itemIsPresent(array, item) {}

// Test case
const myArray = [
  'bacon',
  'purple',
  'door',
  'window',
  'exist',
  'code',
  'program',
  'funky',
];

itemIsPresent(myArray, 'funky'); // true
itemIsPresent(myArray, 'elephant'); // false

//solution 

const myArray = [
  'bacon',
  'purple',
  'door',
  'window',
  'exist',
  'code',
  'program',
  'funky',
];

//really went straightforward.

function itemIsPresent(array,item) {
  return array.includes(item);
}

itemIsPresent(myArray, 'funky'); // true
itemIsPresent(myArray, 'elephant'); // false