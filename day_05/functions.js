function callMyName(userName) {  //parameter
    console.log(`Hello ${userName} `)
}

callMyName("Rajdeep"); //argument

console.log(callMyName("Biswarup"))
//Hello Biswarup     is printed in console for the function call
//undefined    is printed because callMyName function doesn't return any value


function callMyAnotherName(userName) {  
    return `Hello ${userName} `
}

callMyAnotherName("Rajdeep"); 
//nothing is printed because function doesn't print anything it's return a string

console.log(callMyAnotherName("Biswarup"))//Hello Biswarup 


function addTwoNum(num1,num2) {
    console.log(`${num1 + num2}`)
}

addTwoNum(3,5) //8
addTwoNum(3,"a") //3a
addTwoNum(5,null)//5

/*

when we pass arguments function doesn't even specify their datatypes..

null is converted in 0

*/