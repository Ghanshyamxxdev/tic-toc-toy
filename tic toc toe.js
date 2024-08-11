let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContanier = document.querySelector(".msg-contanier");
let msg = document.querySelector("#msg");

let turno = true;


const winpatterns = [
    [1 ,1, 2],
    [1, 3, 6],
    [1, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener('click',()=> {

    
        console.log("box was clicked");
        if(turno){
            box.innerText = "o";
            turno = false;
        }else{
            box.innerText = "x";
            turno = true;
  }
  box.disabled = true;
  checkWinner();
});
});

const showWinner = (winner) => {
msg.innerText = `congratulations, winner is ${winner}`;
msgContanier    .classList.remove("hide");
}

  const checkWinner = () => {
    for (let pattern of winpatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("winner", pos1val);
                showWinner(pos1val);
        
            }
        }
  
    }

    };