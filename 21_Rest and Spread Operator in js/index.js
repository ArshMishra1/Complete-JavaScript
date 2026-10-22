//rest operator
//is used to collect multiple value into in a single array
//used in function parameter
//used in distrucutring

function userData(...Rest){
    return (Rest)
}
let userResult=userData("A user", "B user","C user","D user")
console.log(userResult)


//array distructure
let [usera , ...Rest] =userResult
console.log(usera)
console.log(Rest)

//Object distructure

let {name ,...Restdata}={
    name:"Arsh",
    gender:"Male",
    phone:345345,
}

console.log(name)
console.log(Restdata)
