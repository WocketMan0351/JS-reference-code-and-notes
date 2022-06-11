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


    // // Get an array of property names from an object
    // let properties = [];

    // for (let prop in teacher) {             // gets all the properties of 'teacher'
    //     if (teacher.hasOwnProperty(prop)) { // DOES NOT check the prototype
    //         properties.push(prop);          // adds the properties to the above array
    //     }
    // }
    // console.log(properties);
}