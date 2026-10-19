//Call

//Product example
let product1={
    name: "Laptop",
    price:20000
}
let Product2={
    name:"phone",
    price:15000
}

function showdetail(storage){
    console.log( this.name , this.price , "Storage",storage)
}
showdetail.call(product1 , "500GB")
showdetail.call(Product2 , "128GB")



//userprofile

let user1={
    name: "User1name",
    Gender:"male"
}
let user2={
    name: "User2name"
}

let userPrinter= function (Location){
    console.log(this.name , Location)
}

userPrinter.call(user1 ,"Lucknow", user1.Gender="Female")
console.log(user1)
userPrinter.call(user1 ,"Noida")