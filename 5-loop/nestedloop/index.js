let text = "";
for( let aman= 1 ; aman<=3 ; aman++){
    for(let preet =1 ; preet <= 3 ; preet++){
        console.log(aman,preet);
        text += "The number is " + aman*preet+ "<br>";
    }
}
document.getElementById('demo').innerHTML = text;

// // program to generate a multiplication table

// // take input from the user
// const number = parseInt(prompt('Enter an integer: '));

// //creating a multiplication table
// for(let i = 1; i <= 10; i++) {

//     // multiply i with number
//     const result = i * number;

//     // display the result
//     console.log(`${number} * ${i} = ${result}`);
// }