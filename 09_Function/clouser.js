// //clouser
function userdata(){
let count=0;
function abc(){
    count=count+1
    return count
}
return abc
}

let result=userdata()
console.log(result())

// //bank exmplate 


// function bank(depostie){
//     let balance=1000;

//     balance=balance+ depostie
//  console.log(balance)
// }

// bank(500)
// bank(500)

function bank(){
    let balance=1000;
    return function user(depostie){
    balance=balance+ depostie;
    return balance;
}

}
let resul2=bank()
resul2(500)
resul2(1000)


//pure function


function pure(a){

    console.log(a +10)
}

pure(123)



//impure function
let value=10;
function impure(){
 value++
}
impure()