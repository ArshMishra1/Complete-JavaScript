// how to  create own promise 
//we can careate our promise using new promise constructor 
//it take two parameter resolve and reject 
//we use resolve  when task is succesfull 
//we use reject when task is fail


let ownPromise= new Promise((resolve , reject)=>{
    let task=false;
    if(task){
        resolve("Task is complete")
    }else{
        reject("task is fail")
    }
})
ownPromise.then((response)=>{
    console.log(response)
}).catch((error)=>{
    console.log(error)
})