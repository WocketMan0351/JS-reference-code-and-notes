// prompt user for input
{
    // var name = prompt("Enter your name:");   // gets a string from alert
}


// var, let, and const
{
    // var num1 = 3;    // globally available, stored in window object
    // let num2 = 7;    // block scoped, not stored in window object (more restrictive)
    // const num3 = 11; // block scoped, can't be changed, 
}


// comparison operators
{
    // Equal ( == ) ** doesn't care about data types
    // Not Equal ( != )
    // Strict Equal ( === ) ** compares data types
    // Strict Not Equal ( !== ) ** true if operands are same type but not equal or are different type
    // Greater than ( > ) 
    // Less than ( < )
    // Less than or equal ( <= )
    // Greater than or equal ( >= )
}

// string methods/expressions
{
    // let str = "Tiny Bells is the cootest";

    // str = str.replace(/[aeiou]/gi, "");   // replaces vowels in str with nothing
}


// logical operators 
{
    // And ( && )
    // Or ( || )
    // Not ( ! )
}


// switch statement
{
    // switch(name) {

    //     case "Cody":
    //         console.log("You're not crazy");
    //         break;

    //     case "Elon":
    //         console.log("I'm an idiot");
    //         break;

    //     case "Michael Saylor":
    //     case "Parabolic Guy":
    //         console.log("**Smash buy BTC"); // handles 2 cases simultaneously

    //     default:
    //         console.log("What is bitcoin?");
    //         break;
    // }
}


// ternary operator
{
    // let name = prompt("What is my name?");
    // let points = name === "Cody" ? 10 : 0; // 10 is assigned to points if true, 0 is assigned to points if false
    //                                        // statements can be placed where 10 and 0 are if desired
    // console.log(points);
}


// loops
{
    // WHILE LOOP
    // let i = 0;
    // while (i < 10) {
    //     console.log(i);
    //     i++;
    // }

    // DO WHILE LOOP
    // let password;
    // do {
    //     password = prompt("What is the password?");
    // } while (password.toLowerCase() != "bitcoin");

    // FOR LOOP
    // let list = [1, 3, 5, 7, 9, 11];
    // for (let i = 0; i < list.length; i++) {
    //     console.log(list[i]);
    // }

    // NESTED FOR LOOP
    // let d = document.getElementById("destination");
    // for (let i = 0; i < 10; i++) {
    //     for (let j = i; j >= 0; j--) {
    //         d.append(j + " ");
    //     }
    //     var br = document.createElement('br');
    //     d.appendChild(br);
    // }

    // let myString= "Search this string baby!";
    // let charToSearch = "c";

    // for (let i = 0; i < myString.length; i++) {

    //     if (myString[i] === 'a' || myString[i] === 'e' || myString[i] === 'i' || myString[i] === 'o' || myString[i] === 'u') {
    //         continue;   // continue skips this iteration and continues the for loop, whereas break would break out of the for loop.
    //     }
    //     console.log(myString[i]);

    // }
}


// objects
{
    // // LITERAL SYNTAX
    // let dog = {
    //     name: "Bella",
    //     color: "Black",
    //     age: 1.5,
    //     getAge: function() {
    //         console.log(this.age);  // function inside object properties
    //     },
    //     address: {  //nested object
    //         street: "563 E Bridgeport Parkway",
    //         city: "Gilbert",
    //         state: "AZ",
    //         zip: 84036
    //     }
    // }

    //  // CONSTRUCTOR SYNTAX
    // function speak() {
    //     console.log("woof");  //function outside object properties
    // }


    // // ES6
    // class Person {
    //     constructor(fname, lname) {
    //         this.firstName = fname;
    //         this.lastName = lname;
    //     }
    // }

    // const person = new Person('Cody', 'Worthen');
}


