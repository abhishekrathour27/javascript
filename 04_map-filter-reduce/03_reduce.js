const myNum = [1, 2, 3]

const sumOfnum = myNum.reduce((acc, num) => acc + num, 0) // acc --> accumulator

// console.log(sumOfnum);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999,
        name:{
          firstname:"abhishek",
          lastName:"Singh",
          hobbies:[],
        }
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]


const totalBill =  shoppingCart.reduce( (acc, num) => acc + num.price, 0)

// console.log(totalBill);



