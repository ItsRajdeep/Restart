function addNumbersInCart(...num){   //rest operator
    // console.log(`${num}`);
    return `${num}`
}

console.log(addNumbersInCart(200,300,100));
//we use rest operator when we don't know how many values will passed 

function user(userName) {
    console.log(`Name is ${userName.name} and email is ${userName.email}`)

}

user({
    name:"Rajdeep",
        email:"xyz@gmail.com"
})


function returnSecondValue(getArray){
    console.log(getArray[1]);
}

returnSecondValue([100,200,"b",null])
