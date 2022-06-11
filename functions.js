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