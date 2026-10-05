let value=document.querySelector('p')

let add=document.querySelector("#add")
let Delete=document.querySelector("#Dee")
let countervalue=0;

let display=function(){
    value.innerText=`value : ${countervalue}`;
}

let increment= function(){
    countervalue++
    display()
}
let Decrement= function(){
    countervalue--
    display()

}
add.addEventListener('click', increment)
Delete.addEventListener('click', Decrement)


