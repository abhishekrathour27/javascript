// Object literals 
const mySym = Symbol("mysm")

const jsUser = {
    name: "Abhishek",
    age: 22,
    [mySym] : "mysm", // use square bracket for use symbol
    gmail: "abhishek@google.com",
    isLoggedIn: false
}

// console.log(jsUser.name);// First method for access
// console.log(jsUser["name"]);// Second method for access
// console.log(jsUser[mySym]);
// console.log(typeof [mySym]);

jsUser.gmail = "abhishek@amazon.com"
// console.log(jsUser);
// Object.freeze(jsUser)
jsUser.gmail = "abhishek@developer.com"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello user");
}
console.log(jsUser.greeting());

jsUser.greeting2 = function(){
    console.log(`Hello ${this.name} How are you ?`);  
}
console.log(jsUser.greeting2());









