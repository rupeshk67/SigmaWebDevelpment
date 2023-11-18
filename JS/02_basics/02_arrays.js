const marvel_heros =["thor","Ironman","Spiderman"]
const dc_heros =["Superman","Flash","batman"]

//marvel_heros.push(dc_heros)
/*push:-Appends new elements to the end of an array, and returns the new length of the array.*/
// console.log(marvel_heros);
// console.log(marvel_heros[3]); // it will give entire array(dc_heros)
// console.log(marvel_heros[3][1]); // it will give 2nd element of array(dc_heros)

//const allHeros = marvel_heros.concat(dc_heros)
/*Concat:- Combines two or more arrays. This method returns a new array without modifying any existing arrays. */
//console.log(allHeros);

// =======spread operator=======

// const all_new_Heros = [...marvel_heros,...dc_heros]
// console.log(all_new_Heros);

//====concept of 'flat'=====
const another_array =[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const usable_another_array = another_array.flat(Infinity)
console.log(usable_another_array);

//==checking if its 'array', if not than make it an array
console.log(Array.isArray("RUPESH")); //checking
console.log(Array.from("RUPESH"));// convert into array using 'from'
console.log(Array.from({name:"RUPESH"}));// will give empty array, we have to say like make string by keys or values otherwise it will give empty array

let score1 =100;
let score2 =200;
let score3 =300;

console.log(Array.of(score1,score2,score3));


