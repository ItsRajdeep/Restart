// fundamentals of conversion operation..


/*

 Number => to change the type into number
 String => to change the type into string
 Boolean=> to change the type into boolean

 */
//Number..

let value = "Rajdeep"

let valueInNumber = Number(value);

console.log(typeof value); //string
console.log(typeof valueInNumber); //number
console.log(valueInNumber); //NaN


/*

We can convert a string type into a number type by using Number().
But when we print the variable which is converted from string to number ,it shows NaN(Not a Number)..
 
string => NaN
true => 1, false => 0
null => 0
undefined => NaN

*/


 //String

let number = 33

let numberInString = String(number);
console.log(typeof numberInString);//String
console.log(numberInString);//33


let isBoolean = true

let isBooleanInString= String(isBoolean);
console.log(typeof isBooleanInString);//String
console.log(isBooleanInString);//true


let empty = null

let emptyInString = String(empty)
console.log(typeof emptyInString);//String
console.log(emptyInString);//null



let declaration = undefined

let declarationInString =String(declaration);
console.log(typeof declarationInString);//String
console.log(declarationInString);//undefined



//Boolean

let num = 33

let numInBoolen = Boolean(num);
console.log(typeof numInBoolen);//boolean
console.log(numInBoolen);//true
//num = 0 => false

let fname ="Rajdeep"

let fnameInBoolean= Boolean(fname);
console.log(typeof fnameInBoolean);//boolean
console.log(fnameInBoolean);//true
//fname = "" => false


let empty2 = null

let emptyInBoolean = Boolean(empty2)
console.log(typeof emptyInBoolean);//boolean
console.log(emptyInBoolean);//false



let declaration2 = undefined

let declarationInBoolean =Boolean(declaration2);
console.log(typeof declarationInBoolean);//boolean
console.log(declarationInBoolean);//false