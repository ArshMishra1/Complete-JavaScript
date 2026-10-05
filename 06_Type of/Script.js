// typeof tells us what kind of data type a value has.
// typeof returns the data type as a string.

console.log(typeof 12);       // "number"

console.log(typeof "abc");    // "string"

console.log(typeof abc);      // "undefined" (undeclared variable)

console.log(typeof NaN);      // "number"

let obj = {
  name: "arsh"
};

console.log(typeof obj);      // "object"

console.log(typeof undefined); // "undefined"

console.log(typeof null);     // "object" (historical bug in JavaScript)

console.log(typeof 123n);     // "bigint"

console.log(typeof Symbol()); // "symbol"

console.log("----- Trick Questions -----");

let arr = [12, 34, 45, 56];

console.log(typeof arr);      // "object"
console.log(typeof []);       // "object"

let user = function () {
  console.log("Function Test");
};

console.log(typeof user);          // "function"
console.log(typeof function(){});  // "function"