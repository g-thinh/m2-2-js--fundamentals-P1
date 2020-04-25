// Q2a
// Write a function that accepts two integers and *returns*
// the greater one. (this is slightly different from the previous question.)

function greater(a,b) {
    if (a>b) {
        return a;
    } else {
        return b;
    }
}
greater(5,1);
//returns 5


// Also, wouldn't it be nice if there were a Math method that could simplify the code....
// https://www.w3schools.com/jsreF/jsref_obj_math.asp


//also returns 5
Math.max(5,1);

// Q2b
// What if we wanted to figure out the max of 4 integers, instead of 2?

function greater(a,b,c,d) {
    return Math.max(a,b,c,d);
}
greater(1,2,3,4);

//ok that was too easy soo...

function greater(a,b,c,d) {
    if (a > b && a > c && a > d) {
        return a;
    } else if (b > a && b > c && b > d) {
        return b;
    } else if (c > a && c > b && c > d) {
        return c;
    } else {
        return d;
    }
}
greater(5123,2351,2,55);



// STRETCH
// What if we wanted to write a function which took an unlimited number of
// integers, and returned the largest one?

// All of the following calls should be valid:
maxValue(4, 2); // 4
maxValue(4, 2, 8, 1, 5, 10); // 10
maxValue(4, 2, 8, 1, 5, 10, 1, 64, 2, 8, -100, 54); // 64

function maxValue(...arr) {
    //declare array the first element
    let maxVal = arr[0];

    //loop through array
    for (let i = 1; i < arr.length; i++) {

        //if the next item is larger, then it is assigned to maxVal
        if (arr[i] > maxVal) {
            maxVal = arr[i];
        }
    }
    return maxVal;
}
maxValue(4, 2, 8, 1, 5, 10, 1, 64, 2, 8, -100, 54)

// HINT: You'll want to use "rest parameters".
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
