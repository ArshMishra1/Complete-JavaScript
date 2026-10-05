// //print 1 to 5 numbers using for loop
// for(let i=0 ;i<=5 ; i++){
//     console.log(i)
// }

// //sum ka loop
// let totalvalue=0
// for(let i =1 ; i<= 5 ; i++){
//     totalvalue = totalvalue +i
// }
// console.log(totalvalue)


// //for of loop - string and array

// let test="javaSCript";

// let len=0
// for( let val of test){
  
//     console.log(`val ${val}`)
//       len++    

// }
// console.log(len)

// // for(let i=0 ; i <= test.length; i++){
// //        console.log(i)
// // }

// //print all even number from 0 to 100;

// for(let i =0; i<=100; i++){
//  if(i %2==0){
//     console.log(i)
//  }
// }

// // let guessnumber=25;
// // for(let i=0 ; i <=guessnumber ; i++){
// //     let userask=Number(prompt())
// //     if(userask == guessnumber){
// //         console.log("you guess the write number")
// //     }else{
// //         console.log("you guess wrong number plasae try again")
// //     }
// // }

// let string="hello"
// let voiwel=0;
// let consonant=0;
// for( let val of string){
//    if(val == "a" || val=="e"  || val=="i"|| val=="o" || val=="u"){
//     console.log(`vowel ==${val}`)
//     voiwel++
//    }else{
//     console.log(`consonant ==${val}`)
//     consonant++
//    }
// }
// console.log(voiwel)
// console.log(consonant)


// //calculate sum of first  n number

// let sum=0
// for (let i=0 ;  i<=50; i++){
//     sum=sum+i
// }
// console.log(sum)

// //calculate sum of number from m to n

// let m=29;
// let n=40;
// let totalSum=0
// for (let i=m; i<=n ; i++){
//     totalSum=totalSum +i
// }
// console.log(` total sum value${totalSum}`)

// //print all odd number from 0 to n

// let nNumber=20;
// for(let i=0; i <=nNumber; i++){
//     if(i%2!==0){
//         console.log(`odd number ${i}`)
//     }
// }
// console.log()

// //simple Password checker(fixed attempts)
// let passwords="Arsh@12334";
// let attempts=3
// for(let i=0 ; i<=attempts; i++){
//     let userPassword=prompt()
//     if(userPassword===passwords){
//         console.log("you loging successfully")
//         break;
//     }else{
       
//         console.log(`Plasae try again ${attempts-1} change lelf`)

//     }
// }

// //build a simple text-based adventure game using for loop


// // 1 se 50 tak ke numbers mein kitne numbers 3 se divisible hain, ye count karo.

// let numberCOunt=0
// for(let i =0 ; i<=50; i++){
//      if(i%3==0){
//         numberCOunt++
//      }
// }
// console.log(`total number divisibel by 3 ${numberCOunt}`)

// // 1 se 50 tak ke numbers mein jo numbers 3 se divisible hain, unka total sum nikalo.

// let numbercount=0
// let totalsum=0
// for(let i =0 ; i<=50; i++){
//      if(i%3==0){
//         totalSum=totalSum+i
//         numberCount++

//      }
// }


// // 1 se 100 tak ke numbers mein:

// // kitne even numbers hain?
// // kitne odd numbers hain?
// // even numbers ka total sum kya hai?
// // odd numbers ka total sum kya hai?

// let totalevenNUmber=0;
// let totalevenNumberSum=0;
// let totalevenNumberodd=0;
// let totaloddNumber=0;
// for(let i=1; i<=100; i++){
//     if(i%2==0){
//         totalevenNUmber++;
//     totalevenNumberSum=totalevenNumberSum+i
//     }else{
//    totaloddNumber++;
//     totalevenNumberodd=totalevenNumberodd+i

//     }
// }
// console.log(totalevenNUmber)
// console.log(totalevenNumberSum)
// console.log(totalevenNumberodd)
// console.log(totaloddNumber)


// // 1 se 100 ke beech jo numbers 3 aur 5 dono se divisible hain, unka:/
// let totalcountji=0
// let sumtotal=0
// for(let i=0; i<=100; i++){
//     if( i%3==0 && i%5==0){
//        totalcountji++
//        sumtotal=sumtotal+i
//     }
// }
// console.log(totalcountji)
// console.log(sumtotal)

//next question

let Numberji = 58392;
let newNumber=String(Numberji)
let totalsum2=0;
for(let val of newNumber){
    let converter=Number(val)
      totalsum2=totalsum2+converter
    // totalsum2=converter=converter+converter
}
console.log(totalsum2)



//Question — Loop + Digits Loop ka use karke is number ka sabse bada digit find karo.

