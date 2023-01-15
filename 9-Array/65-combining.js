

let num1 = [1,2,3];
let num2 = [4,5,6];
console.log('Concatinating :');
let num = num1.concat(num2);
console.log(num);
document.getElementById('test').innerHTML = num;

let number = [1,2,3,4,5,6,7,8];
console.log('Slicing  :');
let result  = number.slice(3,6);
document.getElementById('demo').innerHTML = result;
console.log(result);