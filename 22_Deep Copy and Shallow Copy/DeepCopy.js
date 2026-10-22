//object

let obj={
    name:"Arsh",
    address:{
      city:"Sultanput",
      country:"India"
    }
}

let obj2=structuredClone(obj)
obj.address.city="Nodia"
console.log("Obj 2 data",obj2)

//Array

let arr = [10, 20, [30, 40]];
let arr2=structuredClone(arr)
arr[2][0]=4000;
console.log(arr2)





