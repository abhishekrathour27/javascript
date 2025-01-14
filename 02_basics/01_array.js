// Array
const myArr = [1, 2, 3, 4, 5]
// console.log(myArr);
// console.log(myArr[1]);

// Another way to take array
const myArr2 = new Array(1, 2, 3, 4, 5)
const names = ["ram", "sita", "lakshman"]

// Methods
// myArr.push(9)
// myArr.push(10)
// myArr.pop()

// console.log(myArr.includes(3));
// console.log(myArr.indexOf(4));

// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

// Slice & Splice
// console.log("A ", myArr);
const myNewArr = myArr.slice(1, 3)
// console.log(myNewArr);

// console.log("B ", myArr);
const myNewArr2 = myArr.splice(1, 3)
// console.log("c ", myArr);
// console.log(myNewArr2);
// Another example of Slice
const myStr = ["a", "b", "c", "d"]
myStr.splice(1,1,'z')
console.log(myStr);





