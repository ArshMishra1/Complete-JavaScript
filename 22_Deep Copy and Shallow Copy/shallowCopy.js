//ShallowCopy

//!array

// let arr=[12,34,56,686,989 ,[2345,567,789,80,46]]

// let arr2=[...arr];

// arr.push(455)

// console.log(arr2)
// console.log(arr)


//!object

let obj={
    name:"Arsh",
    address:{
      city:"Sultanput",
      country:"India"
    }
}

let obj2={...obj}
obj.address.city="Nodia"
console.log(obj2)
