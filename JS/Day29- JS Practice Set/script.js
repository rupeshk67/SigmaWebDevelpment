
/*Write a program using prompt function to take the input of age as a value from user 
and use alert to tell him if he can drive */

let runAgain = true;

const canDrive = (age)=>{
    return age>= 18 ? true : false
}

while(runAgain){
    let age = prompt("Enter your age",18) //18 is default value on page ..can be changed by user
    age= Number.parseInt(age)

    /*If user enters the age less than 0 then show the error message */
    if(age<0){
        alert("Please Enter valid age")
        /*console.error("Please Enter valid age") */   // error at console
        break;
    }

    if(canDrive(age)){
        alert("You can Drive")
    }
    else{
        alert("Be 18+ first..")
    }
    runAgain = confirm("Do you want to play again ?")
}