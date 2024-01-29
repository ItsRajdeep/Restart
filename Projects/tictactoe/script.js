let turn = "X"
let isgameover = false;


const changeTurn = ()=>{
    return turn === "X"? "O": "X"
}


const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
            // document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            document.getElementById("winningText").innerHTML= '" '+boxtext[e[0]].innerText+' "' + " Won"
            document.getElementById("gameBoard").style.display="none";
            document.getElementById("win").style.display="flex";
            console.log(boxtext[e[0]].innerText + " Won")
            isgameover = true

        }
    })
}


let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            checkWin();
        }
    })
})


const reset =document.getElementById("reset");
reset.addEventListener('click', ()=>{
    document.getElementById("gameBoard").style.display="grid";
    document.getElementById("win").style.display="none";
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X"; 
    isgameover = false

})

