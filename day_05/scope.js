/* 
    every thing which is written in {    } is called local scope

    global scope is written outside of {   }
*/

var a=10;
let b=20;
const c=30;

if(true){
    var a=100;
    let b=200;
    const c=300;
console.log("Inner a: ",a)//100
console.log("Inner b: ",b)//200
console.log("Inner c: ",c)//300
}

console.log(a) //100
console.log(b)//20
console.log(c)//30



/*
    var is store the last value of that variable
    let,const is store the values in particular scope

*/




if(true){
    var a2=100;
    let b2=200;
    const c2=300;
console.log("Inner a: ",a)//100
console.log("Inner b: ",b)//200
console.log("Inner c: ",c)//300
}

console.log(a2) //100
console.log(b2)//error
console.log(c2)//error

//let , const does not access the local scope values

function parent(){
    const name =" Rajdeep";
    function child(){
        const email="xyz@gmail.com"
        console.log(name);
    }
    // console.log(eamil)//in parent scope we can't access child scope values
    child();//in child scope parent scope values are accessed
}

parent();
console.log(name)//error