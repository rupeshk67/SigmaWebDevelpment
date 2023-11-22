// function addTwoNumbers(number1, number2){ //number1.number2 :- called parameters
//     console.log(number1 + number2);
// }

//addTwoNumbers(3,4); //3,4 :- called arguments

function addTwoNumbers(number1,number2){
    // let result = number1 + number2;
    // return result;

    // ====or=====
    //console.log("Rupesh"); //--> will be printed
    //return number1 + number2;
    console.log("Rupesh"); //--> will not be printed
    /*
    Note :- anything after "return" will not be executed.
            if we want to print something then it should be written 
            above "return"
    */
}

//const result = addTwoNumbers(3,5); //can store function return to a variable in JS
//console.log("Result :" ,result);

// ==================================================
// function loginUserMessage(username){
//     if(!username /* or username ===undefined */){
//         console.log("Please enter a username");
//         return;
//     }
//     return `${username} just logged in`
// }
// console.log(loginUserMessage("Rupesh"));
// console.log(loginUserMessage(""));
// console.log(loginUserMessage());

//========Rest Operator in Function=========
/* 
Sometimes we are not sure how many parameters will
come in function, in those scenario we can use 'Rest 
Operator'.
*/

// function calculateCartPrice(...num1){
//     return num1;
// }

// console.log(calculateCartPrice(200,300,400,500));

// function calculateCartPrice(val1, val2, ...num1){
//     //val1 and val2 will take the first 2 values and rest will be printed as array
//     return num1;
// }

// console.log(calculateCartPrice(200,300,400,500));

// ===========Function using object========

const user ={
    username:"rupeshk67",
    price:200
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}

//handleObject(user);
// =====or=====
//its not necessary that we have to create an object first then use it in function 
//we can create the object at the time of calling function
handleObject({
    username : "Roy",
    price : 300
});

// ========Array using function=======
 const newArray =[400,500,600,700];

 function returnSecondValue(getArray){
    return getArray[1];
 }
 console.log(returnSecondValue(newArray));//created an array first and using in function call
 console.log(returnSecondValue([600,700,800,900])); //direct passing array