// arrays
{
    // let ages = [2, 12, 54, 32, 22];

    // ages.length = 10;
    // let count = 0;
    // let total = 0;
    // for (let i = 0; i < ages.length; i++) {
    //     if (ages[i] != undefined) {
    //         count++
    //         total += ages[i];
    //     }    
    // }
    // let avg = total / count;
    // console.log(avg);    // gets the avg value of an array

    // let stuff = [
    //     [1, 2, 3, 4, 5],
    //     ["A", "B", "C", "D", "E"],
    //     [true, true, false, false, false] // 2D array
    // ]

    // stuff[4] = "Bella"; // creates index 4, leaving stuff[3] 'undefined'
    // stuff.length++;     // increments the length of stuff by 1
    // stuff.length--;     // decrements the length of stuff by 1

    // let numbers = [];
    // while(true) {

    //     let input = prompt("Enter number");
    //     if (input === "q" || input === null) { break; }

    //     numbers.push(Number(input)); // Number stores input as a number and not a string
    //     console.log(numbers);
    // }

    // FILL ARRAY WITH INPUT
    // let grades = [];

    // while(true) {
    //     let input = prompt("Add a grade");

    //     if (input === "" || input === null) { break; }

    //     grades.push(Number(input));
    //     console.log(grades);
    // }
}


// array methods
{
    // let grades = [5, 3, 17, 991, 64];
    // let scores = [333, 666, 999];

    // grades.includes(3);              // returns true if grades contains 3
    // grades.indexOf();                // returns the index or -1 if not found
    // console.log(grades.join("-"));   // returns the array as a string with each element separated by what you pass in

    // ALTERS THE ORIGINAL ARRAY

    // grades.pop();            // removes the last element
    // grades.shift();          // removes the first element
    // grades.unshift();        // adds an element to the beginning
    // grades.push();           // adds an element to the end
    // grades.splice(2, 3)      // starts at index 2 and removes 3 items. returns an array of those removed items.
    // grades.splice(2, 0, 5, 6, 7, 8)      // starts at index 2, removes 0 items, adds '5', '6', '7', '8'
    // grades.sort();           // sorts lexicographically
    // grades.sort(function(a, b) { return a - b });     // sorts numerically (ascending) (callback function)
    // grades.reverse();        // reverses the array in place
    // grades.fill(-1, 0, grades.length)   // fills the array with -1, starting at index 0 (inclusive) and stopping at the last index (exclusive)
    // grades.copyWithin();                // FURTHER RESEARCH NEEDED

    // RETURNS A NEW ARRAY

    // let a = grades.concat(scores);  // concatenates grades and scores into a new array called a
    // let a = grades.slice(1, 3);     // copies grades into a new array starting at index 1 (inclusive) and stops at index 3 (exclusive)

    // FOR EACH METHOD

    // grades.forEach(function(element){   // forEach() method ignore undefined elements
    //     console.log(element);           // for each element in grades, 'element' is temporarily assigned the same value and then console logged
    // });

    // grades.forEach(function(element, i){    // passing in the 2nd param of 'i' stores the index of each element in 'i'
    //     console.log(element, i);
    // });
}


// 2D arrays
{
    // let values = [
    //     [ 1, 3, 5, 7 ],
    //     [ 2, 4, 6, 8, 10, 12 ],
    //     [ 5, 10, 15, ]
    // ];

    // how to iterate thru 2D arrays + 'labels' & 'continue'
    // outerLoop:
    // for (let row = 0; row < values.length; row++) {
    //     for (let col= 0; col < values[row].length; col++) {
    //         console.log(values[row][col]);
    //         if (values[row][col] === 10) {
    //             console.log("FOUND");
    //             continue outerLoop;  // alt: break outerLoop;    alt: break; 
    //         }
    //     }
    //     console.log("~~~");  // ignored with continue outerLoop
    // }                        // not ignored with a break

    // for each method for 2D arrays
    // values.forEach(function(row){   // callback function
    //     row.forEach(function(col){  // callback function
    //         console.log(col);
    //     });
    // });
}


