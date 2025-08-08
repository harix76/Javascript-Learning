function sayMyName () {
    console.log("haris");
    console.log("hhehee");
    
} 

//sayMyName()

function AddTwoNumbers(number1 , number2) {
    
    console.log(number1 + number2);
    
    
}

//const result = AddTwoNumbers(3 , 5)

//console.log("result:" + result);// undefined cuz funtion is not returning


function Result(num1 , num2) {
    // let final = num1 + num2
    // return final

    return num1 + num2
}

myFinalResult = Result(3 , 4)
//console.log("result is " + myFinalResult);


function userLoginMessage (username = "sam") {
    if (!username){
        console.log("Please enter a username");
        return
    }
    return  `${username} just logged in`

}

console.log(userLoginMessage())





