//...rest operator

function calculateCartPrice(val1, val2 , ...num1){
    return num1
}

console.log(calculateCartPrice(100, 400 , 500));


const User = {
    username : "haris",
    prices : "199"
}

function handleObject (anyobject){
    console.log(`username is ${anyobject.username} and Price is ${anyobject.price}`);
    
}

// handleObject(User)

handleObject ({
    username : "sam",
    price : "399"
})

const myNewArray = [200,300,400]

function returnSecondValue (getArray){
    return getArray[1]

}

// console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([300, 500, 1000]));
