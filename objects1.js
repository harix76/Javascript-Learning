const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name  = "sjjaja"
tinderUser.isLoggedin = false

// console.log(tinderUser);

const regularUser = {
    email : "haris@gmail.com",
    fullName : {
        userFullName: {
            firstName : "hariss",
            lastName : "altaf"
        }
    }

}

//console.log(regularUser.fullName.userFullName.lastName);
//optional chaining using ?

const obj1 = {
    1:"a",
    2: "b"
}

const obj2 ={
    3:"c",
    4:"d"
}
const obj4 ={
    5:"e",
    6:"f"
}

//const obj3 = { obj1 , obj2}
// const Obj3 = Object.assign ({} , obj1, obj2, obj4)//empty array taken as target object
// console.log(Obj3);

// const obj5 ={...obj1, ...obj2, ...obj4}
// console.log(obj5);

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogged'));

