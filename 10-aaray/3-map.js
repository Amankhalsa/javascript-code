

let map = new Map();

map.set('mango' , 'ame');
map.set('banana' , 'kole');
map.set('store' , 200);


console.log(map);
console.log('For loop:');
for( let el of map){
    console.log(el);
}

console.log('Map has:');
console.log(map.has('mango'));

console.log('Delete:');
map.delete('mango');
console.log(map);


console.log('values ');
console.log( map.values());

console.log('keys ');
console.log(map.keys());

map.clear();
console.log(map.keys());
