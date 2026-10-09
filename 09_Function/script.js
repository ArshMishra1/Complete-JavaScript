//write a funciton that check user is eligibility

function  checkeligibility(user,age){
if(age>18){
  console.log("Your  are eligibility" ,user)
}else{
    console.log("Your are not  eligibility " ,user)
}
}

checkeligibility( "Jhon",23)




//function delcaration - is also know as named funciton  , it supports hoisting
add(12,23)

function  add(a,b){
    console.log(a+b ,"this is function declaration")   ;
}

//function expression- is a  function that store inside the varibale and we call it using varibale name ,  does not support hoisting
UserDetail("Arsh",23)


let UserDetail= function (name, age){
      console.log("name" , name ,"Age",age,"this is function expression")
}




//anonymous function- a function without a name , it is used as a callback function

// function (name, age){
//     console.log("name" , name ,"Age",age,"this is anonymous function")
// }

//arrow function - arrow function ia shorter way to write a fucntion, it does not have its own this keyword,

let userdata=()=>{
    console.log("this is arrow function")

}
userdata();



//one line function=if function as only one line of code the we can write it in one line

let oneline=()=> console.log("this is one line function")
oneline();