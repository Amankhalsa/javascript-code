

function multiply(...args){
 let sum= 1;

 for (let num of args){
    sum = sum * num;
 }
 return sum;
}

console.log(multiply(5,6,7,2,2));