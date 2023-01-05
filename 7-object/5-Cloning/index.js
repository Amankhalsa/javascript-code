



console.log("Cloning :");

let user = {
    name:"Aman",
    age :30,
}


// let copyus = {};
// copyus.name = user.name;
// copyus.age = user.age;
// console.log(copyus);


// document.getElementById('demo').innerHTML = 'Name : '+copyus.name;

console.log("for in loop:")
// for(let key in user){
//     console.log(key,user[key]);
//     copyus[key] =  user[key];
  
// }
// console.log(copyus);

console.log("Assigne object in js :");
const   copyus = Object.assign({},user);


console.log(copyus);
