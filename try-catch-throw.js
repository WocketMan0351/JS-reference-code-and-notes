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