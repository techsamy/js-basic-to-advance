let score = "true";

console.log(typeof score);
console.log(typeof (score));


let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = "samy";


let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);


// 1 => true; 
// 0 => false;
// "" => false
// "samy" => true

let someNumber = 33;
console.log(typeof someNumber); 
let stringNumber = String(someNumber);
console.log(stringNumber); 
console.log(typeof stringNumber); 

// ************************ Operations ******************************

let value =3;
let negValue = -value;
console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "Hello";
let str2 = " Samy";

let str3 = str1 + str2;
console.log(str3);

/* console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");
console.log( (3 + 2) * 5 % 3); */

console.log(+true);
console.log(+"");

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;
console.log(num1);

 let gameCounter = 100;
 gameCounter++;
 console.log(gameCounter);
