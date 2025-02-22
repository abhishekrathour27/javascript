// IIFE => Immeditely invoked function Expression

(function sayMyname(name){
    // This is called named IIfe
    console.log(`I am ${name}`);
})('Abhishek');
// Here Semicolon is used for multiple IIFE

// IIFE using Arrow function

((name) => {
    console.log(`I am ${name}`);
    
})('Sam')