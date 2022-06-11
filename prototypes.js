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