


let num = 15; 

// if(num % 3 === 0 && num % 5 === 0 ){
//     console.log('fizz bazz');
// }else if(num % 3 === 0  ){
//     console.log('fizz');
// }
// else if( num % 5 === 0){
//     console.log('bazz');
// }else{
//     console.log('Notting ');
// }

console.log(num % 3 === 0 && num % 5 === 0  
    ?   'Fizz bazz '
    : num % 3 === 0 
    ?    "bazz"
    : num % 5 === 0 
    ?    "fizz"
    : 'Notting'
    )