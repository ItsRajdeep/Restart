//Primitive datatypes are stored in stack memory
//Non-primitive datatypes are stored in Heap memory

let myName = "Rajdeep"

let anotherName = myName

anotherName = "Raj"

console.log(myName)//Rajdeep
console.log(anotherName)//Raj

let userOne = {
    email : "xyz@gmail.com",
    fname : "Rajdeep" 
}

let userTwo = userOne;

userTwo.email = "abc@gmail.com"

console.log(userOne)//{ email: 'abc@gmail.com', fname: 'Rajdeep' }
console.log(userTwo)//{ email: 'abc@gmail.com', fname: 'Rajdeep' }