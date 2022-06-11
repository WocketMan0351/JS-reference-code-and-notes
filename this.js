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