let numbej12=58382;
let numberstr=String(numbej12);
let largestNumber=0
for(let val of numberstr){
    if(largestNumber < Number(val)){
          largestNumber=val
    }
}
console.log(`largestnumber is ${largestNumber}`)

//small digit finde karo


let numberji3=58382;
let numberStr2=String(numberji3)
let smallestNumber=5;
for(let val of numberStr2){
    if(smallestNumber > Number(val)){
        smallestNumber=Number(val)
    }

}
console.log(`Small digit number ${smallestNumber}`)


//58392 mein kitne digits 5 se bade hain?



let numberji4=58392;
let str=String(numberji4)
let camperevalue=5
let totalsmallestNUmberby5=0;

for (let val of str){
    if( camperevalue < Number(val)){
        totalsmallestNUmberby5++
    }
}
console.log(`Total number greater than 5${totalsmallestNUmberby5}`)

// 🔥 Next Question — let number = 74835;

// Loop ka use karke count karo ki is number mein kitne digits 2 se bade aur 7 se chhote hain.

let number = 74835;
let strNumber=String(number)
let count=0

for(let val of strNumber){
  if( val>2 && val<7){
    count++
  }
}
console.log(count)


// Question-

// 3 se divisible digits ka count nikalo.
// Unhi digits ka sum nikalo.
let number5 = 74835;

let strNum=String(number5)
let totalCo=0;
let digitssum=0;
for (let val of strNum){
    if(Number(val)%3==0){
        totalCo++
        digitssum=digitssum+ Number(val)
    }
}
console.log(`total digits== ${totalCo}`)
console.log(`total digitssum ==${digitssum}`)

// Question--
// Count karo aur sum karo un digits ka jo 5 se greater hain.
let number6 = 58392;
let strnum1=String(number6);
let totalCounts=0;
let totalSumofdigit=0;
for (let val of strNumber){
    if(5 < Number(val)){
        totalCounts++
        totalSumofdigit=totalSumofdigit+ Number(val)
        
    }
}

console.log(totalCounts)
console.log(totalSumofdigit)


// . Count karo digits jo 5 se greater hain
// 2. Count karo digits jo 5 se less hain
// 3. Dono ka sum bhi nikalo
let number4 = 58392;
let strnum4=String(number4);
let Gcounter=0;
let Lcountet=0;
let Gdsum=0;
let Lsum=0

for (let val of strnum4){
 if( 5 <Number(val) ){
    Gcounter++
    Gdsum=Gdsum+ Number(val)
 }else{
    Lcountet++
    Lsum=Lsum+ Number(val)
 }
}
console.log(Gcounter)
console.log(Lcountet)
console.log(Gdsum)
console.log(Lsum)


//  Second largest digit find karo.

let number7= 583921;
let strnum7= String(number7);
let FirstlargestNumber=0
let secondlargestNumber=0
for(let val of strnum7){    
    if(FirstlargestNumber < Number(val)){
        secondlargestNumber=FirstlargestNumber
        FirstlargestNumber=Number(val)
    } else if( secondlargestNumber < Number(val)){
        secondlargestNumber= Number(val)
    }
}
console.log(`First largest Number${FirstlargestNumber}`)
console.log(`Second largest Number${secondlargestNumber}`)




let number8 = 748352;
let strnum8=String(number8)
let Flargest=0;
let Slargest=0;
for(let val of strnum8){
    if( Flargest < Number(val)){
        Slargest=Flargest;
        Flargest=Number(val)
    }else if( Slargest < Number(val)){
        Slargest=Number(val)
    }}

console.log(`First largest Number 2==${Flargest}`)
console.log(`Second largest Number 2===${Slargest}`)



//second small number


let number10= 947263;
let numberStr3=String(number10);
let FirstLagest=9;
let SecondLarges=4;
 for( let val of numberStr3){
    if( FirstLagest > Number(val)){
        SecondLarges=FirstLagest;
        FirstLagest= Number(val);
    }else if(SecondLarges >Number(val)){
            SecondLarges=Number(val);
    }
}


console.log(`Largest  2nd Number===${SecondLarges}`);



// 🔥 Level 5 — First Question
// let number = 583921;

// Loop use karke:

// 1. Largest digit find karo
// 2. Smallest digit find karo
// 3. Largest + Smallest ka sum nikalo

let number11 = 583921; 

let numstr=String(number11);
let largestdigit=0;
let Smalldigitnum=9;
let totalL=0;
let totalS=0
for ( let val of numstr){
    if( largestdigit < Number(val)){
            largestdigit=Number(val)
            totalL++
    }if(Smalldigitnum >Number(val)){
         Smalldigitnum=Number(val)
         totalS++
    }
    
}
console.log(largestdigit)
console.log(Smalldigitnum)
console.log(totalL)
console.log(totalS)

 
