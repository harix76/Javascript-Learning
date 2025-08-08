const  user = {
    username : "haris",
    price : "999",
    welcomeMessage : function (){
     console.log(`${this.username} , welcome to the website`)   //this means current context
   console.log(this);
    
    }


}


// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai  (){
//  let username = "haris"
//    console.log(this.username);    
// }

// chai()


const chai =  () => {
    let username = "hariskaUserame"
    console.log(username);
    

}
//chai()


// const addTwo = (num1, num2) => {
// return num1+ num2
// }//explicit return

//const addTwo = (num1, num2) => (num1+ num2) //implicit return

const addTwo = (num1, num2) => ({username : " hehehe"})
console.log (addTwo(5,6))

