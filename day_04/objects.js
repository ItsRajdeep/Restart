//singleton ....constructors
// Object.create

//object literals

const mySym = Symbol("key1"); // declaration of a symbol

const jsUser ={
    name : "Rajdeep",     // "name" : "Rajdeep"
    [mySym]:"newKey",    // use symbol as a key in object
    age : 20,
    isLoggedIn: false,
    lastLogginDay:["Monday,Friday"] 
}

//Objects have key-value pair like "key": value

//syntax to print object elements
// console.log(jsUser.name)
// console.log(jsUser["name"])


//How to lock the object 
Object.freeze(jsUser);

jsUser.name="raj"
console.log(jsUser.name) //Rajdeep

jsUser.greeting = ()=>{
     console.log("Hello");
}

jsUser.greeting(); 

/*
    we can't add keys in objects when we use Object.freeze;   
*/