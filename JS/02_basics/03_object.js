//Singleton :- koi v constructor se jab aap banate h to wo singleton object hota h, single instance
//Object.create --this is the way of creating singleton object

//Object literals :-multiple instances
const mySymbol = Symbol("key1") //take a symbol as key and print its value in an object

const jsUser ={
    name:"Rupesh",
    "full name":"Rupesh Roy",
    [mySymbol]:"mykey1", //symbol
    age : 25,
    email: "rupesh.roy@yahoo.com",
    location:"Bihar",
    isLoggedIn: false,
    lasLoginDays:["Monday","Saturday"]
}

console.log(jsUser.email); //one way
console.log(jsUser["email"]);//another way
console.log(jsUser["full name"]);//another way
console.log(jsUser[mySymbol]);//another way :- printing symbol datatype value
console.log(typeof jsUser[mySymbol]);

//==some operations on an object======
jsUser.email ="rupesh@chatgpt.com"; //update email value
//Object.freeze(jsUser); //once freeze then updates don't apply
jsUser.email ="rupesh@microsoft.com";

console.log(jsUser);

//=====Use of Greeting function with Object======

jsUser.greeting = function(){
    console.log("Hello JS User");
}
console.log(jsUser.greeting());

jsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}
console.log(jsUser.greetingTwo());
