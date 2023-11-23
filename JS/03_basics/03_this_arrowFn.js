//this = It refers "current context"
//context = values
const user = {
    username: "Rupesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); // o/p-->Empty object

// function chai(){
//     let username = "Rupesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "Rupesh"
//     console.log(this.username);
// }

//==========Arrow Functions=============
const chai =  () => {
    let username = "Rupesh"
    console.log(this);
}
// chai()

//===========Explicit Return==================
    //when we have to use the keyword "Retun" explicitly

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


// ========Implicit Return=============================
        //No need to write "return" keyword 

// const addTwo = (num1, num2) =>  num1 + num2
            //OR
// const addTwo = (num1, num2) => ( num1 + num2 )

//benifit of using paranthesis () ==> you can return object
const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
