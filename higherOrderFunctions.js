{
    var ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

    var companies= [
        {name: "Company One", category: "Finance", start: 1981, end: 2004},
        {name: "Company Two", category: "Retail", start: 1992, end: 2008},
        {name: "Company Three", category: "Auto", start: 1999, end: 2007},
        {name: "Company Four", category: "Retail", start: 1989, end: 2010},
        {name: "Company Five", category: "Technology", start: 2009, end: 2014},
        {name: "Company Six", category: "Finance", start: 1987, end: 2010},
        {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
        {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
        {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
      ];
}


// FILTER
{
    // // [EXAMPLE 1] (gets an array of ages 21 or greater)
    // let canDrink = ages.filter(function(age) {
    //     if (age >= 21) {
    //         return true;
    //     }
    // });

    // // putting the above into 1 line of code...
    // let canDrink2 = ages.filter(age => age >= 21);

    // console.log(canDrink)
    // console.log(canDrink2);



    // // [EXAMPLE 2] (gets an array of only retail companies)
    // let retailCompanies = companies.filter(function(company) {
    //     if (company.category === "Retail") {
    //         return true;
    //     }
    // });

    // // putting the above into 1 line of code...
    // let retailCompanies2 = companies.filter(company => company.category === "Retail");

    // console.log(retailCompanies);
    // console.log(retailCompanies2);
}


// MAP
{
    // // [EXAMPLE 1] (gets an array only the names)
    // let companyNames = companies.map(function(company) {
    //     return company.name;
    // });

    // // same thing with arrow function
    // let copmanyNames2 = companies.map(company => company.name);

    // console.log(companyNames);
    // console.log(copmanyNames2);



    // // [EXAMPLE 2] (squares the ages)
    // let agesSquared = ages.map(function(age) {
    //     return Math.pow(age, age);
    // });

    // // same thing with arrow function
    // let agesSquared2 = ages.map(age => Math.pow(age, age));

    // console.log(agesSquared);
    // console.log(agesSquared);
}

// SORT
{
    // // EXAMPLE 1 (sort by start year)
    // let sortedCompanies = companies.sort(function(a, b) {
    //     if (a.start > b.start) {
    //         return 1;
    //     }
    //     else {
    //         return -1;
    //     }
    // });

    // // less complicated way to achieve the same thing
    // let sortedCompanies2 = companies.sort(function(a, b) {
    //     return  a - b;
    // });

    // // same thing with an arrow function
    // let sortedCompanies3 = companies.sort((a, b) => (a - b))

    // console.log(sortedCompanies);
    // console.log(sortedCompanies2);
    // console.log(sortedCompanies3);



    // // EXAMPLE 3 (sorts ages ascending)
    // let sortAges = ages.sort(function(a, b) {
    //     return a - b;
    // });

    // // same thing with an arrow function
    // let sortAges2 = ages.sort((a, b) => (a - b));

    // console.log(sortAges);
    // console.log(sortAges2);
}


// REDUCE
{
    // // EXAMPLE 1 (add all the ages together)

    // // reduce will accomplish the same as this for loop...
    // let sum = 0;

    // for (let i = 0; i < ages.length; i++) {
    //     sum += ages[i];
    // }

    // console.log(sum);

    // // using reduce...
    // let ageSum = ages.reduce(function(total, age) {
    //     return total + age;
    // }, 0);  // takes in a 2nd paramater, '0' for total to begin with

    // // same thing using an arrow function
    // let ageSum2 = ages.reduce((total, age) => total + age);

    // console.log(ageSum);
    // console.log(ageSum2)



    // // EXAMPLE 2 (get the total years of all companies existence)

    // let totalYears = companies.reduce(function(total, company) {
    //     return total + (company.end - company.start);
    // }, 0);  // takes in a 2nd paramater, '0' for total to begin with

    // // same thing with an arrow function
    // let totalYears2 = companies.reduce((total, company) => total + (company.end - company.start), 0);

    // console.log(totalYears);
    // console.log(totalYears2);
}


// COMBINING METHODS
{
    // multiplies each age by 2, filters out ages > 40, sorts in ascending order

    // USING REGULAR FUNCTIONS
    let combined = ages
    .map(function(age) {
        return age * 2;
    })
    .filter(function(age) {
        if (age <= 40) {
            return true;
        }
    })
    .sort(function(a, b) {
        return a - b;
    }, 0);


    // USING ARROW FUNCTIONS
    let combined2 = ages
    .map(age => age * 2)
    .filter(age => age <= 40)
    .sort((a, b) => (a - b));


    console.log(combined)
    console.log(combined2);
}