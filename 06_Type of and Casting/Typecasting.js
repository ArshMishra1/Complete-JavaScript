//! “Type casting means converting a value from one data type to another data type. There are two types of type casting: implicit and explicit. Implicit conversion happens automatically by JavaScript, while explicit conversion is done manually by the developer.”

//! Implicit Type Casting


//!explicit Type Casting-

//Number- str
 let str="123";
 let Numstr=Number(str);
 console.log(typeof(Numstr),Numstr)

//mix
let str2="123ars";
let NumStr2=Number(str2)
console.log(typeof(NumStr2),NumStr2)

//boolean
let str3=true;
let NumStr3=Number(str3)
console.log(typeof(NumStr3),NumStr3)

//undefinde

let str4=undefined;
let NumStr4=Number(str4);
console.log(typeof(NumStr4),NumStr4);


//Null
// let str5=null;
// let NumStr5=Number(str5);
// console.log(typeof(NumStr5),NumStr5);

//Nan

let str5=NaN;
let NumStr5=Number(str5);
console.log(typeof(NumStr5),NumStr5);



//!string

let num=123;
let strNum=String(num);
console.log(typeof strNum ,strNum)


let num2=true;
let strNum2=String(num2);
console.log(typeof strNum2 ,strNum2)


let folting=123.4;
let StrNum3=String(folting)
console.log(typeof StrNum3)
console.log(StrNum3 , "here output")

//boolean

let boolenvalue=1;
let booleanNum=Boolean(boolenvalue);
console.log(booleanNum)              //true
 
let value =-1;
let booleanNum2=Boolean(value);
console.log(booleanNum2);        //true


let value2 =0;
let booleanNum3=Boolean(value2);
console.log(booleanNum3);                 //false

let value3 =2
let booleanNum4=Boolean(value3);
console.log(booleanNum4);                   //true

let value4=[]
let booleanNum5=Boolean(value4);
console.log(booleanNum5);                     //true


