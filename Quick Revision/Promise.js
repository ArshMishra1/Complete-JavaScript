// let api=fetch("https://dummyjson.com/products").then((Response)=>{
//      return Response.json()
// }).then((data)=>{
//     console.log(data)
// }).catch((error)=>{
//     console.log(error)
// }).finally(()=>{
//     console.log("run always bro after than and catch")
// })



// let api=fetch("https://dummyjson.com/products").then((Response)=>{
//     if(!Response.ok){
//         throw new Error(" 404 data is Not Found")
//     }
//      return Response.json()
// }).then((data)=>{
//     let productcart= document.querySelector(".ProductCart")
//     let reating=document.querySelector(".reating")
  
//     console.log(data)
//    for(let i=0; i<data.products.length ; i++){

//     let currentProduct=data.products[i]
//     let price=document.createElement('h3')
//     price.textContent=currentProduct.price
//      let heading=document.createElement('h1')
//     heading.textContent = currentProduct.title;
//     let img=document.createElement('img')
//     img.src=currentProduct.images
//     productcart.append(heading)
//     productcart.append(img)
//     productcart.append(price)

//    }
    
// }).catch((error)=>{
//     console.log(error)
// }).finally(()=>{
//     console.log("run always bro after than and catch")
// })



//aycn and await


 async function product(){
    try{
        let response= await fetch("https://dummyjson.com/products")
        let data=  await response.json()
        let procutcart=document.querySelector(".ProductCart")
        for(let i=0 ; i<data.products.length ; i++){
            let currentproduct=data.products[i]
    

        }
    
       

    }catch(err){
        console.log(err);

    }
}
product()