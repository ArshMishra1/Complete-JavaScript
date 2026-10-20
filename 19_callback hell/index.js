//callback

function user1(para){
  para( 10 , 11)
}
function user2( a, b){
 console.log("hello i am callback" ,a ,b)
}

user1(user2)

//2.zemooto    synchronouse

let payment=false
function userOrder(callback){  
    if(payment){
    callback()
    }else{
        console.log("first payment is not done yet")
    }
    
}

function orderconfirm(){
    console.log("You order successfully placed")
}

userOrder(orderconfirm)



//asynchroous


let payment2=true;

function payment3(callback){

    setTimeout(() => {
        if(payment2){
            callback()
        }else{
            console.log("Your order is confirme plasese pay payment first ")
        }
    }, 2000);
}

function ordernotifaction(callback){
    console.log("You payment is successfully and order is confirem")
    setTimeout(()=>{
        callback()
    })
}

function orderdeatil(){
       console.log("roti , daal ,coldrink ")
}

payment3(()=>{
    ordernotifaction(()=>{
        orderdeatil()
    })
})