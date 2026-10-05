// //Print number from 1 to 10 using a for loop

// for(let i=1 ; i<21; i++){
//     console.log(i)
// }

// console.log("next question")
// //print number form 10 to 1 using a while loop.
// let i =10;
// while(i> 0){
//     console.log(i)
//     i--;
// }
// console.log("next question3")

// //print even number form 1 to 20 using a for loop.
// for (let i = 1 ; i<21; i++){
//     if(i%2==0){
//         console.log(i)
//     }
// }



//Print odd number form 1 to  25 using a while looop

// let i=1;
// while(i<16){
//     if(i%2!==0){
//     console.log(i)}
//         i++;
// }


//Print the multiplication table of 5(i .e , 5x1 =5 5x1=5)

// for(let i=1 ; i<11; i++){
//  let table=i*5;
//  console.log(table)
// }

//find the sum of number from 1 to 100 using loop
// let sum=0
// for(let i =1; i<101; i++){
//  sum=sum+i
// }
// console.log(sum)

//print all number between 1 to 50 that are divisible by 3

// for(let i=1; i<51; i++){
// if(i%3===0){
// console.log(i)
// }
// }

//ask the user for number and print whether numbmer from 1 to that is even or add
// let userval=prompt("Enter your Number")

// for(let i =i ; i<=userval; i++){
//     if(i%2===0){
//         console.log(i)
//     }else{
//         console.log(i)
//     }
// }

//Count  how may number between 1 to 100 are divisible by both 3 and 5

// for(let i =1 ; i<101 ; i++){
//     if( n%2===0 && n%5===0){
//         console.log(i)
//     }
// }

//Stop at first multiple of 7   //!question nahi solve hua logic nahi kasie

// for(let i =1 ; i<101; i++){
//     if(i%7===0){
//         break;
//     }
//   console.log(i)
// }


//write a loop form 1 to 100 that 
    //   prints each number
    //.stops completely when it finds the first number divisivbel by 7


// for(let i =1 ; i<101; i++){
//     console.log(i); 
//     if(i%7===0){
//         break
//     }
// }

//write a loop from 1 to 20 that :
//skip numbers divisivble by 3
//prints all other

// for(let i =1; i<=20; i++){
//       if(i%3===0){
//         continue;
//       }
//       console.log(i)
// }

//wrtie a loop from 1 to 100 that;
    // print only 5 odd Number
    // then stops the loop

// const count=0
// for(let i =1 ; i<=100; i++){
//   if( i % 2 !==0){
//     count++
//     console.log(i)
//   }
//  if( count===5) break;
// } 


// // Print numbers from 10 to 1.
// for (let i = 10; i>0 ; i--){
//    console.log( i)
// }
// Sum of 1 to 10
//  let sum=0;
//  for(let i =1 ; i<11; i++){
//     if(i%2!==0){
//      sum=sum +i
//     }
//  }
//  console.log(sum)

//  Sum of even numbers (1–20)
// Q10 – Count numbers from 1 to 100
// let count=0;
// for (let i =1; i<101 ; i++){
//     count++

// }

// Print numbers from 1 to 30.

// Lekin 3 se divisible numbers skip karne hain using continue.

// for(let i =1; i<31; i++){
//     if( i%3===0){
//         continue;
//     }
//     console.log(i)
// }
// Print numbers from 1 to 30.

// Jab 17 aaye to break kar do.

// for(let i=1; i<31; i++){
//     console.log(i)
//     if(i===17) break;
// }

// // Print square of numbers from 1 to 10.

// for( let i=1; i<11;i++){
//     console.log(i  ** 3)
// }

for (let i=50; i>0 ; i-=5){
    console.log(i)
}