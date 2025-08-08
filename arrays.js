//arrays in Js

//arrays are non primtive datatypes

const myArray = [0, 1, 2,3,4 ] //each number is element //can be different elements
const myHeros = ["haris", "hehehe" , "hbbsbsh"]

// console.log(myArray[2]);

//arrays methods

// myArray.push(6)
// myArray.push(7)

// console.log(myArray)
// myArray.pop()//removes last element


// // myArray.unshift(9)//adds in place of the first one

// myArray.shift()


// console.log(typeof(myArray.includes(3)));



// const newArray = myArray.join()

// console.log(typeof newArray)
// console.log( myArray)
 

//slice, splice
console.log("orginal Array:" + myArray);

console.log("A", myArray);
const myn1 = myArray.slice(1,3);
console.log(myn1);

console.log("B", myArray);
const myn2 = myArray.splice(1,3)
console.log(myn2)
console.log(myArray); //portion above is eliminated from the code




