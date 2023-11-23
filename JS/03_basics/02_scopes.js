//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);

// =====Nested Scope==========
 function one(){
    const username = "Rupesh"

    function two(){
        const website ="youtube"
        console.log(username);
    }
    //console.log(website); // will throw error as it is out of scope({})

    two() //not executed as above console log throw error
 }
 //one()

//  ===========================================

if (true) {
    const username = "Rupesh"
    if (username === "Rupesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5)) // will not throw erro as it is a typical function we want to print

function addone(num){
    return num + 1
}



addTwo(5) // will throw error as we are using function as expression and we can't use variable before declaring it
const addTwo = function(num){
    return num + 2
}