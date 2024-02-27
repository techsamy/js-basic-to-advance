// object liternals : When we defined like liternal then at that time it is NOT created like "singleton"


// Object.create; // this is a constructor method, Singleton is created on this one, when we are using this constructor method.

// how to use Symbol in a ojbect.
const mySym = Symbol("key1");

const jsUser = {
    name         : "Narayn",
    "full name"  : "Narayan singh",
    [mySym]        : "myKey1",
    age          : 25,
    location     : "Delhi",
    email        : "learnsamy@gmail.com",
    isLoggedIn   : false,
    lastLoginDays: ["Monday", "Saturday"]
};

console.log(jsUser.email);
console.log(jsUser["full name"]);
console.log(jsUser[mySym]);

jsUser.email = "samy@gmail.com";
// Object.freeze(jsUser);
jsUser.email = "samy@tesla.com";
console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello Js user !!");
}

jsUser.greetingTwo = function(){
    console.log(`Hello Js user , ${this.name} !!`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());


/* NOTES:

    object can be access by using (.) & ([]) both.
*/