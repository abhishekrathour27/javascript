
const myArray = [2,3,4,5]

for (const value of myArray){
    //  console.log(value);
     
}

// Loops on map()

const map = new Map()
 map.set('ind' , "India")
 map.set('usa', 'America')
 map.set('uk' , 'london')

 console.log(map);

 for(const [key , value] of map){
    console.log(key ,'-',  value);
    
 }
 


const myObj = {
    1 : "a",
    2 : "b",
    3 : "c"
}

for(const item in myObj){
    // console.log(`${item} is a key and value is ${myObj[item]} ` );
    
}