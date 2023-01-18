

function getting(user){
const {name, age, address} = user;
const {long, latitide} = address;

console.log(`hello ${name} age is ${age} address ${long}` )

}



let user ={
    name : "kazi",
    age :30,
    address: {
        long: 33.33,
        latitide : 332.33,
    },
};

getting(user);

let [a,b,c,d] = [1,2,3,4];
console.log(a,b,c,d);