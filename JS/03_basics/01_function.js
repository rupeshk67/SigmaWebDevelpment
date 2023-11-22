// function addTwoNumbers(number1, number2){ //number1.number2 :- called parameters
//     console.log(number1 + number2);
// }

//addTwoNumbers(3,4); //3,4 :- called arguments

function addTwoNumbers(number1,number2){
    // let result = number1 + number2;
    // return result;

    // ====or=====
    console.log("Rupesh"); //--> will be printed
    return number1 + number2;
    console.log("Rupesh"); //--> will not be printed
    /*
    Note :- anything after "return" will not be executed.
            if we want to print something then it should be written 
            above "return"
    */
}

const result = addTwoNumbers(3,5); //can store function return to a variable in JS
console.log("Result :" ,result);

// ==================================================
function loginUserMessage(username){
    if(!username /* or username ===undefined */){
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("Rupesh"));
console.log(loginUserMessage(""));
console.log(loginUserMessage());