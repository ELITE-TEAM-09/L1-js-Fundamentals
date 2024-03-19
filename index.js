// UTILITY
function printValue(value){
    console.info(value)
}

// 1.0 DEFINE VARIABLES
//TODO: ADD fixed variable

const person = "George and Ian";

//TODO: ADD redeclarable variable
var task = "Assignment";

//TODO: ADD re-assignable but not redeclarable variable
let firstTask ="Understanding variables";

// 2.0 DIFFERENT DATA TYPES
//TODO: Create a fixed variable with a number value

let number = "69";

//TODO: Create a redeclarable variable with a boolean value

var redeclarableBoolen = false;

//TODO: Create a re-assignable variable with a string value

let saying = "Hi";


// 3.0 STRING OPERATIONS
//TODO: Concatenate string (+)

const salutations = "hi" + " " + "class";
console.log(salutations);

//TODO: Interpolate string (`${}`)

let secondTask = "String operations"
console.log(`hi ${secondTask}`);

//TODO: Convert to uppercase
let uppercaseString = "hi";
console.log(uppercaseString.toUpperCase());

//TODO: Convert to lowercase

let lowercaseString = "HI";
console.log(lowercaseString.toLowerCase());

//TODO: Index a specific character

let text = "Awesome";
let charAtIndexTwo = text[4];

console.log(charAtIndexTwo);

//TODO: PRACTICE ON YOUR OWN (Check mozilla documentation)


// 4.0 COMPARISON
//TODO: strict equality

let number1 = 1;
let number2 = 1;

console.log(number1===number2);

//TODO: strict inequality

console.log(number1 !== number2);

//TODO: equality

console.log(number1 == number2);

//TODO: inequality

console.log(number1 != number2);

//TODO: greater than

let number3 = 5;
let number4 = 4;

console.log(number3 > number4);

//TODO: less than

console.log(number3 < number4);

//TODO: greater or equal to

console.log(number3 >= number4);


//TODO: less or equal to

console.log(number3 <= number4);


// 5.0 CONTROL FLOW
// TODO: if-else statement

var age =21;

if (age >= 21) {
    console.log("can drive a vehicle");
} else if (age <= 20) {
    console.log("Cannot drive a vehicle");
}

//TODO: switch-case

var age = 22;

switch (false) {
  case age <= 20:
    message = "cannot drive a vehicle";
    break;
  case age >= 21:
    message = "can drive a vehicle";
    break;
  default:
    message = "professional drivers";
}
console.log(message);




