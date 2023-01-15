


let number = [1,2,3,4,5,6,7,8,9];
console.log(...number);
document.getElementById('demo').innerHTML = number;
console.log(number[0],number[1]);
document.getElementById('test').innerHTML = number;

let copyArray = [...number];
console.log('Copy array :');
console.log(copyArray);

document.getElementById('copyarray').innerHTML = copyArray;



let num1 = [1,2,3];
let num2 = [4,5,6];

console.log('Spread operator :');
let result = [...num1, ...num2];
console.log(result);