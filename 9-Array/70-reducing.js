// Array Reduce :

let num = [10,20,30];
let sum = 0;
for(let i of num){
    sum = sum +i ;

}
document.getElementById('demo').innerHTML = "Sum is : " +sum;
console.log("sum is : "+sum);

let reducesum = num.reduce( (sum, num) => sum + num) ;

console.log(reducesum);
document.getElementById('test').innerHTML = "Sum is : " +reducesum;