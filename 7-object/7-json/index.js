

let user ={
    name :"aman",
    age :30,
}

const convert = JSON.stringify(user);
console.log(convert);
console.log(JSON.parse(convert));