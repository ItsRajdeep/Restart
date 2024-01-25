let string="";
let buttons=document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {

    button.addEventListener('click',(e)=>{

        if(e.target.innerHTML == "C"){
            string=""
            document.querySelector('input').value=string
        }
        else if(e.target.innerHTML=="="){
            string=eval(string);
            document.querySelector('input').value=string

        }
        else if(e.target.innerHTML=="x"){
            let multiply="*";
            string=string+multiply;
            document.querySelector('input').value=string
        }
        else if(e.target.innerHTML=="DEL"){
            string = string.toString().slice(0, -1)
            document.querySelector('input').value=string
        }
        else{
            string= string + e.target.innerHTML;
            document.querySelector('input').value=string
        }
    })
});