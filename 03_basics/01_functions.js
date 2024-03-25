function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}
// sayMyName()

/* function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
} */


function addTwoNumbers(number1, number2){
    let result = number1 + number2;
    return result;
}
const result = addTwoNumbers(3, 5)
// console.log("Result: " , result);

function loginUserMessage(username = "sam"){
    if(username === undefined){
        console.log("Please Enter a username !!");
        return;
    }
    return `${username} jsut logged in !!`;
}

// console.log(loginUserMessage("Samy"))
console.log(loginUserMessage())