//Welcome to Automation Bootcamp


//What are Variables?
 //   Variables are containers for storing data values.
 //   In JavaScript, variables can hold different types of data, such as numbers, strings, objects, and more.

//Var
//let
//Const


//var

//Global Scope
//Reassinable

var name = 'Arash';
console.log(name);
alert(name);


var name1 = 'Arash';
var name2 = 'Niloofar';
console.log(name1);
console.log(name2);
alert(name1);
alert(name2);



//Variables Difrences
//Scope
//Hoisting
//Reassignment

//Var
//Example

function name() {
    var x = 'arash'; // Declares 'x' and initializes it to arash
    if (true) {
        var x = 'niloofar'; // This reassigns the outer variable 'x'
        console.log(x); // Output: niloofar
    }
    console.log(x); // Output: niloofar
}

name(); // Call the function to see the outputs



//Let

//Block Scope
//No Hoisting
//Cannot be Redeclared
//Can be Reassigned
//Example

let Name = "Arash";

if (true) {
    let Name = "Niloofar";
    alert(Name); //"Niloofar"
}

alert(Name); //"Arash"


//Const
//Block scope
//Can be Reassigned
//Object and Array Properties

//Example

function Identity() {
    const person = {
        name: 'Arash',
        familyName: 'Jalali'
    };

    // Attempting to reassign the entire 'person' object will result in an error
    // person = {}; // Uncommenting this line would cause an error (Assignment to constant variable)

    // However, modifying properties of the 'person' object is allowed
    person.name = 'Niloofar'; // Valid
    person.age = 20; // Valid, adding new property

    console.log(person); // Output: { name: 'Niloofar', familyName: 'Jalali', age: 20 }
}

Identity(); // Call the function to see the outputs




// Summary

// Variables declared with var have either global scope or function scope.
// Variables declared with let and const have block scope.
// Variables declared with var can be redeclared and reassigned using var.
// Variables declared with let cannot be redeclared but can be reassigned.
// Variables declared with const cannot be redeclared or reassigned.
// When we declare variables with var and let, we can leave them uninitialized and assign values to them later.
// However, const variables must always be initialized with a value.















