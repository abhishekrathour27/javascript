// --> MAP 
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNum = myNums.map( (num) => num + 10)

// console.log(newNum);

// --> Chaining

const newNum = myNums.map( (num) => num *10 )
                     .map( (num) => num + 1)
                     .filter( (num) => num > 40 )

// console.log(newNum);
const myArr = [1, 2, 3, 4, 5]

const newArr = myArr.map(function (n) {
   return n + 3
})
console.log(newArr);

const people = [
    { name: "Ankit", age: 25 },
    { name: "Vinit", age: 24 },
    { name: "Shashi", age: 29 },
];
const getAges = people.map(function val(value) {
    value.age
});
//   const ages = getAges(people);
// console.log(getAges);

