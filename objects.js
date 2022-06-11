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