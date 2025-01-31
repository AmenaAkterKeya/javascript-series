// 1. Variables: Variables are used to store data in JavaScript. Think of them as labeled boxes where you can put information to use later


//a. let: Used for variables that can change (re-assignable).
let name = "Alice";
name = "Bob"; // This is allowed

// b. const: Used for variables that cannot change (constant).
const age = 25;
age = 30; // This will throw an error

// c.var: Older way to declare variables. Avoid using it because it has function scope (not block scope), which can lead to bugs.
var city = "New York"; // Avoid using var

/* Variable Naming Rules
1.Names can contain letters, digits, underscores (_), and dollar signs ($).
2.Names cannot start with a digit.
3.Names are case-sensitive (myVar and myvar are different).
4.Use meaningful names (e.g., userName instead of x). */

let userName = "JohnDoe";
const userId = 12345;

// 2. Data Types : JavaScript has several built-in data types. These are the building blocks of any program.

// Primitive Data Types

// a. String: Represents text. Enclosed in quotes ("" or '').
let greeting = "Hello, World!";

// b.Number: Represents both integers and floating-point numbers.
let ages = 25;
let price = 19.99;

// c.Boolean: Represents true or false.
let isStudent = true;

// d. Null: Represents an intentional absence of value.
let car = null;

// e. Undefined: Represents a variable that has been declared but not assigned a value.
let job;
console.log(job); // undefined

// f.Symbol: Represents a unique identifier
let id = Symbol("id");

// Type Checking : Use the """typeof""" operator to check the type of a variable.
console.log(typeof "Hello"); // "string"
console.log(typeof 42); // "number"
console.log(typeof true); // "boolean"

// 3. Operators: Operators are used to perform operations on variables and values.
/* Arithmetic Operators:
            a. + (addition)
            b. - (subtraction)
            c. * (multiplication)
            d. / (division)
            e. % (modulus, remainder)
            f.** (exponentiation) */
let a = 10;
let b = 3;
console.log(a + b); // 13
console.log(a % b); // 1 (remainder of 10 / 3)

/* Comparison Operators :
           a. == (equal to, checks value only)
           b.  === (strict equal to, checks value and type)
           c. != (not equal to)
           d. !== (strict not equal to)
           e. >, <, >=, <= (greater than, less than, etc.) */
console.log(5 == "5"); // true (value is the same)
console.log(5 === "5"); // false (type is different)

/* Logical Operators : 
           a.  && (AND): True if both conditions are true.
           b.  || (OR): True if at least one condition is true.
           c.  ! (NOT): Inverts the condition. */

let aGe = 20;
let hasLicense = true;
console.log(age >= 18 && hasLicense); // true
console.log(!hasLicense); // false