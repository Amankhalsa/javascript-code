const objs = {

    name: "aman",
    age :30,
}

for( let key in objs ){
    console.log(key , objs[key]);
}

let number = [1,2,3,4,5];
console.log(number);

for(let index in number){
console.log(index, number[index]);

}


for( let num of number){
console.log(num);

}