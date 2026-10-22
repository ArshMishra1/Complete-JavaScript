//spread oeprator - spread operator expands the value of array and object using ...syntax
//!copy 
//array--


let arr=[2,3,5,7,89]
let arr1=[...arr]
arr.push(2)
console.log(arr)
console.log(arr1)


//object 

let obj={
    name:"Arsh",
    gender:"Male",
    phone:345345,
}
let obj2={...obj}
obj.name="druve"
console.log(obj2 ) 

//  !combin
let arr2=[1,34,5,6,78,];
let arr3=[ 35,43573,789];
let arr4=[...arr2,...arr3]
console.log(arr4)

let obj3={
    data1:"A",
    data2:"B",
    data3:"C"
}

let obj4={
    data5:"d",
    data6:"e",
    data7:"F"
}


let obj5={...obj3 ,...obj4}
console.log(obj5)






