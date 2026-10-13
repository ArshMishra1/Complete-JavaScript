//what is array ?
//type of is object ?  //OBJECT
//how to create array?
//indexing- array index start from the zero(0)
             //used to access ,update , delete elemnet
             //last index finde 3-1
             //undefinde
let arr=[23,"Arsh" ,"Mishra" ,734];
//how to access array element 
let data=arr[2];
//how to update array element
arr[2]="Kumar"
console.log(data)
console.log(arr)

//lenthge property---------------------

let arr2=[1,34,5,56,5,7,69];
console.log(arr2)
console.log(arr2[arr2.length-1])

//pop ,push shift unshift


//push an array method uesd to add one more element at the end of an array and return new length of array

let tableof2=[ 2,4,6,8,9]
tableof2.push(10);
console.log(tableof2)

//pop is an array method used to remove last element  form the array and return the remove elemet 
tableof2.pop()
console.log(tableof2)

//unshift is an method used to add one or more element at the beging of the array and return new length of array
tableof2.unshift(1)
console.log(tableof2)

//shift is an array method use to  remove first element form the starting of the  array and return remove element

tableof2.shift()
console.log(tableof2)

//sort() is an array method uses to sort the array element in asscending or desecending order

let number=[23,45,67,7979 ,423,4545]

let a=number.sort((a,b)=>{
  return   a-b
})
console.log(number ,"qesceding")

let b=number.sort((a,b)=>{
   return  b-a
})
console.log(number,"desceding")


//for string

let str=["arsh","caches", "boy","kumar" ,"mishra"]
str.sort();
console.log(str)


//reverse-

str.reverse()
console.log(str,"Reverse")


//splice

let sp=[233 ,"arsh" ,"mishra","kumar"]
     //start ,delete , item,
// sp.splice(1,4);

sp.splice( 0,2, "Pinku")
console.log(sp)


//imutating method because it modify the original array
//slice
let sl=[10 ,20,30 ,40];
    //start index (include)  endindex (exclude)
// let newarr=sl.slice(1,3);
let newarr=sl.slice(1);
console.log("new array=" ,newarr);



//concat - used to comebine tow or more arrat into single array or return new array

let arr1=[10 ,20,30 ,40];
let arr3=[103 ,3420,3560 ,840];

let newarr1=arr1.concat(arr3)
console.log(newarr1)

//include
let inc=arr1.includes(346)
console.log(inc)

//Revision--

//splice

let arr4=[1,2,3,4,5,6]
// arr4.splice(0,3)   delete
// arr4.splice(2,0,7)   add
arr4.splice(4,1,"replace element -7")
console.log("Revision splice" ,arr4)

//slice-
let arr5=[4857,8947,7482,483498,957458];
// let newarr5=arr5.slice(1, -1)
// console.log("New arrray bro ",newarr5);

//sort
//  arr5.sort();
// arr5.sort((a,b)=>{
//     return b-a       
// })
//  console.log(arr5)
//reverse- reverse order array element
arr5.reverse()
console.log(arr5)
//concat
let arrco1=[1,2,3];
let arrco2=[4,5,6];
let arrco3=arrco1.concat(arrco2)
console.log("new array",arrco3)
//include
let elementchecker=[34564,797,98,98,0];
let result=elementchecker.includes(90)
console.log(result);

//indexof
console.log(elementchecker.indexOf(98))   






