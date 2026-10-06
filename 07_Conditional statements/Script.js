//Normal
// function getGrade(score){
//     if(score >= 90 && score <=100 ){
//         return "A"
//     }
//     else  if(score >= 80 && score <=89 ){
//         return "b"
//     }
//     else if(score >= 80 && score <=89 ){
//         return "c"
//     }
//       else if(score >= 70 && score <=79 ){
//         return "D"
//     }
//     else if(score >= 60 && score <=69 ){
//         return "E"
//     }
//     else if(score >= 50 && score <=59 ){
//         return "F"
//     }
//     else{
//         return "Fail"
//     }
// }
// let reuslt =getGrade(89)
// console.log(reuslt)


//early return

// function getGrade(score){
//     if(score >= 90 && score <=100 )
//         return "A"
//       if(score >= 80 && score <=89 )
//         return "b"
//      if(score >= 80 && score <=89 )
//         return "c"
//        if(score >= 70 && score <=79 )
//         return "D"
//      if(score >= 60 && score <=69 )
//         return "E"
//      if(score >= 50 && score <=59 )
//         return "F"
//         return "Fail"
    
// }
// let reuslt =getGrade(89)
// console.log(reuslt)


// //rock paper -scissors logic
// let user1 = "Rock";
// let user2 = "Scissors"; // Isko tum "Computer" bhi bol sakte ho

// // 1. Tie condition sabse pehle
// if (user1 === user2) {
//     console.log("Tie");
// }
// // 2. User1 ke winning conditions
// else if (user1 === "Rock" && user2 === "Scissors") {
//     console.log("Rock win");
// }
// else if (user1 === "Scissors" && user2 === "Paper") {
//     console.log("Scissor win");
// }
// else if (user1 === "Paper" && user2 === "Rock") {
//     console.log("Paper win");
// }
// // 3. Agar upar me se kuch nahi hua, toh user2 (computer) jeetega
// else if (user2 === "Rock" && user1 === "Scissors") {
//     console.log("Rock win");
// }
// else if (user2 === "Scissors" && user1 === "Paper") {
//     console.log("Scissor win");
// }
// else if (user2 === "Paper" && user1 === "Rock") {
//     console.log("Paper win");
// }
