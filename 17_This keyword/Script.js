//This keyword in javasCrpit refers to an object and it value is depend on how a function called.

// the value of this keyword is dynamic it depend on how a function is called

//we use this keyword to access the propersties and method of an object inside the function

//for example

let userdeatil={
    name:"user1",
    lname:"unkonow",
    sayhell0: function(){
        console.log(this.name)
    }
}
userdeatil.sayhell0()

//situation1

console.log("user 1 value" ,this)  //windows

//situation 2

function user2(){
 console.log("user2",this)        //windows
}
user2()

//situation 3

let user3=()=>{
    console.log("user value 3",this)   //window
} 
user3()

//situation 5

let user4=function(){

    console.log("user value 4",this)   //window
}
user4()

//situation 6

let userdeatil5={                  //return full object
    name:"user1",
    lname:"unkonow",
    sayhell0: function(){
        console.log("user 5",this)
    }
}
userdeatil5.sayhell0()

//situation 7


function user6(name , lastname){
    console.log(this)
}                                                   //return full object
 const detail= new user6( "coder" ,"gyan")


//situation 7

 let userdeatil7={                  //window
    name:"user1",
    lname:"unkonow",
    sayhell0: function(){
        console.log("user 7",this)
    }
}
let newuser=userdeatil7.sayhell0         
newuser()