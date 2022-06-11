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