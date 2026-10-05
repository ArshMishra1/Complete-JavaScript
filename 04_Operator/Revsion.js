// //opertor
// //arthimatic operator
// //addition-
// let a=10;
// let b=20;
// let c= a+b;
// console.log(c)


// //subtraction
// let d=a-b;
// console.log(d)

// //multiplaying
// let e=a*b;
// console.log(e)

// //expontential or Power

// let f= a**2;
// console.log(f)

// //devision

// let g=a/b;
// console.log(g)

// //modules
// let h=a%b;
// console.log(h)


// let a = 5;
// let b = a++;

// console.log(a);
// console.log(b);

// let a = 5;
// let b = ++a;

// console.log(a);
// console.log(b);


//logical opertors

// 🔥 Coding Q1 — Login Check

// Ek user tabhi login kar sakta hai jab:

// username correct ho AND
// password correct ho

// Code complete karo:
//  let userName ="Arsh"
//  let passWords="Arsh@1234"

//  if( userName==="Arsh" && passWords==="Arsh@1234"){
//     console.log( "You loging Successfull")
//  }else{
//     console.log("plasase Enter correct passwords and  userName")
//  }

//  //Coding Q2 — Even AND Positive
// // Check karo number even bhi ho aur positive 

// let number=12;

// if( number % 2 ===0 && number >0){
//     console.log( "Yes Number is even and Positive")
// }
// else{
//     console.log( "NO Number is odd  and negaitve")

// }


// // 🔥 Q3 — OR operator

// // User ko access mile agar:

// // age >= 18 OR
// // hasPermission === true

// let age=18;
// let hasPermission = true
// if(age>=18 ||  hasPermission  ){
//     console.log("You have access ")
// }else{
//     console.log("You have no access ")

// }


// // Ek website par discount tab milega jab:
// // customer ki age 18 ya usse zyada ho AND
// // customer ke paas membership ho.

// let customerAge= 18;
// let membership= true

// if(customerAge >= 18 && membership){
//     console.log("customer get discount")
// }else{
//     console.log("customer does not get discount")
// }



// // User ko premium content access milega 

// // user logged in hai
// // ya user ke paas admin role hai

// let userlogged= true
// let userRole= admin 
// if(userlogged  && userRole === admin){
//     console.log("You can se Premium content ")
// }else{
//     console.log("plasase purchase subscription and than see Premium content")
// }

// // Ek e-commerce website par user ko checkout karne ki permission tab milegi jab:

// // Cart empty nahi hai
// // User logged in hai
// // Aur user blocked nahi hai

// let card= "Product"
// let user= "logged"
// let userStatus= "Unblocked"
// if(
//      card !="" &&  user==="logged"   &&  userStatus=== "Unblocked"
// ){
//     console.log(" checkout karne ki permission")
// }else{
//     console.log(" checkout karne ki permission nahi hai")

// }

// // User ko free access milega agar:

// // user admin hai, OR
// // user ke paas premium subscription hai AND account blocked nahi hai.


// let userRoles= "admin"
// let premiumsubscription= true
// let accountstatus="unblocked"

// if( user==="admin" || premiumsubscription  && accountstatus ==="unblocked"){
//      console.log("user have full access")
// }else{
//     console.log("does not have full access")
// }

// //all over question


// let user1=Number(prompt());

//  let result =user1 %2==0 ? "yes number is even" : "Number is odd"
//  console.log(result)

//  //find value
//  let x=5
//  x+=3    //8
//  x-=2     //3
//  x*=4    //20
//  x/=6    
//  x%=3    


// let num1=2
// let num2=3


// if(num1 > num2){
//     console.log(`${num1} is greater value `)
// }
// else{
//     console.log(`${num2} is greater value `)
    
// }

// let result2= num1 > num2 ? `${num1} is greater value ` : `${num2} is greater value `
// console.log(result2)


// let num1=2
// let num2=3
// let num3=4


// if(num1 > num2){
//     console.log(`${num1} is greater value `)
// }
// else if( num2 > num3){
//     console.log(`${num2} is greater value `)
    
// }else{
//      console.log(`${num3} is greater value `)
// }

// let result2= num1 > num2 ? `${num1} is greater value ` : `${num2} is greater value `
// console.log(result2)



// let num1=2
// let num2=3
// let num3=4


// let reuslt= num1 > num2 && num1 > num3 ? num1 : num2 > num3 ? num2 : num3
// console.log(result)


// let num1 = 10;
// let num2 = 30;
// let num3 = 20;
// let num4 = 40;

// let result3= num1 > num2 && num1 > num3 &&  num1> num4 ? num1 : num2 > num3  && num2 > num4 ? num2 : num3 > num4 ? num3 : num4
// console.log(result3)



// let dbemail=` arshmishra986@gmail.com`
// let bdpassword= "Arsh@1234"

// let useremail=prompt()
// let userPassword=prompt()

// let result4= dbemail===useremail && bdpassword === userPassword ? "Your are logged in successfully" : "invalid email and password plasase"

// console.log(result)
 x=30;
console.log( `  value x1 ${x}`);

var x=10;
console.log( `  value x2 ${x}`);