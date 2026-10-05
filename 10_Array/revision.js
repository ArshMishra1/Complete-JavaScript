// //how to create array 
// let arr=[1,23, "Arsh" , "mishra"]
// console.log(arr)

// //how to access and update element in an array -index
// console.log("-------access ------")
// //access
// let arr2=[1,2,3,4]
//  let vararr2=arr[1]  //access  by storing inside varibale/
//  console.log(vararr2) //23
// console.log("-------access ------")

// console.log(arr.at(-1)) //print  mordern way
// console.log("-------access ------")

//  console.log(arr2[arr2.length-1]) //print  
// console.log(arr2)


// //loop print array element one by one
// for( let i =0; i < arr.length ;i++){
//     console.log(arr2[i])
// }

// //reverse array in javascript
// let arr3=[]
// for(let i=arr2.length-1 ; i>=0 ;i--){
//     arr3.push(arr2[i])
// }
// console.log(arr3)


// //update using index or for example for array mutable

// let arr4=[12,,34,54,5]
// arr4[1]=45;
// console.log(arr4)

// //length- return total number of element in an array.
// //store inside the varibale

// let abc=[1,34,5,67,8,9,0,10];
// // console.log(abc.length)
// console.log("h-----------h")
// console.log(abc[2])
// console.log("h-----------h")
// let abc2= (abc[abc.length-1])
// console.log(abc2)

// //empty array length

// let abce=[]
// console.log(abce) //[]
// console.log(abce[1]) //undefinde
// console.log(abce.length) //Zero 0

// //push-add one or more element at the end of the array and return new array length
// let arr7=["A","b",23,34,34,4545]
// arr7.push(5)//only one element
// // arr7.push(6,7)// multiple element
// let arrpush= arr7.push(6,7)
// console.log(arrpush)
// console.log(arr7)
// //pop-remove element last element in an array and retun remove element
// let arr8=[1,3,4,5,67,8,9,9,18,45,7] 
// arr8.pop()
// let arrpop= arr8.pop()
// console.log(arrpop)
// console.log(arr8)

// //shift - remove first element from the start of the array and return remove element 
// let arr10=[1,23,4,5,676,87]
// arr10.shift()
// let arrshift=arr10.shift()
// console.log(arrshift)
// console.log(arr10)
// //unshift -add one or more element at the starting of the array and return new length of the array

// // let aar12=[21,43345,5657,7,8,7];
// // arr12.unshift(23,34)
// // console.log(aar12)


// //Slice- slice is uesd to copy or extract part of array . it does not change original array .return new array support negative indexing


// let arrslice =[1,2,3,4,5,6]
// // console.log(arrslice.slice(2,4)) //startindex and lastindex
// console.log(arrslice.slice(2))          //lastindex in not givem
// console.log("------")
// let arrsilcenewarr=arrslice.slice(-4)   //negative index
// console.log(arrsilcenewarr)
// console.log(arrslice)


// //splice- used to add , remove and replace element in an array , modify orgnial elemet ,support negative index , return remove elemet
//  //remove
// let arrsplice=[12,34,54,65,7,8878]
// let removeelearr=arrsplice.splice(1,4) //remove
// console.log(removeelearr);

// //add element
// arrsplice.splice(1,0,45);
// console.log(arrsplice)

// //replace
// arrsplice.splice(1,1,"Virat 18")
// console.log(arrsplice)


// //concat= concate is an Array method that combine two or more array ans return new array and does not change orignal array

// let firstArr=["Arsh"]
// let middArr=["kumar"] 
// let SecondArr=["Second"] 
// let newarr=firstArr.concat( middArr, SecondArr)  //fist way
// let secondway= firstArr.concat(middArr , 1, [" btec , Mba"] , SecondArr) //second  way
// console.log(secondway)
// console.log(newarr)   //print original array

// //join() - join is an array method that convert array into string using specified opertor .it does not change original array return string

// let newarr2=[" betch", "diploma" ,"MBA"]
// let newjoin=newarr2.join("-")  //we can chage the value inside the ("")
// console.log(newjoin)



//spreadoperator - spread operator is used to copy or extract part of array and return new array and does not change original array
// let arrspread=[1,2,3,4,5,6]
// let newarrspread=[...arrspread]  //copy array
// console.log(newarrspread) 

// //join () - join is a array method that convert array to string and return string
// let joinadd= arrspread.join("/")
// console.log(joinadd)

// //tostring- tostring is a array method that convert array to sting it return  new string and does change the original array

// let exam2=[12,23,546,5767]
// console.log(
//     exam2.toString()
// )
// //includes- check if value exits in an array or string  and return ture if value is exists otherwise false 

// let exam=[7,10,45,18 , 33 ]
// let serach=exam.includes(45 ,3)
// console.log(serach);



// //indexof- indexof is a array method that return the first index of the specified value in an array and return -1 if value is not found

// let exam3=[1,2,3,4,5,6,7,8,9]
// let indexof=exam3.indexOf(10)
// console.log(indexof)

// //lastindexof- lastindexof is a array method that return the last index of the specified value in an array and return -1 if value is not found

// let exma4=[1,2,3,4,5,6,7,8,,9,9,1]
// let lastindexof=exma4.lastIndexOf(1)
// console.log(lastindexof)

//find- find is a array method that return the first element in an array that satisfy the provided testing function and return undefined if no value is found


let arrfind=[14,245,453,454,534,634,765,3438,976]
let resultfind;
//using loop

for( let i = 0; i < arrfind.length; i++){
    if(arrfind[i]%2===0){
        resultfind=arrfind[i]
    }
}
// console.log(resultfind)

//using function 

function findelelement(num){
  if( num %2==0){
    return true
  }
  return false;
}
// let myfinde= arrfind.find(findelelement)
// console.log(myfinde)
 //fat arrow funciton
// let myfinde= arrfind.find(findelelement)
// console.log(myfinde)

let myfinde= arrfind.find( (num)=>{
  return  num %2===0;
})
console.log(myfinde)


//some-

let arrsome=[12,13,17,7,8,19]         
let resultsome=false;
for(let i =0; i< arrsome.length ; i++){
    if(arrsome[i] > 18){
       resultsome=true;
       break;
    }
    result=false;
}

console.log(resultsome)

console.log("output next method output")
//using method

let finalsome=arrsome.some((condtition)=>{
    return condtition >=18
})
console.log(finalsome)


//every()
let finalevery =arrsome.every((condtition)=>{
    console.log("value",condtition >=18)
    return condtition >=18
})
console.log(finalevery)