// This function doubles the given number.
function double(x) {
    return x * 2;
}

let num = prompt("Enter a number to double:");
double(num);

// This function squares the given number.
function square(x) {
    return x * x;
}

let num2 = prompt("Enter a number to square:");
square(num2);

// This function checks if the given number is even.
function isEven(x) {
    return x % 2 === 0;
}

let num3 = prompt("Enter a number to check if it's even:");
isEven(num3);

// This function checks if the given number is odd.
function isOdd(x) {
    return x % 2 !== 0;
}

let num4 = prompt("Enter a number to check if it's odd:");
isOdd(num4);

// This function multiplies two numbers.
function multiply(x, y) {
    return x * y;
}

let mult1 = prompt("Enter the first number to multiply:");
let mult2 = prompt("Enter the second number to multiply:");
multiply(mult1, mult2);