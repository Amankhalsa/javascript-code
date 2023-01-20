


let set  = new Set();

set.add(100);
set.add(200);
set.add(300);
set.add(100);
console.log('Get set :');
console.log(set);
console.log(set.size);

console.log('Delete :');
set.delete(200);
console.log(set);

console.log('for loop :' );
for( let el of set){
    console.log(el);
}

console.log('Forach loop :');

set.forEach((el) => console.log(el));
console.log('clear :');

set.clear();
console.log(set);
