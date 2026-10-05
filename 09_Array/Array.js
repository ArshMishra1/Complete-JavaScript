// let arr=[ "Arsh" , 3453, ()=>{return hello}, true , false]
// let child =arr[1];   // access by virable 
// let child =arr.length-1; 
// console.log(arr[1])   //direct access
// console.log(child)

//update
// let arr2=[ "Arsh" , 3453, true , false]
// arr2[1]=4343;
// arr2[5]="mishra"
// console.log(arr2)

//length
// let arr3=[ "Arsh" , 3453, true , false]
// console.log(arr3)
// console.log(arr3[arr3.length-1])

// method-push - add new element at the inside the array
//  let arrPush=[1,2,3,4,5,6]
//  arrPush.push( 7 );   //single
// console.log( arrPush.push( 7 ,8)); //multiple and  return new length of the array
//  console.log(arrPush); 

//pop -remove the last element from the array 
// let arrPop=[11,12,13,14]
// arrPop.pop()             //14
// let result= arrPop.pop()  //14
// console.log(result) 
// console.log(arrPop.pop())   //14
// console.log(arrPop)


//shift - remove the first element of an array

let shift=[1,2334,3434,34]
shift.shift();  
let shiftresult=shift.shift()
// console.log(shift.shift())//print remove element
console.log(shiftresult)   //print remove element
console.log(shift)   //print full array





let marks = [90,80,70];

let resultmarks=marks.join(",");
console.log( typeof resultmarks)