// dates and unix timestamps
{
    // var valentine = new Date();  // stores the current date/time in 'valentine'

    // let start = Date.now();      // creates a date instance with current time

    // let x = 0;
    // for (let i = 0; i < 10000000; i++) {
    //     x += i;
    // }
    // let end = Date.now();
    // let total = end - start;
    // console.log(total);         // measures how long it takes to compute the for loop
}


// date methods
{
    // Date.parse('26 Sept 1998');    // parses a string, returns date in milliseconds
    // Date.UTC();                    // converts to UTC time zone
    // Date.getMonth();               // gets month
    // Date.getDay();                 // gets day
    // Date.getTimezoneOffset();      // gets offset from UTC in min
}


// functions
{
    // ** functions are treated as objects
    // ** functions can input/output other functions
    // function func(x) {      // function
    //     x.name = "Bella";
    // }
    // let me = {              // object
    //     name: "Cody"
    // }
    // func(me);       // this alters the object 'me' since we're passing an obj as an argument
    // console.log(me); 
}


// functions
{
    // function doSomething(x) {   // accepts a function x as an argument
    //     return x();             // invokes said function x
    // }

    // let myFunc = () => 5 * 5;   // myFunc is an arrow function with no params that returns the expression 5 * 5

    // console.log(doSomething(myFunc));  // invokes doSomething by passing in myFunc as an argument


    // ASYNCHRONOUS FUNCTION
    // let doSomething = function() {
    //     console.log("Done");
    // }
    // setTimeout(doSomething, 2000);  // setTimeout is an asynchronous function executed after 2000 milliseconds


    // FUNCTION DECLARATION       // entire function is hoisted
    // function pow(x, y) {           // can call before the function is parsed
    //     let total = 1;
    //     for (let i = 0; i < y; i++) {
    //         total *= x;
    //     }
    //     return total;
    // }


    // FUNCTION EXPRESSION      // only the variable is hoisted
    // var func = pow(3,3);         // function must be parsed before
    // console.log(func);


    // FUNCTIONS IN ARRAYS
    // function pow(x, y) {           
    //     let total = 1;
    //     for (let i = 0; i < y; i++) {
    //         total *= x;
    //     }
    //     return total;
    // }

    // let coolFuncs = [pow];  // array declaration

    // console.log(coolFuncs[0](3, 3));  // invokes a function in an array and passes in args 

    //     // ADDING FUNCTIONS TO AN OBJECT
    // let mathFuncs = {
    //     power: pow      // assigns the functin "pow" as a property to the object "mathFuncs"
    // };
    // console.log(mathFuncs.power(3, 4));


    //     // ADDING PROPERTIES TO FUNCTIONS
    // pow.description = "Raises numbers to a power";  // adds a property to a function


    //     // CALLBACK FUNCTION (passing function to a parameter)
    // function callbackExample(callback) {
    //     return callback(10, 3);
    // }
    // console.log(callbackExample(pow)); // passes the function "pow" to a parameter


    //     // CALLBACK FUNCTION (function that returns another function)
    // function returnFunction() {
    //     return pow;
    // }
    // console.log(returnFunction()(10,2)); // returns the func "pow", passes in (10, 2) as args, then logs it
}


// memoization & algorithm optimization
{
    // pow.calculated = {};    // object
    // function pow (x, y) {

    //     let stringVersion = x + "^" + y;    // string to keep track of what params we pass in
    //     console.log("string version: " + stringVersion);

    //     if (stringVersion in pow.calculated) {  // checks if stringVersion already exists in the array of previously used params
    //         console.log("FOUND");
    //         return pow.calculated[stringVersion];
    //     }

    //     let total = 1;

    //     for (let i = 0; i < y; i++) {
    //         total *= x;
    //     }

    //     //pow.calculated.push(total);
    //     pow.calculated[stringVersion] = total;  // stores the result of invoking "pow"
    //     console.log(pow.calculated);  // helps track state between function calls

    //     return total;
    // }

    // console.log(pow(2, 3));
    // console.log(pow(2, 4));
    // console.log(pow(2, 5));
    // console.log(pow(2, 5));
}


