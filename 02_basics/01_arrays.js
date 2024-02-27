// Array

const myArr = [0, 1, 2, 3, 4, 5];
const myHeros = ["Shaktiman", "Junior G"];

const myArr2 = new Array(1, 5, 4, 8, 9);
// console.log(myArr2);

// Array Methods

// myArr.push(6,8);
// myArr.pop();
// myArr.unshift(9); // Add new array value in the starting.
// myArr.shift(); // Remove Frist array from the starting.
/* console.log(myArr);
console.log(myArr.includes(1)); // check whether the value exist or not in that array and retun in (true/false).
console.log(myArr.indexOf(6)); // check and return the index no of this value. 

const newArr = myArr.join(); // join the values and convert the type from array to string with comma seperated.
console.log(myArr);
console.log(typeof newArr); */

// slice, splice

console.log("A ", myArr);
const myn1 = myArr.slice(1, 3); // not include the last digit value (1-3)

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3); 
console.log("C ", myArr);
console.log(myn2);


/* NOTES

#1. slice()
    This method returns selected elements in an array, as a new array.
    This method selects from a given start, up to a (not inclusive) given end.
    This method does not change the original array.

#2. splice()
    This method adds and/or removes array elements.
    This method overwrites the original array.

    Ref: https://www.w3schools.com/jsref/jsref_splice.asp


    eg: array.splice(index, howmany, item1, ....., itemX)
*/