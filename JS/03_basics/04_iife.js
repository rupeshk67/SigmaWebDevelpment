//Immediately Invoked Function Expression
/* IIFE:- To prevent the function from pollution of global scope*/
//global scopes k pollution se problem hoti h kai bar ,
//usse hatane k liye IIFE ki use kiya jata h

// function chai(){
//     console.log("DB Connected");
// }
// chai();

(function chai(){
    console.log("DB Connected");
})(); //Semicolon is must to stop the execution otherwise second fn will throw error

//IIFE Syntax
//()(); --> first () is for fn defination and Second () is for execution

(function chaiAurCode(){
    console.log("DB Connected Two");
})();

//Note :- Above are example of "Named IIFE" as function is defined

// ====Arrow fn======
( ()=>{
    console.log("DB Connected Three");
})();
//Note :- Above is example of "Unamed IIFE" as function is defined

// ===========Passing a parameter=====
((name)=>{
    console.log(`DB Connected Three ${name}`);
}) ("Rupesh");
