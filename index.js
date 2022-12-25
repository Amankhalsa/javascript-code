
// Variable diclare  in js  with var 
// var aman = "Aman khalsa how are you ";
// var age  = 30 ;


// console.log(aman,age )

// Variable diclare  in js  with let

// in let you can chang ethe value by reassigne 
// in string you canuse single qoute double and backtik 
// in let you cannot  chang ethe value by again
const  aman  = "mango";
const  price  = 50;
//   aman  = "apple";
// console.log(aman,price );

// ======================string and number  data tyle ==========================

let  name  = 'Aman';   // string data type 
  let age   = 30;       // Number data type 

                //   console.log(typeof age);   
                //   console.log(typeof name);  

// ======================bool data tyle ==========================
let ismarried  =true;
                // console.log(typeof ismarried  ); 

// ==================== undefined data type ===================

let color =undefined ;
                // console.log(typeof color  ); 
// ================ null data type =================
let selectcolor = null;
                // console.log(typeof selectcolor  );   
// =========================== object in js ===================
let sname = "aman";

let sage  = 29;

let hobby = "coding ";


let obj  = {
    name : "preet",
    age : 30,
    hobby : "Reading",
}

                // console.log(obj );
                // console.log('name is : '+obj.name);
                // console.log('age is : '+ obj['age'] );


// =========================== Array  in js ===================
let friends  = ['john' , 'deman', 'raju'];

console.log(friends);
console.log(friends[0]);

console.log(typeof friends);
console.log(friends.length);
// ============================ function in js ================
// pass by argument 
function shoemyname(name){
    console.log('my name is '+name);
}
shoemyname('aman');
shoemyname('daman');
shoemyname('raju')

// ==============  pass by argument and return 
function calc(num1, num2){

    const sum = num1 + num2;
    return sum;
}
let result  = calc(20 , 30);

console.log(result);