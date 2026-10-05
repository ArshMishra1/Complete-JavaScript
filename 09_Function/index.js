//function- function is reuseable block of code that perfrom a specific task and execute when we called
// function can accept input and process it and reutrn ouput
//why we use - we use function to avoid writing same code again and again 
//imp= function help in code resuseabilty and readablity and maintainability
//each function create new function execution context 
//!type of function -

//function declaration- 1.function declaration -- Name function  2. defind using the function keyword with a name . fully  hoisted  called before declaration

function demo(){
    console.log("hello i am a function delaraction");
}
demo()
//function expression - function exprssion is a function that is store inside the variable and we call by using name;

let demo2 = function (){
    console.log("function expression hujii");
}

//anonymous function- a fuction without name is kowns as anonymous function 

// function(){
//     console.log("i am anonoymus function");
// }


//arrow function - 