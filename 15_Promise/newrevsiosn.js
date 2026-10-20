//using than catch finally

// const  api= fetch("https://dummyjson.com/products").then((response)=>{
//     if(!response.ok){
//         throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     return response.json()
// }).then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err)
// }).finally(()=>{
//     console.log("hello")
// })


async function userdata(){
    try{
        let resopnse=  await fetch("https://dummyjson.com/products")
        if(!resopnse.ok){
            throw new  Error("error is ")
        }
         let data= await  resopnse.json()
         console.log(data)

    }catch(error){
        console.log(error)
    }


    
}
userdata(
    
)