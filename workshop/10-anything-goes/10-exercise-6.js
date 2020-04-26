// Q6
// Take the code you wrote in Q5 and now let's create a
// reusable function that takes two arguments,
// numbers that dictate the range within which to look for
// Armstrong numbers.

// This means that our code from the previous question will need to be tweaked a little
// to determine Armstrong numbers of different lengths.
// e.g.
// a number of 1 digit; each digit is to the power of 1
// a number of 2 digit; each digit is to the power of 2
// a number of 3 digit; each digit is to the power of 3
// a number of 4 digit; each digit is to the power of 4
// a number of 5 digit; each digit is to the power of 5

// See this site for a list of "narcissistic" numbers
// http://mathworld.wolfram.com/NarcissisticNumber.html


// ########## SOLUTION WITHOUT COMMENTS ##############

function identifyArmstrongNumbers(num1, num2) {
    let armstrongNumbers = [];
    for (let i = num1; i < num2; i++) { 
        let power = String(i).length;
        let sum=0;
        for (let j = 0; j < power; j++){
            sum += String(i).charAt(j) ** power;
        }
        if (sum == i) {
            armstrongNumbers.push(i);
        }
    }
    console.log(armstrongNumbers);
}

console.log(identifyArmstrongNumbers(1,100)); //returns 1 to 9
console.log(identifyArmstrongNumbers(100, 999)); //returns 153,370,371,407
console.log(identifyArmstrongNumbers(100, 99999)); 
//returns 153,370,371,407,1634,8208,9474,54748,92727,93084

// ########## SOLUTION WITH COMMENTS ############

// ############ THE PROCESS #############

// Step 1. print range of input numbers single for loop
// Step 2. get the power or length of the number let power = String(i).length
// Step 3. get each individual digit in a number using String(i).charAt(j) for j from 0 to power
// Step 4. sum each digit ** power 
// Step 5. check if the sum is equal to the number then push number into armstrongNumbers[]


function identifyArmstrongNumbers(num1, num2) {
    //define empty array to hold armstrong numbers
    let armstrongNumbers = [];

    //loop through all numbers in given range
    for (let i = num1; i < num2; i++) { 
        //define the power and length needed for each number
        let power = String(i).length;

        //check to see if logic holds
        //console.log(`The number ${i} has length ${power} and power ${power}`);

        //define an cumulative sum, that resets to zero whenever the next loop completes
        let sum=0;

        //loop through all digits within each number (which is given by its length)
        for (let j = 0; j < power; j++){

            //check to be sure that it outputs each digit correctly
            //console.log(`The number ${i} has digit ${String(i).charAt(j)} at position ${j}`);

            //add the digits raised to their respective powers together into a single sum
            sum += String(i).charAt(j) ** power;
        }

        //check that all digits raised to their power have been added correctly
        //console.log(`The armstrong number for ${i} with power ${power} is ${sum}`);

        //when sum is computed, check if it matches the original number, if so then add
        //to the empty array armstrongNumbers
        if (sum == i) {
            armstrongNumbers.push(i);
            //same comment but just for armstrong numbers
            //console.log(`The armstrong number for ${i} with power ${power} is ${sum}`);
        }
    }
}


console.log(identifyArmstrongNumbers(1,5));
console.log(identifyArmstrongNumbers(100, 999));






// ######### RANDOM STUFF TO TEST ############

let armstrongNumbers = [];
//need to convert digits to string
for (let i = 0; i < 999; i++) { 
    //loop to seperate each digit into array element, by size of number
    let power = String(i).length;
    console.log(`The number ${i} has length ${power} and power ${power}`);
    // let digits = Array(power);
    let sum=0;
    for (let j = 0; j < power; j++){
        console.log(`${String(i).charAt(j)}`);
        sum += String(i).charAt(j) ** power;
    }
    console.log(sum);
    if (sum == i) {
        armstrongNumbers.push(i);
    }
}

console.log(armstrongNumbers);


// write your loop here...
for (let i = 0; i < 999; i++) { 
    //loop to seperate each digit into array element, by size of number
    let power = String(i).length;
    for (let j = 0; j < String(i).length; j++){
        //let digits = [...Array(String(i).length)];
        let digits = [...Array(power)];
        digits.push(String(i).charAt(j));
        console.log(digits);
        if (digits**power == i) {
            armstrongNumbers.push(i);
        }
    }
}

console.log(armstrongNumbers);