//how to create object
let a={
    name:"Arsh",
     Middle:"Mishra",
    "middle of user":"backet Mishra"
}
//how to access  1 using dot notion 2 .braket notion
console.log(a.Middle)
console.log(a["middle of user"])

//curd
//create
a.phone=83956845968;
//how to update properties
a.name="pinku"
//read 
console.log(a.phone)
//delete
delete a.Middle
console.log(a)


//need only key

console.log(Object.keys(a))

//need only vlaue

console.log(Object.values(a))

//need both than use

console.log(Object.entries(a))


//loop

for(let keys in a){
    console.log(keys , a[keys])
}   


//distrucuting

const {name ,Middle}=a
console.log(name)
console.log(Middle)


//

// let user={
//     name:"rhoit",
//     middle:"sharma",
//     age:39,
//     addreess : function(){
//              console.log("best player hai bro")
//     }

// }
// console.log(user.addreess())

//nested object

let user={
    name:"rhoit",
    middle:"sharma",
    age:39,
    addreess :{
        ipl:"MI",
        countryTeam:"IND",
        state:"Mumbai"
    } 
}
console.log(user.addreess.ipl)

//SHOWLLLOCOPY
let user2={...user}
console.log(user2)

//DEEP COPY

let user3=structuredClone(user)
console.log(user3)

//array of object

let students = [
    {
        name: "Arsh",
        age: 22
    },
    {
        name: "Rahul",
        age: 21
    }
];


console.log(students)
console.log(students[0].name)
console.log(students[1].age)

students.map((ele)=>{
 console.log(ele.name)
 console.log(ele.age)
})