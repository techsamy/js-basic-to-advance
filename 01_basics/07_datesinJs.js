// Dates
let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);

let myCreatedDate = new Date(2024, 2, 19); //Date
console.log(myCreatedDate.toDateString());

let myCreatedDateTime = new Date(2024, 2, 19, 5, 3); //Date  & time
console.log(myCreatedDateTime.toLocaleString());

// let myCreatedDateTimeCustom = new Date("2024-02-19"); //yy-mm-dd
let myCreatedDateTimeCustom = new Date("02-19-2024"); //mm-dd-yy
console.log(myCreatedDateTimeCustom.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDateTimeCustom.getTime());

// Convert in seconds
console.log(Math.floor(Date.now()/1000));


let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());


newDate.toLocaleDateString('default', {
    weekday: "long",
})

console.log(newDate);

/* NOTES:
1. Date is a object in a javascript.
*/