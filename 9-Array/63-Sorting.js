// sorting 
const number = [8,7,1,3,4,2];
number.sort();

console.log(number);
document.getElementById('demo').innerHTML = number;

number.reverse();

console.log(number);
document.getElementById('test').innerHTML = number;

console.log('object sorting :')
let doctor = [
    {   name:"Aman" , age:35},
    {   name:"preet" , age:31},
    {   name:"khalsa" , age:39},
];

doctor.sort(function(d1,d2){
    if(d1.age > d2.age) return +1;
    if(d1.age === d2.age) return 0;
    if(d1.age < d2.age) return -1;
    
 }).reverse();
//can remove reverse()
console.log(doctor);
