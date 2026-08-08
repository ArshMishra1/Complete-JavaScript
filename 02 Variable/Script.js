//Variable-  variiable is container that stores data values 
//or variable is a name of storage location in memory that holds a value
//In javaScript a varible contain any type of data type like string, number, boolean, object, array etc
//! viariable has three stage
//1. Declaration-
let a;
//2. Initialization-
a=10;
//3.use
console.log(a);
 
let b,c,d;
b=20;
c=30;
d=40;
console.log(`first value`+b);
console.log(`second value`+c);
console.log(`thirs value`+d);

let e=10; f=20;
console.log(e,f)
// Declaration +  Initialization
  let demo = 12;
  console.log(demo)

//in javasciript we have 3 types of variables
//1. var 
var vara
vara=10;                  
console.log(vara)           //output =10;

var vara=12;
console.log(vara)            //output= 10;

var varb;
console.log(varb)          //undefinde

console.log(varc)             //undefinde
var varc

//2. let

let leta;
console.log("let wala " +leta)              //undefinde

// console.log(letb)     //ReferenceError: Cannot access 'letb' before initialization
// let letb;

let letc="hello + 12"
console.log(letc)                    //output =hello +12;

// let letc="redeclaration"    // SyntaxError: Identifier 'letc' has already been declared
// console.log(letc)

 letc = "hello"
 console.log("Reassignment wala value: " + letc);   //allow reassignment  

//3. const
const fix= "hello fix hai ji"
console.log(fix)                     //! normal way

const fixa;
console.log(fixa)                  //!error -SyntaxError: Missing initializer in const declaration

console.log(fixb)                  //!error -  SyntaxError: cant accces fixa befor initialzation
const fixb;


//Rule for variable declaration
//! start with letter ,underscore(_) and $ sign

let demovariable=12;
let _userData=12;
let $userName ="Arsh kumar mishra"

//! case Sensitive

let UserAddress= " sultanpur"
    useraddress=" up"             //❌ allowed becasuse variable are case sensitive


//do not uses number at the beginning and also  space in variable name


//Reserved keyword can not be variable name

