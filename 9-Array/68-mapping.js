
let number  = [];

for( let i=1 ; i < 11; i++){
    number.push(i);
}

console.log(number);
// let multiply = [];

// for( let num of number ){
//     multiply.push(num * 2 ) ;

// }

// document.getElementById('demo').innerHTML =  multiply + '<br>';

// console.log(...multiply );

let mymaping =  number.map((num) => num *2 ); 
document.getElementById('test').innerHTML = mymaping;
console.log(mymaping);

console.log("object :");

let doctor  = [
    {name : "aman",  age : 30 },
    {name : "Aryan",  age : 20 },
    {name : "john dev",  age : 15 }

]


let docname = doctor.map((doc) =>doc.name);
console.log(docname);

document.getElementById('hello').innerHTML = docname;
