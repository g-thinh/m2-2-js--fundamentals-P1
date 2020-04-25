# 2.2.3 - JavaScript Functions

---

Functions let us package up a bit of code to be run at a later time.

---

The idea comes from math.

---

### Example 1

```js
// The formula to calculate the area of a rectangle is
// "length times width"

// Solve this for the following rectangle:
let rectangle = { length: 10, width: 4 };

// Write a function that can solve it for ANY rectangle.
```

---

### Example 2

```js
// Formula for area of circle: Pi times the radius squared
```

---

## Why?

- Functions let you group and reuse code.
- _Define_ a function with parameters between the brackets.
- to _call_ the function (i.e. use it), you pass it arguments whose values take the place of the parameters in the function definition.
- The function acts just like any other expression when called.
- It produces the value you'd expect from the body of the function.

---

### Exercise 1

```js
// Q1. Write a function that returns the sum of 3 numbers.

// Q2. Write a function that returns the square of a number minus twice the number.

// Q3. Write a function that returns the a person's full name, given their first and last names.
```

---

### Exercise 2

```js
// Q4. Write a function that returns the value of the tax for a given amount.

function taxMe(amount,tax = 0.15) {
    return amount*tax;
}
taxMe(20.0);

// Q5. Write a function that returns the value 42.

function gimme42() {
    return 42;
}
gimme42();

// Q6. Write a function that returns "Hello!".

function greetMe() {
    return "Hello!"
} 
greetMe();

```

---

- Functions are key in implementing these software development principles.
- Complexity emerges from simplicity

[Alternate Function definition](https://www.cs.utah.edu/~germain/PPS/Topics/functions.html)
