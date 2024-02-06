const name = "Narayan Singh";
const age = 20;
console.log(`Hello my name is ${name} and my Age is ${age}`);


const gameName = new String("Narayan");
console.log(gameName);
console.log(gameName[0]);

console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.substring(0,4));
console.log(gameName.slice(-6,4));

const newStringOne = "            Amit Sharma        ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://samytech.in/narayan%20singh";
console.log(url.replace('%20','-'));

// Check value exist on that url or not
console.log(url.includes('singh')); 


/* NOTES
    1. In substring it will give you value from 0, 4 but not include the end value. Also it works only with positive values.

    2. In slice it will work same as substring but this will work with both positive & Negative values.

    3. Trim Refrence for MDN
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim
*/