//object - it is collection of properties and methods
//property holds the value and method holds the function
// writen  inside{}

//Exmple
let Obj={
    name : "arsh",
    lastname : "mishra",
    address : function(){
          console.log("Sultanpur Lucknow");
    },
    pincode : ()=>{
        console.log("228121")
    }

}

//dot notation
console.log(Obj.name)
console.log(Obj.address());

//bracket notation
console.log(Obj["lastname"])
console.log(Obj["pincode"]());

//operation 
//add
Obj.age=23;

//updage 
Obj.name="TATA";

console.log(Obj)

//Delete
delete Obj.age

console.log(Obj)


//object mthods
//object key=> return array of key
let Obj2={
    brand : "TATA",
    model : "Safari",
    price: 2000000
}
console.log(Object.keys(Obj2))

//object value -it return array that contain all vaule of  an object

console.log(Object.values(Obj2))

//object entries- it return new array that contain key value pari of an obejct

console.log(Object.entries(Obj2))

//object assing  = copy properties form sources Object to target Object
console.log(Object.assign(Obj, Obj2))

