// The Date object is a built-in JavaScript object that allows you to work with dates and times.
// It provides methods to get and set the date, time, and individual components.


//Creating Date Objects

// 1 - Current Date and Time
// Create a new Date object for a specific date and time

let now = new Date();
console.log(now);



// 2 - Specific Date and Time
// Create a new Date object using individual date and time components

let Today = new Date('2024-06-28T10:20:30Z');
console.log(Today);


// 3 - Using Date Components
// Create a new Date object using individual date and time components

let dateComponents = new Date(2024, 5, 28, 10, 20, 30); // Note: Months are 0-indexed (0 = January, 5 = June)
console.log(dateComponents);

// Date Methods

// 1 -  Getting Date and Time Components

let year = now.getFullYear();
console.log(year); // 2024

let month = now.getMonth();
console.log(month); // 5 (June)

let date = now.getDate();
console.log(date); // 28

let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();
console.log(`${hours}:${minutes}:${seconds}`); // Example: 10:20:30



//Example - Calculate Age

function calculateAge(birthdate) {
    let now = new Date();
    let age = now.getFullYear() - birthdate.getFullYear();
    let monthDifference = now.getMonth() - birthdate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && now.getDate() < birthdate.getDate())) {
        age--;
    }
    return age;
}

let birthdate = new Date('1990-11-24');
console.log(`Age: ${calculateAge(birthdate)}`); // Example: Age: 34


//Example of Calculate Specific Date

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
}


var someDate = new Date(); // Current date and time
var numberOfDaysToAdd = 6;
someDate.setDate(someDate.getDate() + numberOfDaysToAdd); // Add 6 days to the current date

var result = formatDate(someDate); // Format the resulting date

console.log('Result:', result); // Output the formatted date
