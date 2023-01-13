
// finding array in object 
const number = [
    {name :"kazi" ,age:20},
    {name :"jack" ,age:30},
    {name :"raju" ,age:50},

];


let result = number.find(function(number){

    return number.age > 30;
})
console.log(result);