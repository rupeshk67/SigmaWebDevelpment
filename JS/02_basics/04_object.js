// =======Singleton Object concepts======

const tinderUser = new Object(); //singleton
//const tinderUser ={}; --> same as above,no diff. //non-singleton

tinderUser.id ="12345bn";
tinderUser.name ="Roy";
tinderUser.isLoggedIn = true;

//console.log(tinderUser);

const regularUser={
    email:"rupesh@hotmail.com",
    fullName:{
        userFullName:{
            firstName:"Rupesh",
            lastName:"Roy"
        }
    }
}
// console.log(regularUser.fullName.userFullName);
// console.log(regularUser.fullName.userFullName.lastName);

//======Merging two or more objects=========
const obj1 ={1:"a", 2:"b"};
const obj2 ={3:"c", 4:"d"};

const obj3 = Object.assign({},obj1,obj2); 
//giving "{}" is optional but a good practice
//"{}" ==empty array acts as TARGET and rest others(obj1,obj2) objs are SOURCE
/*LINK==> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign */
console.log(obj3);

// =====Or use "SPREAD"======
const obj4 ={...obj1,...obj2};
console.log(obj4);

//tinderUser[1].email;
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty("isLoggedIn"));