// default parameters
{
    // function pow(x, y = 2) {    // if no y param is passed, 2 is the default param

    //     //if (y == undefined) { y = 2; }  // accomplishes the same thing as the default param

    //     //y =  typeof y === "undefined" ? 2 : y;  // another alternative to the default param

    //     let total = 1;
    //     for (let i = 0; i < y; i++) {
    //         total *= x;
    //     }
    //     return total;
    // }

    // console.log(pow(10));
}


// rest parameters (extra)
{
    // function pow(x, y = 2, ...extra) {  // extra stores extra params in an array called "extra"

    //     console.log(extra);

    //     let total = 1;
    //     for (let i = 0; i < y; i++) {
    //         total *= x;
    //     }
    //     return total;
    // }

    // console.log(pow(5, 3, 7, 7, 7));


    // function largest(x, ...extra) {

    //     let largest = x;

    //     for (let i = 0; i < extra.length; i++) {
    //         if (extra[i] > largest) {
    //             largest = extra[i];
    //         }
    //     }

    //     return largest;
    // }

    // console.log(largest(4, 44, 12, 9999, 2));
}


// 'this'
{
    // let me = {
    //     name: "Cody",
    //     age: 22,
    //     getObject: function() {  // method for testing purposes
    //         console.log(this);   // refers to the object "me"
    //     }
    // }
    // me.getObject(); 


    // function test() {
    //     console.log(this);  // this refers to the window object itself
    // }
    // test();


    // function testStrict() {
    //     'use strict';
    //     console.log(this);  // this is undefined while 'using strict'
    // }
    // testStrict();


    // function Person() {         // defines the object "Person"
    //     console.log(this);      // empty array (no properties yet)
    //     this.name = "Bella";    // gives "Person" the property of name = "Bella"
    // }

    // let person = new Person();  // creates a "Person" object
    // console.log(person);        // we can see that "Person" has the property name = "Bella"
}


// this (call, apply, bind) 
{       // CALL
    // function doStuff(input, input2) {
    //     console.log(input, input2);
    //     console.log(this);
    // }

    // doStuff.call("HODL", 5)  // 1st param is what we want "this" to be.
    // 2nd param is what we want to pass in "input"

    // APPLY
    // doStuff.apply("hodl", [2, 7]);  // same as call, but apply can pass in an array of arguments for "input" & "input2" etc


    // BIND
    // function doStuff(input, input2) {
    //     console.log(input, input2);
    //     console.log(this);
    // }

    // let newFunction = doStuff.bind("HODL", 5, 10);
    // newFunction();
}


// arrow functions
{
    // REGULAR FUNCTION
    // function cube(x) {
    //    return x * x * x;
    // }
    // console.log(cube(2));


    //     // ARROW EQUIVALENT
    // let cubeArrow = (x) => x * x * x; // variable = (params) => return/statement(s)
    // console.log(cubeArrow(3));        // logs the return of 27
    // () is required when you have no params or > 1 param
    // 'return' is uneccessary if you only have 1 expression/statement


    // let cubeArrow = x => {           // no () needed if there's only 1 param
    //     console.log("calculating...");
    //     return x * x * x; // 'return' is needed if curly braces are used (for multiple return statements)
    // }  
    // console.log(cubeArrow(3));


    // 'THIS' INSIDE ARROW FUNCTIONS
    // let arrow = () => this;     // 'this' is the window object. The value of 'this' in arrow functions is permanent based on when the function is created!!

    // function normal() {
    //     return this;            // 'this' is the window object
    // }

    // console.log(arrow());
    // console.log(normal());

    // let functions = {           // object literal
    //     arrow: arrow,           // attached 'arrow' function to the object as a method
    //     normal: normal,         // attached 'normal' function to the object as a method
    //     arrowTest: () => this   // 'this' still has the value of the window object even though the arrow function was created inside some object
    // };

    // console.log(functions.arrow());     // 'this' will always be the window object for an arrow function
    // console.log(functions.normal());    // 'this' is now the object itself (the function)
    // console.log(functions.arrowTest()); // 'this' still has the value of the window object
}


