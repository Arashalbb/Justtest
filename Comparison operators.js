//JavaScript Comparison Operators

// Equality and Inequality


let arash = 10;
let niloofar = 20;
let Dani = '20';

// Equality (==) - checks for equality with type conversion
console.log(arash == niloofar); // false: 10 is not equal to 20
console.log(niloofar == Dani);  // true: '20' is converted to 20 before comparison
console.log(arash == Dani);     // false: 10 is not equal to '20' even after type conversion

// Strict Equality (===) - checks for equality without type conversion
console.log(arash === niloofar); // false: 10 is not strictly equal to 20
console.log(niloofar === Dani);  // false: 20 (number) is not strictly equal to '20' (string)
console.log(arash === Dani);     // false: 10 (number) is not strictly equal to '20' (string)

// Inequality (!=) - checks for inequality with type conversion
console.log(arash != niloofar); // true: 10 is not equal to 20
console.log(niloofar != Dani);  // false: '20' is converted to 20 before comparison, so they are equal
console.log(arash != Dani);     // true: 10 is not equal to '20' even after type conversion

// Strict Inequality (!==) - checks for inequality without type conversion
console.log(arash !== niloofar); // true: 10 is not strictly equal to 20
console.log(niloofar !== Dani);  // true: 20 (number) is not strictly equal to '20' (string)
console.log(arash !== Dani);     // true: 10 (number) is not strictly equal to '20' (string)

// Example outputs in the console
console.log("arash == niloofar:", arash == niloofar); // Output: false
console.log("niloofar == Dani:", niloofar == Dani); // Output: true
console.log("arash == Dani:", arash == Dani); // Output: false
console.log("arash === niloofar:", arash === niloofar); // Output: false
console.log("niloofar === Dani:", niloofar === Dani); // Output: false
console.log("arash === Dani:", arash === Dani); // Output: false
console.log("arash != niloofar:", arash != niloofar); // Output: true
console.log("niloofar != Dani:", niloofar != Dani); // Output: false
console.log("arash != Dani:", arash != Dani); // Output: true
console.log("arash !== niloofar:", arash !== niloofar); // Output: true
console.log("niloofar !== Dani:", niloofar !== Dani); // Output: true
console.log("arash !== Dani:", arash !== Dani); // Output: true

//Greater Than & Less Than


let arash = 10;
let niloofar = 20;
let Dani = '20';

// Greater Than (>) - checks if the left operand is greater than the right operand
console.log(arash > niloofar);  // false: 10 is not greater than 20
console.log(niloofar > arash);  // true: 20 is greater than 10
console.log(niloofar > Dani);   // false: '20' is converted to 20 before comparison, so 20 is not greater than 20

// Greater Than or Equal To (>=) - checks if the left operand is greater than or equal to the right operand
console.log(arash >= niloofar); // false: 10 is not greater than or equal to 20
console.log(niloofar >= arash); // true: 20 is greater than 10
console.log(niloofar >= Dani);  // true: '20' is converted to 20 before comparison, so 20 is equal to 20

// Less Than (<) - checks if the left operand is less than the right operand
console.log(arash < niloofar);  // true: 10 is less than 20
console.log(niloofar < arash);  // false: 20 is not less than 10
console.log(arash < Dani);      // true: '20' is converted to 20 before comparison, so 10 is less than 20

// Less Than or Equal To (<=) - checks if the left operand is less than or equal to the right operand
console.log(arash <= niloofar); // true: 10 is less than or equal to 20
console.log(niloofar <= arash); // false: 20 is not less than or equal to 10
console.log(niloofar <= Dani);  // true: '20' is converted to 20 before comparison, so 20 is equal to 20

// Example outputs in the console
console.log("arash > niloofar:", arash > niloofar); // Output: false
console.log("niloofar > arash:", niloofar > arash); // Output: true
console.log("niloofar > Dani:", niloofar > Dani); // Output: false
console.log("arash >= niloofar:", arash >= niloofar); // Output: false
console.log("niloofar >= arash:", niloofar >= arash); // Output: true
console.log("niloofar >= Dani:", niloofar >= Dani); // Output: true
console.log("arash < niloofar:", arash < niloofar); // Output: true
console.log("niloofar < arash:", niloofar < arash); // Output: false
console.log("arash < Dani:", arash < Dani); // Output: true
console.log("arash <= niloofar:", arash <= niloofar); // Output: true
console.log("niloofar <= arash:", niloofar <= arash); // Output: false
console.log("niloofar <= Dani:", niloofar <= Dani); // Output: true
