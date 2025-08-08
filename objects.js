//objects are decalred as literals and singleton

//constructor-> singleton object

//objects literals 
//Object.create
//keys and values in objects
const mySym = Symbol("mykey1")

const JsUser = {
    name : "haris",
    //key : value
    age : 19,
    [mySym] : "mykey1",
    location :"Lahore",
    email: "haro@gmail.com",
    isLoggedin: false,
    lastLoginDays : ["monday", "Tuesday"],
    "full name" : "haris Altaf"

}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);



// //object.freeze lock the object
// console.log(JsUser);

//function can be treated as Variables

JsUser.greeting = function(){
    console.log("hello js users ");
    
}

JsUser.greeting2 = function(){
    console.log(`Hello Js user , ${this["full name"]}`);
    
}

console.log(JsUser.greeting())
console.log(JsUser.greeting2())

//++++++++++++++++++++++++++++++++++++++++++++++++++++++

