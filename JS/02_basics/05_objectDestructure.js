const course ={
    courseName:"Js in Hindi",
    fee :"9999",
    courseTeacher:"Rupesh"
}
//console.log(course.courseTeacher);

// ===otherway to print============
const {courseTeacher} =course; //de-structuring
//console.log(courseTeacher);
            //or
const {courseTeacher :Instructor} =course; //de-structuring
console.log(Instructor);

// ====JSON=====
//objectFormat
// {
// "courseName":"Js in Hindi",
// "fee ":"9999",
// "courseTeacher":"Rupesh"
// }

//arrayFormat
// [
//     {},
//     {},
//     {}......
// ]