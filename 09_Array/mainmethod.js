//reverse 
let arr1=[12,345,4657,6887,979,0]
arr1.reverse()
console.log(arr1 ,"reverse end")

//sort
let arr2=[12,345,4657,6887,979,0]
arr2.sort()                         //first way
console.log(arr2,"default sort behaviour")


let arr3=[30, 10, 50, 20, 40];
let arr3reult=arr3.sort((a,b)=>{
    return a-b
})
console.log("Original array arr3",arr3)
console.log(" arr3result",arr3reult )


//map - 

let arr4=[12,34,54,66,78];
let arrmap=arr4.map((element, index, array)=>{
    return element *2
})
console.log(arrmap)

//do map using loop
let arrloopresult;
for(let i =0 ; i < arrmap.length ; i++){
    // console.log(arrmap[i] *2)
    // console.log("-----")
    arrloopresult =arrmap[i] *2;
}
console.log(arrloopresult)

//Reduces

let arrReduces=[12,34,5,545,45]
let totalReuslt=0;
for( let i =0; i<arrReduces.length ; i++){
  totalReuslt= totalReuslt + arrReduces[i]
}
console.log(totalReuslt)