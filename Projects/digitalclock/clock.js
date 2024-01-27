setInterval(() => {
    
    let date = new Date();
    let day =date.getDay();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let d = date.getDate();
let months =date.getMonth()+1;
let years = date.getFullYear();


const days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
let dayName=days[day];

document.getElementById("day").innerHTML=dayName;


if(hours < 10){
 document.getElementById("meridian").innerHTML="AM"
 document.getElementById("hour").innerHTML="0"+ hours;
}
else if(hours<=12){
    document.getElementById("meridian").innerHTML="AM"
    document.getElementById("hour").innerHTML=hours;
}
else{
    document.getElementById("meridian").innerHTML="PM"   
    document.getElementById("hour").innerHTML=hours-12;  
}


document.getElementById("minute").innerHTML=minutes;


if(seconds<10){
    document.getElementById("second").innerHTML="0"+seconds;
}
else{
    document.getElementById("second").innerHTML=seconds;
}


if(d<10){
    document.getElementById("date").innerHTML="0"+d;
}
else{
    document.getElementById("date").innerHTML=d;
}


if(months<10){
    document.getElementById("month").innerHTML="0"+months;
}
else{
    document.getElementById("month").innerHTML=months;
}

document.getElementById("year").innerHTML=years;


}, 1000);