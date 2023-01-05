


const user = {
    name:"Aman",
    age :40,
    favbook:{
        bookname :'Think big and growup',
        bookauthor : "xyz",
        price:{
            one:100,
            two :150,
        }
    }
}
console.log(user.name);
console.log(user.age);
console.log(user.favbook.bookname);
console.log(user.favbook.bookauthor);

const {name , age , favbook } = user;
const {bookname , bookauthor  } = user;
const {price , one  } = user;

console.log("Object");
console.log(favbook.bookauthor);
console.log(favbook.bookname);
console.log(favbook.price.one);

