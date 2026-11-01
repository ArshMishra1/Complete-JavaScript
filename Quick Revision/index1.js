// //!Synchronous 
// console.log("Hello world !!")
// console.log("Hello world !!")
// console.log("Hello world !!")
// console.log("Hello world !!")

//  //!ASynchronous 
//  console.log("1 Code")

// setTimeout(()=>{
//     console.log("3 Code")
//  },2000)

// console.log("2 Code")
 
// // ! Timer Function
// //!SetTimeout
// setTimeout(()=>{
//     console.log("Hello I am a Timer SetTime Out Function")
// },2000)
// !setinterval


// let timeID=setInterval(()=>{
//      console.log("Hello I am a Timer Setinterval Out Function")
// },2000)

// clearInterval(timeID)


//!Promise
//!how to create OWn promise

// const OwnPromise= new Promise((resolve , reject)=>{
//   let task=true
//   if(task){
//     resolve("Task is  resolve successfully")
//   }else{
//     reject(" Task is Failed")
//   }
// }).then((Response)=>{
//     console.log(Response)
// }).catch((error)=>{
//     console.log(error)
// })

// //!throttling 
// // !debouncing


// //!call apply bind

// //!call

// let prooduct1={
//     name:"Laptop",
//     price:47573
// }

// let product2={
//     name:"Mobile",
//     price:4589
// }

// function add(storeage){
//  console.log(this.name)
//  console.log(this.price)
//  console.log(storeage)
 
// }
//  let showinfor=add.bind(prooduct1 ,["storage :3042"])
//  setTimeout(() => {
//     showinfor
//  }, 2000);



//!This keyword

// let userObj={
//     name:"arsh ",
//     lastName:"Mishra",
//     data: function(){
//          console.log(`userFull name ${this.name}`)
//     }
 
// }
// console.log(userObj.data())

//!Rest operator
//!Funcuntion 
// function user(...Rest){
//     console.log(Rest    )
// }
// user("data1" ,"data2" ,"data3" ,"data4")

//!distructure
// let arr1=["A","B","C",1,2,3,4]
// let [A,B ,C ,...Rest]=arr1
// console.log(A)
// console.log(B)
// console.log(C)
// console.log(Rest)

//!spread operator
  // let arr3=[234,575]
// let arr2=[...arr1 ,...arr3]
// console.log(arr2)

//!shollow Copy
//!deep Copy=

// let arr4=structuredClone(arr3)
// console.log(arr4)


//!Object -

// let userObj={
//   name:"user1",
//   laslname:"userLastName",
// "collage address":"Aktu univercity",
//   address:()=>{
//     console.log("Local adrress is sultanputr");
//   },
//   currentlocation:{
//     City:"Nodia",
//     state:"UP",
//      hostel:"Ratiram places"
    
//   }

// }

//delete
// delete userObj.currentlocation
// console.log(userObj)


// let dotnotation=userObj.name
// console.log(dotnotation)

// let backetNotation=userObj["collage address"]
// console.log(backetNotation,"backet Notation")

// console.log("try to access function",userObj.address())

// console.log("try to access nested Object",userObj.currentlocation.City)


// //!object key 
// console.log(Object.keys(userObj))
// //!object value
// console.log(Object.values(userObj))
// //!object entires
// console.log(Object.entries(userObj))

//!Object assign
// let newObject={}
// Object.assign(newObject ,userObj)
// console.log(newObject)


//!shollowCopy

// let newuserOBJ={...userObj}
// console.log(newuserOBJ)


//!DeepCopy

// let newuserData=structuredClone(userObj)
// console.log(newuserData,"Deep copy")






//!Array-
//!index-   lastindex=lenght-1 , undefinde
//!Length- 
let arr=[1,2,3,4,"hello"]
console.log(arr[arr.length-1],"Last index")
console.log(arr.length-1)
console.log(arr[1])
console.log(arr.length)
arr[1]=7
console.log(arr)

//!push
let arr2=[45,18,7,33]
arr2.push(10)
console.log(arr2)
//!pop
let value=arr2.pop()
console.log(value)
//!shift

//!unshift