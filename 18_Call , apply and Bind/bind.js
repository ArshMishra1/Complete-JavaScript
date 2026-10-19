//bind

let userloging={
    name:"Arsh"
}

let userloging2={
    name:"harsh"
}

function userinfo(message){
    console.log(this.name , message)
}

let showingmessage=userinfo.bind(userloging ,"Welcome back")

setTimeout( showingmessage ,2000)
