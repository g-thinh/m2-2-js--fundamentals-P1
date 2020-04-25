// Q3
// Write a function that accepts 5 grades (numerical values) and returns the average.
// The returned average should also be rounded to the nearest unit. (no decimals, please!)

function calculateAverage(a, b, c, d, e) {
  // Your code here
}

console.log(calculateAverage(76, 60, 83, 100, 78));

//solution

function calculateAverage(a, b, c, d, e) {
  let arr = [a,b,c,d,e];
  let average = (a+b+c+d+e)/arr.length;
  return average.toFixed(0);
}

calculateAverage(76, 60, 83, 100, 78);
