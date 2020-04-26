// Q10
// Build on what you did for Q9.
// This time the function should return a letter grade instead of the average.
// Here is how I calculate the grades
// <60 	is F
// <70 	is D
// <80 	is C
// <90 	is B
// <100 is A


//Was it suppose to return a letter grade for the entire array?
// Write function here
function calculateGrade(grades) {
    let result = grades.reduce((a,b) => a+ b, 0);
    grade = (Math.round(result/grades.length));
    if (grade < 60) {
        return "F";
    } else if (grade < 60 && grade <= 70) {
        return "D";
    } else if (grade < 80 && grade <= 90) {
        return "C";
    } else if (grade < 90 && grade < 100) {
        return "D";
    } else {
        return "A";
    }
}

calculateGrade([48, 95, 65, 48, 59, 78, 72, 65]);

// Call the function with [48, 95, 65, 48, 59, 78, 72, 65]

// Try with other values as well


