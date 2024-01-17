 const name ="Rajdeep";
 const phoneNumber = 825021537;

 //console.log("My name is "+ name + "my phone no. is "+phoneNumber)
 //don't print strings like this

 console.log(`My name is ${name} and my phone number is ${phoneNumber}`);

 const gameName = new String('clash-of-clans'); //initialize String like this
 //the type of the gameName is Object

 console.log(typeof gameName);//object

 console.log(gameName[0]);//c

 console.log(gameName.length);//14
 console.log(gameName.toUpperCase())//CLASH-OF-CLANS
 console.log(gameName.charAt(2));//a 
 console.log(gameName.indexOf("h"));//4

 const newSt = gameName.substring(0,4);// don't accept negative value
 console.log(newSt);//clas
 const newSt2 = gameName.slice(1, 4); //accept negative value
 console.log(newSt2);//las



 const newString = "    rajdeep    ";
 console.log(newString); //    rajdeep    
 console.log(newString.trim()); //rajdeep

 const url = "https://rajdeep.com/rajdeep%20dey"

 console.log(url.replace('%20', '-'));//https://rajdeep.com/rajdeep-dey
 console.log(url.includes('sundar')) //false

 console.log(gameName.split('-'));//[ 'clash', 'of', 'clans' ]