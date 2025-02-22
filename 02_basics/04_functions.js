// function add(number1 , number2){
//    console.log(number1+number2);

// }
// add(4,6)
function add(number1, number2) {
    return number1 + number2
}
// console.log("Result :",add(3, 5));
function userLogIn(username){
    if(username === undefined){
        console.log("Enter your Name");
        return
    }
    return `${username} is just Logged in`
}

// console.log(userLogIn("Abhishek"));

function cartItem(...item){// ... -> rest operator or spread operator
    return item
}
// console.log(cartItem(1,2,3,4));

// function using object->
const user = {
    name : "abhishek",
    usn : "u18aj23s0148"
}
function userInfo(userObject){
   console.log(`my name is ${userObject.name} and usn is ${userObject.usn}`);
   
}
// userInfo(user)

// Function using objects

const myArray = [1,2,3,4]

function returnArrayValue(myValue){
   return myValue[1]
}
console.log(returnArrayValue(myArray));



 
 
