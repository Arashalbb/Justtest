// Objects
// An object in JavaScript is a collection of key-value pairs.
// Keys (properties) are strings, and values can be any data type.
// Objects can store functions as methods.
// You can create objects using object literals or constructor functions.
// Properties of objects can be accessed, modified, added, and deleted dynamically.


// Creating an object using an object literal

let student = {
    firstName: "Arash",
    lastName: "Jalali",
    age: 30,
    grade: "A",
    isGraduated: false
};

console.log(student);


//How to Access Properties


console.log(student.firstName);  // Output: Arash
console.log(student.age);        // Output: 30

// Accessing properties using bracket notation
console.log(student["lastName"]); // Output: Jalali
console.log(student["grade"]);    // Output: A


//Modifying

// Modifying existing properties
student.age = 41;
student.grade = "A+";

// Adding new properties
student.major = "Alibaba Science";

console.log(student);


//Add Functions

// Adding methods to an object
student.getFullName = function() {
    return this.firstName + " " + this.lastName;
};

student.getDetails = function() {
    return this.firstName + " " + this.lastName + " is " + this.age + " years old, majoring in " + this.major;
};

// Calling methods
console.log(student.getFullName());  // Output: Arash Jalali
console.log(student.getDetails());   // Output: Arash jalali is 41 years old, majoring in Alibaba Science


