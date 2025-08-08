
// {
    //is a scope
// }



// if (true){
// let a = 10
// const b = 30
// var c = 40 //global scope

// }

// function one (){
//     const username = "haris"
//     function two (){
//         const website = "youtube"
//         console.log(username);
        
//     }
//  //   console.log(website);//not good call
//     two ()
// }

// one()

console.log(output (5)) 

function output (num){
 return num + 1
}

output (5)

addTwo (5) //function is accessed before decalration error

const addTwo  = function (num){
    return num + 2
}
