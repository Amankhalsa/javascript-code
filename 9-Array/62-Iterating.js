
// Iterating  an array

const number = [1,2,3,4,5,6,7,8];
let result = "";
// Iterating  an array
for(let index = 0 ; index < number.length;  index++ )
{
    result += 'Result is = '+number[index] + "<br>";
    console.log(index,result);
};
document.getElementById('demo').innerHTML = result;
// ========== for of loop ===========
let test = "";
for( let num of  number){
    console.log(num);
    test += 'Result is = '+  num  + "<br>";
  
};
console.log("foreah loop");
document.getElementById('test').innerHTML = test;
let test2 = "";


number.forEach(function (num , index ){
    test2 += 'Result is = '+  num  + "<br>";

console.log('foreach result is = '+num,index );
});

document.getElementById('test2').innerHTML = test2;