// bind with arrow functions
{
    // let arrow = () => this;
    // let newFunc = arrow.bind("hodl");
    // console.log(newFunc());          // 'this' is still the window object!!

    // bind will not change the value of 'this' 


    // if you need to specific about what 'this' should be, use a normal function and the bind method like this:
    // function normal() {
    //     return this;
    // }
    // console.log(normal.bind("hodl")());     // the value of 'this' for normal() has been changed to "hodl"
}


// factorial for loop (debugging practice)
{
    // chrome developer tools -> sources -> add breakpoint -> step thru
    // (optional) -> right click on breakpoint to add a conditional breakpoint then step thru

    // function fact(x) {
    //     let total = 1;
    //     for (let i = x; i > 1; i--) {
    //         total *= i;
    //     }
    //     return total;
    // }
    // console.log(fact(7));
}


// event listener breakpoints 
{
    // chrome developer tools -> sources -> event listener breakpoints -> select the type of action you want to trigger a breakpoint
    // document.getElementById("rekt").onclick = () => { console.log("clicked"); }
    // document.getElementById("rekt").onmouseover = () => { console.log("mouseover"); }
}


// exception handling (try & catch)
{
    // try {               // the statements to be executed
    //     doesntexist;
    // }

    // catch (e) {         // Statement that is executed if an exception is thrown in the try-block
    //     console.log(e);
    // }

    // finally {           // Statements that are executed after the try statement completes. These statements execute regardless of whether an exception was thrown or caught
    //     console.log("finally");
    // }

    // console.log("after");   // without a 'catch' this code wouldn't be executed

    // // 1 of 3 the following must happen:
    // // 1)  try...catch
    // // 2)  try...finally
    // // 3)  try...catch...finally
}


// throw 
{
    // function doSomething() {
    //     throw { error: "Tis broke", code: -1 }
    // }

    // try {
    //     doSomething();
    // }

    // catch (e) {
    //     console.log(e);
    //     console.log("error");
    // }

    // finally {
    //     console.log("finally")
    // }

    // documentation
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
}


// object oriented programming (constructors)
{
    // function User(name, age, gender) {  // constructor
    //     this.name = name;
    //     this.age = age;
    //     this.gender = gender;
    // }

    // let me = new User("Cody", 22, "M");  // calling the constructor

    // let dog = new User("Bella", 1, "F"); // calling the constructor

    // console.log(me);
    // console.log(dog);
}


// factory functions
{
    // function User(name, age, gender) {  // accomplishes the same thing as the regular constructor
    //     let person = {
    //         name: name,
    //         age: age,
    //         gender: gender
    //     };
    //     return person;
    // }

    // let me = new User("Cody", 22, "M");

    // console.log(me);
}

// creating protype methods for constructor functions (saves memory)
{
    // function User(name, age, gender) {  // regular constructor
    //     this.name = name;
    //     this.age = age;
    //     this.gender = gender;
    // }

    // User.prototype.speak = function () {  // every new 'User' will inherit this protype method
    //     console.log("Hello")
    // }

    // let me = new User("Cody", 22, "M");   // calling the constructor
    // console.log(me);

    // me.speak();     // calling the protype method

    // // // prototype properties
    // // User.prototype.lifeSpan = "85";    // we can also use the prototype property to add new properties
    // // console.log(me.lifeSpan);


    // ANOTHER EXAMPLE
    // function Taco() {
    //     this.toppings = ["cheese", "lettuce"];
    // }

    // Taco.prototype.make = function () {
    //     console.log("making taco...");
    // }

    // let myTaco = new Taco();

    // myTaco.make();
}


