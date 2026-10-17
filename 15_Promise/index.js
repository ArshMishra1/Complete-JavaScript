// //promises - has three stage 
// // 1.pending 2.fullfiled 3.reject 
// //we use promise to handle asynchronous operation


// let api=fetch("https://api.github.com/users")
// .then((Response)=>{
//      return Response.json()
// }).then((data)=>{
//     console.log(data[0])
//     for(let i=0; i<data.length ;i++){
//     let div=document.querySelector("div")
//   let name=document.querySelector("h1");
//   name.textContent=data[i].login

//   let images=document.createElement("img")
//   images.src=data[i].avatar_url

//  div.append(images)
// }

     
// })


 async function  githubuser(){
     try{
          let userinfo= await fetch("https://api.github.com/users")
           if(!userinfo.ok){
               throw new Error(" 404 not Found")
           }
          let data= await userinfo.json()
          let name= document.querySelector("h1");
          name.textContent=data[0].login

     }catch(error){
          console.log(error)
     }

      
}
githubuser()