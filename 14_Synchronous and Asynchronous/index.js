// //js--synchronous and single thread
// //example
// console.log("A");


// // let timerid=setInterval(()=>{
// //     console.log("set time out")
// // },3000)
// // setTimeout(timerid)

// // let timerid=setInterval(()=>{
// //     console.log("setinterval br-")
// // },1000)
// // clearInterval(timerid)

// console.log("B");


let heading=document.querySelector("h1");
let btn=document.querySelector("button");

let updaterbro=function(){
     heading.innerText="Time I am not give up bro"
}
let changeme=setTimeout(updaterbro,2000)

btn.addEventListener("click" ,function(){
 clearIntervalu(changeme)
})