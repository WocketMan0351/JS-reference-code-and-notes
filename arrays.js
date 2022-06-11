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