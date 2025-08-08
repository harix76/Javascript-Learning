const myNums = [1,2,3]

// const myTotal = myNums.reduce( (acc,currVal) => {

//     console.log(`accumulator = ${acc} and currval: ${currVal}`);
    
//     return acc + currVal
// }, 0 )

// const myTotal = myNums.reduce ((acc, currVal) => acc + currVal, 0)

// console.log(myTotal);


const shoppingCart = [
 {

    itemName : "js course",
    price : "999"
 },
 {

    itemName : "py course",
    price : "2999"
 },
 {

    itemName : "data course",
    price : "9499"
 },
 {

    itemName : "ai course",
    price : "9909"
 },

]


const Price = shoppingCart.reduce( (acc,item) => acc + item.price, 0 ) 

console.log(Price);
