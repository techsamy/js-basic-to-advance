"use strict"; //treat all JS code as newer version.

// alert (2 + 2); // we are using nodejs, not browser.

console.log(3
    + 3); // code readability should be high [Bad way to write code]

let name = "Narayan";
let age = 27;
let isLoggedIn = false;
let state = null;

// number   => 2 to power 53
// bigint 
// string   => ""
// boolean  => true/false
// null     => standalone value
// undefined=> 
// symbol   => Gennerally use in react/Figma/ use for [unique]
// object

console.log(typeof undefined); //undefined
console.log(typeof null); //object


// Datatypes of javascript Summary
/* Primitive datatype 

1. number
2. bigint
3 .string
4. boolean
5. null
6. undefined
7. symbol
8. object

*/
/* Refrence type (Non-Primitive) 

1. Array
2. Objects,
3. Functions
*/

// ****************** Stack & Heap ********************

let myWebName = "narayansinghdotcom";
let anotherName = myWebName;
anotherName = "chaiaurcode";

console.log(myWebName);
console.log(anotherName);

let userOne = {
    email: "amit@gmail.com",
    upi: "ami@ybl"
}

let userTwo = userOne;
userTwo.email = "samy@tech.com";

console.log(userOne.email);
console.log(userTwo.email);

/* NOTES
    1. In stack we always get a copy of that value
    2. In Heap we always get the refrence of that value.
*/