// let mydate = new Date()
// console.log(mydate.toDateString());
// console.log(mydate.toLocaleString());

// console.log(typeof mydate);

//months starts from 0 in js

//let myCreatedDate = new Date (2023 , 1, 25)


//let myCreatedDate = new Date ("2023-01-14") //dd-mm-yyy
// console.log(myCreatedDate.toDateString());


// let myCreatedDate = new Date ("01-14-2025")

// let myTimeStamp = Date.now() //output is in millisecond
// console.log(myTimeStamp);

//console.log (Math.floor(Date.now()/1000));
let newDate = new Date()

console.log(newDate.getMonth()+ 1 );


newDate.toLocaleString('default', {
    weekday : "long",
})

