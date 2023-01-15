
let number = [1,3,2,-5,4,9];
// every  ans some 
let data = number.some(function(num){
    return num > 0;  
});

console.log(data);