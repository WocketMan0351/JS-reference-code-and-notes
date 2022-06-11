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