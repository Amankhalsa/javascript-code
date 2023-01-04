let user = {

    name: "aman",
    age:30,
    gender:"male",
    phone:"123456789",
    email: "AMan@gmail.com",
};
// one way 
console.log('one way :');
for( let key in user){
    console.log(key, user[key]);
}

// two way 
console.log('two way :');
console.log(Object.keys(user));

console.log(Object.values(user));

console.log('For of :');

for(let val of Object.values(user)){
    console.log(val);
}