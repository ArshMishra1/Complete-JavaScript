//                     //!Accessing and Updating

// // Create an array:
// // Delhi Mumbai Lucknow Print only Lucknow.
//  let arr=["Delhi" ,"Mumbai" , "Lucknow"]
//  console.log(arr[2])

// // Create an array of numbers.
// // Print only the first element.
// let arrnum=[12,34,45,45]
// console.log(arrnum[0])


// // Create array: 
// // HTML CSS JavaScript CSS → Tailwind CSS

// // Print the complete array.
// let arr3=["HTML" ,"CSS" ,"JavaScript"];
// arr3[1]="Tailwind CSS"
// console.log(arr3)


// // Create:
// // Apple Banana Orange
// // Update:
// // Banana → Mango
// // Print only Mango
// // Print complete array
// let fruits=["Apple","Banana","Orange"] 
// fruits[1]="Mango";
// console.log(fruits[1]);
// console.log(fruits)


// // Create an array of 5 cities.
// // Update the last city.
// // Print the updated array.
//  let city=["mumbai" ,"Lucknow" ,"Sultanpur" ,"partapgang" , "amithe"]
//  city[4]="UP";
//  console.log(city);


// // Create an array of 5 students.
// // Without changing any other element:

// // Update the 3rd student
// // Print the 2nd student
// // Print the last student
// // Print the whole array

// let stu=["Student1","Student2","Student3","Student4", "Student5"]
// stu[4]="UpdatedStudent";
// console.log(stu[2]);
// console.log(stu[1])
// console.log(stu)

// // Create an array of 5 fruits.
// // Print only the total number of fruits using .length.

// let fruits1=["Apple","Banana","Orange" ,"mango","Grape"] 
// console.log(fruits1)

// //Create an array of 6 cities.
// // Print: Total Cities: 6 using .length.
//  let city2=["mumbai" ,"Lucknow" ,"Sultanpur" ,"partapgang" , "amithe" ,"up"]
// console.log(`Total Cities :${city2.length}`)

// // Create this array:
// // HTML CSS JavaScript React Node
// // Print:First element, Last element (using .length), Total elements

// let web=["HTML" ,"CSS" ,"JavaScript" ,"React" ,"Node"]
// console.log(web[0])
// console.log(arr[arr.length-1])
// console.log(arr.length)

// // Create an array of 8 numbers.

// // Print only the last number using .length.❌ Don't hardcode the index like arr[7]. ✅ Use .length.
// let arrnum=[1,2,3,4,5,6,7,8]
// console.log(arrnum[arrnum.length-7])  


// // Create an array of 10 student names.

// // Print:Total Students ,First Student ,Last Student (using .length)Last Index
// // 💡 Hint:Last Index = arr.length - 1

// let students= ["A" , "B" ,"C" ,"D" ,"E" ,"F" ,"G" ,"H","F" ,"I"];
// console.log(students.length);
// console.log(students[students.length-7]);
// console.log(students[students.length])

// // Create:
// // Apple Banana Orange
// // Remove the last fruit. Print the updated array.

// let Qpop=[ "Apple" ,"Banana","Orange"];
// Qpop.pop();
// console.log(Qpop)


// // Create:
// // 10 20 30 40

// // Store the removed element in a variable.
// // Print: Removed Element Updated Array

// let Qpop2=[10 ,20 ,30];
// let resultpop= Qpop2.pop();
// console.log(Qpop2)

// // Create:
// // HTML CSS JavaScript React Remove the last element.

// // Print:
// // Last removed element Total remaining elements
// let Qpop3=["HTML" ,"CSS" , "javaScript"]
// console.log(Qpop3.pop())
// console.log(Qpop3)

// // Create an array of 5 students.
// // Remove the last student.
// // Print:Updated array Total students

// let stud=["A" ,"B" ,"C" ,"D" ,"E"] 
// stud.pop()
// console.log(stud.length)

// // Create an array of 6 products.
// // Remove the last 2 products using pop().
// // Print: Removed products Updated array Total products

// let product=[1,2,3,4,5,6]
// product.pop()
// product.pop()
// console.log(product)

// // ⭐ Level 1
// // Create:
// //Apple Banana Orange
// // Remove the first fruit. Print the updated array.
// let shfitquestion =["Apple" ,"Banana" ,"Orange"];
// shfitquestion.shift();
// console.log(shfitquestion)

// // ⭐⭐ Level 2
// // Create: 10 20 30 40
// // Store the removed element in a variable.
// // Print:
// // Removed Element
// // Updated Array
// let shiftquestion1=[10 ,20, 30 ,40]
// let shiftresult2=shiftquestion1.shift()
// console.log(shiftresult2)
// console.log(shiftquestion1)


// // ⭐⭐⭐ Level 3
// // Create: HTML CSS JavaScript React
// // Remove the first element.
// // Print:
// // First removed element
// // Total remaining elements
// let shiftquestion3=[ "HTML", "CSS", "JavaScript" ,"React"]
// console.log(shiftquestion3.shift())
// console.log(shiftquestion3)

// // ⭐⭐⭐⭐ Level 4
// // Create an array of 5 students.
// // Remove the first student.
// // Print:
// // Updated array
// // Total students
// let shiftquestion4=["A" ,"B" ,"C", "D" ,"E"]
// shiftquestion4.shift()
// console.log(shiftquestion4)
// console.log(shiftquestion4.length)

// // ⭐⭐⭐⭐⭐ Level 5
// // Create an array of 6 products.
// // Remove the first 2 products using shift().
// // Print:
// // Removed Product 1
// // Removed Product 2
// // Updated Array
// // Total Products
// let shiftQuestion5=[1,2,3,4,56,6];
// let fitstproducts1=shiftQuestion5.shift()
// let secondproducts2=shiftQuestion5.shift()
// console.log(fitstproducts1)
// console.log(fitstproducts2)
// console.log(shiftQuestion5.length)


// let arr = ["Apple","Banana","Orange"];
// arr.includes("Orange")
// console.log(arr)


//question 1   
let studenetNumber=[23,35,34,45,56]
let avg=studenetNumber.reduce((a,b)=>{
    return a +b
})
let avaerage= avg/studenetNumber.length
console.log(avaerage)

