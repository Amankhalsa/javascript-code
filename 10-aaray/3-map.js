

let map = new Map();

map.set('mango' , 'ame');
map.set('banana' , 'kole' );
map.set('store' , 200);


console.log(map);
let text ='';
console.log('For loop:');
for( let el of map){
    console.log(el);
   text += el + "<br>";
}
document.getElementById('demo').innerHTML = text;

console.log('Map has:');
console.log(map.has('mango'));
document.getElementById('demo2').innerHTML = map.has('mango');

console.log('Delete:');
map.delete('mango');
console.log(map);

let j ="";
for( let i of map){
     j += i + '<br>';
}
document.getElementById('demo3').innerHTML = j;

console.log('values ');
console.log( map.values());
let l ='';
for( let k of map.values()  ){
    l += k  +'<br>';
}

document.getElementById('demo4').innerHTML =l;

console.log('keys');
console.log(map.keys());

map.clear();
console.log(map.keys());
