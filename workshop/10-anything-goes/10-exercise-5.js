// Q5
// Write a JavaScript program to find ALL the Armstrong
// numbers between 0 and 999, store them in array an output
// that array to the console.

// Note : An Armstrong number of three digits is an integer
// such that the sum of the cubes of its digits is equal
// to the number itself. For example,
// 371 is an Armstrong number:
// 3 ** 3 + 7 ** 3 + 1 ** 3
// = 27   + 343    + 1
// = 371

let armstrongNumbers = [];

//need to convert digits to string

// write your loop here...
for (let i = 0; i < 999; i++) { 
    //convert to string, then look at each digit position
    let first = String(i).charAt(0);
    let second = String(i).charAt(1);
    let third = String(i).charAt(2);
    //by default 0 if .charAt() cannot find an index
    //console.log(`${first} and ${second} and ${third}`);
    if ((first**3 + second**3 + third**3 == i)) {
        console.log(i);
        armstrongNumbers.push(i);
    }
}

console.log(armstrongNumbers);
//outputs [0,1,153,370,371,407] which are the armstrong numbers between 0 and 999


// ############ THE PROCESS #############

// get 0 do 0**3 == 0, true keep as armstrong number
// get 1 do 1**3 == 1, true keep as armstrong number
// get 2 do 2**3 != 2, false
// get 3 do 3**3 != 3, false
// get 10 do 1**3 + 0**3 != 10, false
// ...
// get 153 do 1**3 + 5**3 + 3**3 == 153, true keep as armstrong number