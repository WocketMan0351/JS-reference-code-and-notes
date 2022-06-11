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