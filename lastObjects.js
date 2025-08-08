//destructing of objects

const  course = {
    name : "Js course",
    price : 999,
    courseInstructor : "haris"
}

const {courseInstructor : Instructor} = course

console.log(Instructor);


// {

//     name : "haris",
//     courseName : "js in hindi",
//     price : "free"
// }