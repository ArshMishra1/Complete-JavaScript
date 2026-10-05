//question 1-
let person = {
    name: "Ram",
    age: "34",
    city: "ayodhya"
}
person.email = "ram14@gmail.com"
delete person.city
console.log(person)

//questin 2-
let personDeatil = {
    firstName: "Arsh",
    middleName: "Kumar",
    LastName: "Mishra"
}
// console.log(Object.values(personDeatil))
function detail(obj3) {
    let fullname = ` ${obj3.firstName} ${obj3.middleName} ${obj3.LastName} `
    return fullname
}
let fulldetail = detail(personDeatil);
console.log(fulldetail)

//Question 3 
let thirdQuestion=(obj)=>{
   let num=Object.entries(obj)
   return num.length
}   
let thirdQuestioneAns= thirdQuestion(person);
console.log(thirdQuestioneAns)


//question 4

const user=[
    {name:"Alice",role :"admin"},
    {name:"Bob" ,role:"user"},
    {name:"Charlie" ,role: "admin"}
]
 
let userfinal=user.filter((user)=>{
 return  user.role==="admin"
  })
  console.log(userfinal)


  //question 5

  const products=[
    {id: 1, name: "Iphone 14"},
    {id: 2, name: "Samsung Galaxy 14"},
    {id: 3, name: "Google Pixel"}
    ];

    function serchProduct( products , serachkeyword ){
     let filterarray=products.filter((products )=>{
        return products.name.toLowerCase() ===serachkeyword.toLowerCase() 
     })
     console.log(filterarray)
    }
    serchProduct(products , "Iphone 14")



    //question-6

    const comments=[
        { postId:1 , text: "Great post!"},
        { postId:2 , text: "Thanks"},
        { postId:1 , text: "Very helpful"},
    ]


    function groupBypost(comments){

        let group={}
        Object.as
        console.log(group)
    }
    groupBypost(comments)