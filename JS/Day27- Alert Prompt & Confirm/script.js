alert("Enter the value of a !")
let a = prompt("Enter a here",788) //788 is default value on page ..can be changed by user
// document.write(a)
a = Number.parseInt(a)
alert("You entered a of type : "+(typeof a)) // by default it will be string until you parse..

let write = confirm("Do you want to write it to the page")
if(write){
    document.write(a)
}
else{
    document.write("please allow me to write")
}
