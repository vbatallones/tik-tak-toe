const actionDiv = document.querySelector('.status');
const againDiv = document.querySelector('.restartButton');
const boardDiv = document.querySelectorAll('.cell')

let gameOnGoing = true;
let xTurn = true;
let champion = null;

const whosWinner = (char) => {
    gameOnGoing = false;
    champion = char;
    if (char === 'x') {
        actionDiv.innerHTML = `${gameSymbols(player1)} has won!`
       
    } else {
        actionDiv.innerHTML = `${gameSymbols(player2)} has won!`
    
    }
}

//game symbol 
let player1 = 'x';
let player2 = 'o';
const gameSymbols = (character) => character === 'x' ? player1 : player2
const checkGame = () => {
    const one = boardDiv[0].classList[2];
    const two = boardDiv[1].classList[2];
    const three = boardDiv[2].classList[2];
    const four = boardDiv[3].classList[2];
    const five = boardDiv[4].classList[2];
    const six = boardDiv[5].classList[2];
    const seven = boardDiv[6].classList[2];
    const eight = boardDiv[7].classList[2];
    const nine = boardDiv[8].classList[2];
    
if (one && one === two && one === three) {
    whosWinner(one);
} else if (four && four === five && four === six) {
    whosWinner(four);
} else if (seven && seven === eight && seven === nine) {
    whosWinner(seven);
} else if (one && one === four && one === nine) {
    whosWinner(one);
} else if (two && two === five && two === eight) {
    whosWinner(two);
} else if (three && three === six && three === nine) {
    whosWinner(three);
} else if (one && one === five && one === nine) {
    whosWinner(one);
} else if (three && three === five && three === seven) {
    whosWinner(three);
} else if (one && two && three && four && five && six && seven && eight && nine) {
    gameOnGoing = false;
    actionDiv.innerHTML = "it's a TIE!!"
} else {
    xTurn = !xTurn;
    if (xTurn) {
        actionDiv.innerHTML = `it's ${player1} turn`
    } else {
        actionDiv.innerHTML = `it's ${player2} turn`
    }
} 
}
const resetGame = () => {
    
    xTurn = true;
    champion = null;
    actionDiv.innerHTML =  "Let's do this!";
    for (const cells of boardDiv) {
        cells.classList.remove('x');
        cells.classList.remove('o');
    }
};
const clickCell = (e) => {
    const listOfCell = e.target.classList;
    
    if (listOfCell[2] === 'x' || listOfCell[2] === 'o') {
        return;
    }
    if (xTurn) {
        listOfCell.add('x');
        checkGame();
    } else {
        listOfCell.add('o');
        checkGame();
    }
}
againDiv.addEventListener('click', resetGame)

for (const boardCell of boardDiv) {
   boardCell.addEventListener('click', clickCell)
}
