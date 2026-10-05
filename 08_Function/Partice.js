// // first class function
// //Store Function inside Variable
// let demo = function(){
//     console.log("hello i am first class function");
// }
// demo();

// //Pass Function as Argument

// let demo1= function( a){
//     a();
// }

// console.log(demo1(function(){
//     console.log("ji")
// }))

// // retun as function a function 

// let demo2 = function( ){
//     return function(){
//         console.log("hello")
//     }
// }

// demo2()();




// //! type of function

// function demo1(){
//     console.log("hello")
// }
// demo();


// //higher order function
// //! higer order function is a function that takes another function as an argument or returns a function as a result.

// //? return function as result

// let demo2 = function(){
//     return function(){
//         console.log("hello")
//     }
// }

// //? take function as an argument

// let  demo3= function( jai){
//     console.log(" parent functon");
//     jai();
// }

// console.log(demo3(function(){
//     console.log("child function")
// }));

//q-Write a function that prints:

function demo() {
    console.log("welcome")
}
demo();

// Write a function that takes 2 numbers and prints their sum.

function sum(a, b) {
    return a + b;
}
let totalSum = sum(2, 2)
console.log(totalSum)

//question
function subtract(a, b) {
    return a - b;
}
subtract(20, 5);


// Write a function that takes a number and prints:

// "Even" if even
// "Odd" if odd

function sumnumber(val) {
    if (val % 2 === 0) {
        console.log("even number")
    } else {
        console.log("Odd number")
    }
}
sumnumber(2);

// Write a function that takes 3 numbers and returns the largest number.
//   function number(a,b,c){
//      if( a >c ) return a; 
//      if( a <b) 
//   }

// Write a function that takes a number and prints its table.

function table(a) {
    for (let i = 1; i <= 10; i++) {
        console.log(a * i)
    }
}
table(5)


// Function banao jo 2 numbers me bada number return kare.

function bigNumber(a, b) {
    if (a > b) {
        return a;
    }
    else { return b; }
}
console.log(bigNumber(2, 4))


// !Function banao jo check kare number positive, negative ya zero hai.  

// Q4

// Function banao jo age le.

// Age >= 18 → "Eligible"
// Otherwise → "Not Eligible"

// function age(){
//     if( age>=18){
//         console.log("Eligible")
//     }else{
//         console.log("Not Eligible")
//     }
// }
// age(2);



// Function banao jo marks le.

// 90+ → A
// 80+ → B
// 70+ → C
// Otherwise → Fail


// function marks(val) {
//     if (val > 90) {
//         return A;
//     } else if (val > 80) {
//         return B;
//     }
//     else if (val > 70) {
//         return C;
//     } else {
//         return Fail;
//     }
// }
// console.log(marks(90))

// hello() function banao.
// Fir run() function banao jo callback use karke hello() ko execute kare.


// function hello(){
//  console.log("hello")
// }

// function run(callback){
//     callback();
// }
// run(hello());


// add(a, b) function banao.
// Fir calculate() HOF banao jo callback ke through addition kare.

// function add( a,b){
//     console.log(a +b)
// }
//  function calculate(callback) {
// callback(1,2)
//  }
//  calculate(add)


//  isOdd(num) function banao.
// Fir check() HOF banao jo callback ke through odd/even check karaye.

// function check(val){
//     val();
// }
 
// function isOdd(num){
//     if(num%2===0){
//         console.log("even")
//     }else{
//         console.log("odd")
//     }
// }

// check(isOdd(23));


// ! multiply(a, b) function banao.
//! Ek HOF calculate(a, b, callback) banao

// !divide(a, b) function banao.

// !Use HOF ke through call karo.


// function calculate(a , b , callback){
//     callback(a ,b)
// }



// calculate(2,4, function (x, y){
//      console.log( x/y)
// })


// greet(name) function banao.

// HOF processUser(name, callback) banao.



// function  processUser( name,  callback){
//     callback(name)
// }
// processUser("hello", function(val){           
//     console.log(val)
// })


// /*
// !Ek hi HOF hona chahiye.
// calculate(10, 5, add);
// calculate(10, 5, subtract);
// calculate(10, 5, multiply);
// calculate(10, 5, divide);
// ! Usse ye sab chalna chahiye:
//  */


// function main(a, b, opertors){
//  opertors( a, b);
// } 

// function add(a, b){
//     console.log(a + b)
// }
// function multiply(a,b){
//   console.log(a *b)
// }
// function subract(a,b){
//   console.log(a - b)
// }
// function divide(a,b){
//   console.log(a / b)
// }

// main(2,3 ,add)
// main(2,3 ,multiply)
// main(2,3 ,subract)
// main(2,3 ,divide)


// function add(a, b) {
//     console.log(a + b);
// }

// let ans = add(10, 20);

// console.log(ans);


// function display() {
//     return add(5, 5);
// }

// function add(a, b) {
//     return a + b;
// }kb


// let result = display();

// console.log(result);


// function calculator() {
//     return function (a, b) {
//         return a * b;
//     };
// }

// console.log(calculator()(5, 4));

// Ek function square() banao.

// Ye ek function return kare jo kisi bhi number ka square print kare.

// function square(){
//     return function(val){
//         return val ** 2
//     }
// }

//  let result  =square()(7);
//  console.log(result)


     
//         function calculator(){
//             return function(a ,b , operator){
//             if( operator ==="+"){
//                 return a+b
//             }else {
//                 return a-b
//             }
//                 }
//         }

// let result=calculator()
// console.log(result(2,4,"+"))


// function greeting() {
//    return function(name, time){
//     if( time === "morning"){
//          return ` Good ${time} ${name}`
//     }else if(time ==="night"){
//          return ` Good ${time} ${name}`
        
//     }else {
//         return  ": Invalid Output"
//     }
//    }
// }

// let result= greeting();
// console.log(result("Arsh" ,"morning"))




// function login() {
//  return function (username, password){
//     if(username ==="admin" && password==="1234"){
//         return" Login Successful";
//     }else{
//         return "Invalid Credentials";
//     }
//  }
// }

// let  result= login();
// console.log(result( "admin" , "1234"))



// function discount() {
//    return function (price, percentage){
//      let FinalPrice = price - (price * percentage) / 100;
//      return FinalPrice;
//    }
// }
// let calculate = discount();
// console.log(calculate(1000, 20));

// !🚀 Coding Questions (Run karna)


// Ek function counter() banao.

// Requirements:

// count = 0
// Inner function return karo.
// Har call par count +1 ho.
// Return use karna.

// function counter(){
//     let count=0;
//     return function (){
//         count++;
//         return count;
//     }
// }
// let c = counter();
// console.log(c()); // 1
// console.log(c()); // 2
// console.log(c()); // 3



//!bank question
// function bankAccount() {
// let balance = 1000;
// return function (action, amount){
//     if(action === "deposit"){
//         balance += amount;
//         return balance
//     }else if(action === "withdraw"){
//         balance -= amount;
//         return balance
//     } else if(action = "check"){
//         return balance
//     }else{
//         return"Invalid Action"
//     }
// }
// }
// let account = bankAccount();

// console.log(account("check"));          // 1000

// console.log(account("deposit", 500));   // 1500

// console.log(account("withdraw", 200));  // 1300

// console.log(account("check"));          // 1300

// console.log(account("hello"));          // Invalid Action




// function createMultiplier(num) {
//   return  function (value){
//     return value * num;
//   }
// }
// let double = createMultiplier(2);
// let triple = createMultiplier(3);

// console.log(double(10)); // 20
// console.log(triple(10)); // 30
// console.log(double(5));  // 10