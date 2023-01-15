

//  joining

let number  = [1,2,3,4,5,6];
console.log(number);
let result = number.join();
console.log('Join in array '+result);

let message  = "hi Aman how are you";

let res = message.split(' ');
console.log(res);

console.log("again join array :");

console.log(res.join('-'));
let joined  = res.join('-');
document.getElementById('demo').innerHTML = joined;