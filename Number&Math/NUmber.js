
//Number
let num1=10;
let num2=12323.3453;
console.log(num2.toFixed(4)) 
console.log(num2.toPrecision(6)) 
console.log( typeof num2.toString()) 

//math
console.log(Math.PI)
console.log(Math.round(4.2))
console.log(Math.floor(4.9))
console.log(Math.ceil(4.1))
console.log(Math.pow(2,3))
console.log(Math.min(1,2,3,4,5))
console.log(Math.max(1,2,3,4,5))
// cerate a function that genrate random number()


function randomOTP(a ){
    let OPT= Math.floor(Math.random()*a) +1000
    return OPT
}

let finalOTP = randomOTP( 9000)
console.log(finalOTP)


// console.log(a)
// console.log(c)
// console.log(b)
let a=12;
const b=12
var c=12;