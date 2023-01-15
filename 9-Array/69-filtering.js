let number = [1,2,3,4,5,6,7,8,9];

let oddnum = [];

// for(let i of number){
//     if(i % 2 !== 1){
//         oddnum.push(i);
//     }
// }

let  myvar =   number.filter((num)=> num % 2);
document.getElementById('demo').innerHTML = myvar;
console.log(myvar);