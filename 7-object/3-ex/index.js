


const sarrary = {
    alex  : 2000,
    kazi  : 3000,
    aryan : 2500,
    glob  : 5000
}

let sum = 0;

// for(let key in sarrary){
//     console.log(key,sarrary[key]);
//     sum +=  sarrary[key];

// }
// console.log(sum);

// 2nd way 
console.log(Object.values(sarrary));

for(let val of Object.values(sarrary)){
    sum += val;
}
console.log(sum);