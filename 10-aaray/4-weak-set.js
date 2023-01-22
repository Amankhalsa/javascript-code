 
 
 const ws =new WeakSet();
console.log('WeakSet');
 const obj1 ={};
 const obj2 ={};
 ws.add(obj1);
 ws.add(obj2);

 console.log(ws);

 console.log(ws.has(obj1));

ws.delete(obj1);
console.log(ws);
console.log('Week map :');
const wm = new WeakMap();

wm.set(obj1, 123456);
console.log(wm);

console.log("has value:");
console.log(wm.has(obj1));
console.log(wm.get(obj1));

console.log("delete:");
wm.delete(obj1);
console.log(wm.has(obj1));




