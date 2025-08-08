//primitive and non primtive data types 

//primitive data types
// 7 categories call by value
//string , number , boolean, null, undefined (empty), Symbol
//Javacript is dynamic typed lanagauge

//Reference type non primitive

//arrays, objects, functions 


//javascript memory allocations
//two types of memory

// primitive use stack memory
//we get a copy of data

//non primitive use heap and used by reference


let myName = "haris ki memes"
let anothername = myName ;
anothername = "hehhehehe" 

console.log(myName);
console.log(anothername);


let userOne = {
    email : "hari ski memes",
    accountId  : 9399393
}

console.log(userOne.email);
console.log(userOne.accountId);

let usertwo = userOne ;

usertwo.email = "hehhehehe@gmail.com"
console.log(usertwo.email);
console.log(userOne.email);
