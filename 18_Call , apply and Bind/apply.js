//apply works same as call but  pass arugment as an array 

let car1={
    name: "Tata"
}
let car2={
    name:"Jeep"
}

let carDeatil= function( price, Topspeed){
     console.log(this.name , price , Topspeed)
}

carDeatil.apply(car1,["500000" ,"180Km"])