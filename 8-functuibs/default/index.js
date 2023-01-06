
function calc(num1 , num2, num3 ){

    let sum = num1+ num2+num3;
    return sum;

}

let result = calc(10,15,20);
document.getElementById('demo').innerHTML = "sum is "+ result;
console.log(result);

console.log('function expesion:');


let mysun = function info(val1, val2){
    let val3 = val1+ val2;
    return val3;

}

console.log(mysun(15,20));