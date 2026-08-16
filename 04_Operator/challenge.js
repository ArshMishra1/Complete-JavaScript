// On a shopping website, calculate the total cost of a product when given the price per item (price = 150) and the quantity (quantity = 3).
// Also, calculate a 10% discount on the total cost and display the discounted price.

// let ProductPrice=150;
// let ProductQuantity=3;
// let totolPrice= ProductPrice * ProductQuantity;
// console.log(totolPrice)
//  let discount=  totolPrice *0.10;
// let totalDiscountPrice= totolPrice -discount;
// console.log(totalDiscountPrice)

 //On a booking website, check if the user's age is valid for booking:
// Age should be at least 18.
// Write a condition to check and display a message: "Eligible for booking" if the user is 18 or older. "Not eligible for booking" otherwise.

// let userage= 19;
// let age=( userage >=18) ?" Eligible  for booking" : " Not Eligible for booking"
// console.log(age)


// On a login page, verify the user's credentials: Check if username is not empty AND password is not empty (&& operator).
// If either is empty, display an error message: "Both fields are required."

// let username="arsh mishra";
// let password="3382475";

// let result=( username ==""  || password =="") ?  "SucessFully Login" :"Both fields are required" ; 
// console.log(result)



// 1. Get user to input two number using prompt and print their possible arithmetic results.
// let firstNumber = Number(prompt("Enter First Number"));
// let secondNumber = Number(prompt("Enter Second Number"));

// let possibleOperation1= firstNumber + secondNumber
// let possibleOperation2= firstNumber - secondNumber
// let possibleOperation3= firstNumber * secondNumber
// let possibleOperation4= firstNumber / secondNumber
// let possibleOperation5= firstNumber % secondNumber

// console.log(possibleOperation1)
// console.log(possibleOperation2)
// console.log(possibleOperation3)
// console.log(possibleOperation4)
// console.log(possibleOperation5)


//3. Get user to input a number using prompt and check whether even or odd using ternary operator.


// let userInput=Number(prompt("Enter  Number"));

// let checking =( userInput%2==0)  ? " Enven": "odd Number";
// console.log(checking)

// 4. What is the final value of x?
// let x=5;
// x+=3;    //output 8
// x-=2;     //output 3
// x*=4;    //output 20
// x/=6;    //output 1
// x%=3;    //output 1


// 5. Check if a number is within a range between 10 and 20 (inclusive).

// let  number=23;
// let result= ( number >=10 && number <=20 ) ? "Yes " : "NO";
// console.log(result)

// 6. Write a program to find the largest number between 3 numbers using ternary operator.

let firstNumber=2;
let secondNumber=3;
let thirdNUmber=23;


let result= ((( firstNumber > secondNumber)  ? firstNumber : secondNumber  )((secondNumber >thirdNUmber) ? secondNumber : thirdNUmber )((thirdNUmber >firstNumber) ? thirdNUmber : firstNumber));
console.log(result)

