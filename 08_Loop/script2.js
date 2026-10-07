// // This is a simple loop that prints "Hello World" 50 times to the console.

// for( let i=0; i<50; i++){
//     console.log("Hello World")
//  }


//  //calculate sum of first  1 to 5 number

//  let number=0;

//  for (let i=1; i<=5; i++){
//         number = number + i
     
//  }

//     console.log(number)

// //calculate sum of first  1 to n number

// for(let i =0; i<=100; i++){
//     if( i%2===0){
//         console.log(i)
//     }
// }

// //guess the number

// let user=19;
// let guessnumber=35
// for(let i =1; i<=1; i++){
//     if(user === guessnumber){
//         console.log("You win this Game")
//     }else{
//         console.log("You guess wrong number please guess the write NUmber")
//     }
// }



// //guess the game usingw while

// let usergueess=19;
// let gueenumber=32;

// while( usergueess !==gueenumber){
//     console.log("plasae guess the write number")
// }

// console.log("You win this game")



// simple  passwordchecker

// let user3="94590935490org"
// let password="58t857t849204"
// for(let i=1; i<=3 ; i++){
//     if(user3===password){
//         console.log("You password is correct and loging successfully")
//         break;
//     }else{
        
//         console.log("plasae enter correct passwords")
//     }
// }


//calculate how many  vouwel and consonents in a given string using for  of loop  


// let str="hello"
// let count=0

// for (let val of str){
//      (val ==="a" || val ==="e" ||val ==="i" ||val ==="o" ||val ==="u" ) ? count++ :null

// }
// console.log(count)


let userData={
    name:"arsh",
    address:"Nodia"
}
// console.log(userData["name"])
for (let key in userData){
    console.log(userData[key])
}