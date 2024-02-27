const marvel_heros = ["thor", "Ironman", "Spiderman"];
const dc_heros     = ["Superman", "Flash", "Batman"];

// Merged dc_heros array in `marvel_heros` [It will add dc_heros as a element here.]
// marvel_heros.push(dc_heros);
// console.log(marvel_heros);

// Merged two array and return in a new array without modifying an existing array. 
// const all_heros = marvel_heros.concat(dc_heros); 
// console.log(all_heros);

// Merged both array in 1 single array by using spread operator (...)
const all_new_heros = [...marvel_heros, ...dc_heros];
console.log(all_new_heros);

// Flat a multiple array in a single array.
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

console.log(Array.isArray("Mr. Samy"));
console.log(Array.from("Mr. Samy"));
console.log(Array.from({name: "Samy"})); // interesting

// Convert multiple variables in an array.
let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));

/* Notes:

1. isArray()
    This method returns true if an object is an array, otherwise false.

2. Array.from()
    This method returns an array from any object with a length property.
    This method returns an array from any iterable object.
*/