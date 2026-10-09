// //write a funciton that check user is eligibility

// function  checkeligibility(user,age){
// if(age>18){
//   console.log("Your  are eligibility" ,user)
// }else{
//     console.log("Your are not  eligibility " ,user)
// }
// }

// checkeligibility( "Jhon",23)




// //function delcaration - is also know as named funciton  , it supports hoisting
// add(12,23)

// function  add(a,b){
//     console.log(a+b ,"this is function declaration")   ;
// }

// //function expression- is a  function that store inside the varibale and we call it using varibale name ,  does not support hoisting


// let UserDetail= function (name, age){
//       console.log("name" , name ,"Age",age,"this is function expression")
// }



// UserDetail("Arsh",23)

// //anonymous function- a function without a name , it is used as a callback function

// // function (name, age){
// //     console.log("name" , name ,"Age",age,"this is anonymous function")
// // }

// //arrow function - arrow function ia shorter way to write a fucntion, it does not have its own this keyword,

// let userdata=()=>{
//     console.log("this is arrow function")

// }
// userdata();



// //one line function=if function as only one line of code the we can write it in one line

// let oneline=()=> console.log("this is one line function")
// oneline();


// //IIFE- Immediately Invoked Function Expression - it is a function that is execute immediatelt when we define
// //  it, it is used to create a new scope and avoid polluting the global scope
// (function(){
//     console.log("hello sir this is IIFE function")
//     let password="4985kjsdhrh"
// })();

// // console.log("access password" , password)

// //create private varibale

// //execute code only once

// //parameter  -  parameter is a varible  that accpet value when funciton is called


// //arguments- argument is actual value is passed to function when function is called



// //rest parameter- rest parameter allow js funciton to accpet multiple argument and collect them into single array



// let username=(...user)=> {
//     console.log("all user name",user)
// }

// username("arsh", "kumar" ,"Mishra" ,"sultanpur" ,"jai mata di")


// //returm-- return keyword give back value to caller function


//First class Function


// let user=()=>{
//     let userName=(name)=>{
//         return name
//     }

//     let userage=(age)=>{
//         return age
//     }
// return userName
// }

// console.log(user()())

//pass as argument

let usercallback=(sayhello)=>{
 sayhello("Hello")
}                                        //callback function

usercallback(function(data){
console.log(data)
})