// manually setting an object's prototype 
// THE FOLLOWING ARE OBJECT LITERALS
{
    // let user = {
    //     active: true,
    //     speak: function () {
    //         return this.name + " says hi!";
    //     }
    // };

    // let student = {
    //     name: "Peasant",
    //     major: "English"
    // };

    // let teacher = {
    //     name: "Caleb Curry",
    //     teaching: ["math", "science"]
    // };

    // Object.setPrototypeOf(student, user); // student now inherits the property 'active: true' from 'user'
    // Object.setPrototypeOf(teacher, user); // teacher now inherits the property 'active: true' from 'user'

    // student.active = false;     // overrides the prototypal inheritance only for 'student'

    // console.log("student:", student.active, student.speak());
    // console.log("teacher:", teacher.active, teacher.speak());
}


// polymorphism (object properties & prototypes)
// THE FOLLOWING ARE OBJECT LITERALS
{
    // let user = {
    //     active: true,
    //     speak: function () {                // default version of the 'speak' function
    //         return this.name + " says hi!";
    //     }
    // };

    // let student = {
    //     name: "Cody",
    //     subjects: ["math", "programming"],
    //     speak: function () {                 // 'student' has its own version of the 'speak' function
    //         let message = this.name + " studies ";
    //         this.subjects.forEach(function (e) {
    //             message += e + " ";
    //         });
    //         return message;
    //     }
    // };

    // let teacher = {
    //     name: "Caleb",
    //     teaching: ["math", "science"],
    //     speak: function () {                // // 'teacher' has its own version of the 'speak' function
    //         let message = this.name + " teaches ";
    //         this.teaching.forEach(function (e) {
    //             message += e + " ";
    //         });
    //         return message;
    //     }
    // };

    // Object.setPrototypeOf(student, user);
    // Object.setPrototypeOf(teacher, user);

    // let newMembers = [student, teacher];    // array of objects

    // newMembers.forEach(function (e) {       // for each method that calls the 'speak' function every iteration
    //     console.log(e.speak());
    // });


    // // checking an object for a property
    // console.log("Name in teacher? ", "name" in teacher);              // checks prototype
    // console.log("Name in teacher? ", teacher.name !== undefined);     // checks prototype
    // console.log("Name in teacher? ", teacher.hasOwnProperty("name")); // hasOwnProperty DOES NOT check the protoype


    // Get an array of property names from an object
    // let properties = [];

    // for (let prop in teacher) {             // gets all the properties of 'teacher'
    //     if (teacher.hasOwnProperty(prop)) { // DOES NOT check the prototype
    //         properties.push(prop);          // adds the properties to the above array
    //     }
    // }
    // console.log(properties);
}


// converting object literals to constructors
// THE FOLLOWING ARE CONSTRUCTORS (more scalable)
{
    // function User() {
    //     this.active = true;        // use 'this' instead of key value pairs
    // }

    // User.prototype.speak = function () {     // put methods in the object prototype
    //     return this.name + " says hi!";
    // }

    // function Student(name, subjects) {
    //     this.name = name;
    //     this.subjects = subjects;
    // }

    // Student.prototype = new User();     // sets prototype for Student() constructor as a new User() object

    // function Teacher(name, teaching) {
    //     this.name = name;
    //     this.teaching = teaching;
    // }

    // Teacher.prototype = new User();     // sets prototype for Teacher() contructor as a new User() object

    // Teacher.prototype.speak = function () {         // overrides the User() prototype for speak
    //     return "Teacher says 'Get fucked, retards!'"
    // }

    // let student = new Student("Peasant student", ["math", "programming"]);  // calls the constructor
    // let teacher = new Teacher("Caleb", ["math, science"]);                  // calls the constructor   

    // console.log(student);   // tests
    // console.log(teacher);   // tests
    // console.log(teacher.speak());   // tests override


    // // INSTANCE OF METHOD (checks if valid data type)
    // console.log("teacher is instance of Teacher:", teacher instanceof Teacher);    // returns 'true' if teacher is an instance of Teacher
    // console.log("teacher is instance of User:", teacher instanceof User);       // returns 'true' if teacher is an instance of User


    // // FUNCTION TO TEST IF VALID DATA TYPE
    // function doSomething(user) {
    //     if (user instanceof User) {
    //         return "yea baby";
    //     }
    //     return -1;
    // }
    // console.log(doSomething(teacher));
}