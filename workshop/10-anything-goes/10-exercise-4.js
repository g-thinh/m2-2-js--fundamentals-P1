// Q4
// Write a function that filters out the non-unique values in an array.
// This function should accept an array as an argument and return a new array.

// Hint: consider using .filter(), .indexOf() and .lastIndexOf()

function filterNonUnique(array) {
    // .indexOf() returns first occurence of the value and its index, any other occurences
    // will be ignored and thus not included in the filter.
    let result = array.filter((value, index, self) => self.indexOf(value) == index);
    console.log(result);
}

console.log(filterNonUnique([1,2,3,3,4,5,6,7,7,8]));
