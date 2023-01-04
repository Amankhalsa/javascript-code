

const user = {
    name:"kirandeep",
    age :27, 
    hobby  :" Reading "


}

const user2 = {
    name:" Amanpreet",
    age :31, 
    hobby  :" Reading "


}

console.log(user2.name+user.name,);
console.log(user2['name']+user['name'],);
console.log(user2['age']+user['age'],);

// add update delete 

const student  ={
    name:'john',
    hobby :'reading',
    class: 6,
    roll:5,
    
}
// add
student.email = "student@gmail.com";

// update 
student.class = student.class + 1;

// delete
delete student.roll;
let key = "fee-detail";
student[key] = 500;
console.log(student);