//Types of Scope in JavaScript

//Global Scope
// Local/Function Scope
// Block Scope


// 1 - Global Scope

// Variables declared outside of any function or block have global scope.
// They are accessible from anywhere in the code.

var globalVar = "I am a global variable";

function logGlobalVar() {
    console.log(globalVar); // Accessible here
}

logGlobalVar(); // Outputs: I am a global variable
console.log(globalVar); // Accessible here as well, Outputs: I am a global variable


// 2 - Local/Function Scope

// Variables declared within a function are in the local scope of that function.
// They are not accessible outside the function.

function logLocalVar() {
    var localVar = "I am a local variable";
    console.log(localVar); // Accessible here
}

logLocalVar(); // Outputs: I am a local variable
console.log(localVar); // Error: localVar is not defined

// 3 - Block Scope
// Variables declared with let or const within a block (e.g., inside an if statement or a loop) are block-scoped.
// They are only accessible within that block.

if (true) {
    let blockVar = "I am a block-scoped variable";
    console.log(blockVar); // Accessible here
}

console.log(blockVar); // Error: blockVar is not defined
