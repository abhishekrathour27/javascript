
// const tinderUser = new Object()
const tinderUser = {}
tinderUser.email = "user@gmail.com"
tinderUser.name = "shashi"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

// nested object

const user = {
    mail: "aaa@gmail.com",
    fullName: {
        userName: {
            firstName: "abhishek",
            lastName: "singh"
        }
    }
}

// console.log(user.fullName.userName.firstName);

// Merging two or more objects togeather

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 4: "a", 5: "b" }

// const obj3 = {obj1 , obj2}
// const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1,...obj2}

// console.log(obj3);
// console.log(obj1);

// Array of objects

const arr = [
    {
        id:"123abcd",
        name:"Abhi"
    },
    {
        id:"123abc",
        name:"Abhi"
    },
    {
        id:"123abc",
        name:"Abhi"
    },
]
let myId = arr[0].id
// console.log(myId);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));//output will be in array form
// console.log(Object.values(tinderUser));

// De-structure in object

const course = {
    courseName : "javascript",
    price : 999,
    teacher : "aaaa"
}
// console.log(course.courseName);
const {courseName:n} = (course)

console.log(n);

