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
// Object.freeze(jsUser);

jsUser.name="raj"
console.log(jsUser.name) //Rajdeep

jsUser.greeting = ()=>{
     console.log("Hello"); 
}

jsUser.greeting(); 

/*
    we can't add keys in objects when we use Object.freeze;   
*/


// adding two objects
const obj1 ={
    1:"a",
    2:"b"
}
const obj2 ={
    3:"a",
    4:"b"
}

const obj3 = Object.assign({}, obj1 , obj2)

console.log(obj3)

//{} is the target and rest of the things are source

const obj4={...obj1, ...obj2}

console.log(obj4)

console.log(Object.keys(obj1));
console.log(Object.values(obj1));

const user =[
    {
        name:"Rajdeep"
    },
    {
        email:"raj@gmail.com"
    },
    {
        num:1234567891
    }
]
const a= user[0].name
console.log(a);