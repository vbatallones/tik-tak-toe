![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# Levin Tic Tac Toe 

# OBJECTIVES
*
### Technologies
1. HTML
3. CSS
2. JavaScript

## CODE SNIPPET
``` HTML
  <div class='container'>
    <h1>Tic Tac Toe</h1>
      <div class='board'>
       <div class='cell'></div>
       <div class='cell'></div>
       <div class='cell'></div>
       <div class='cell'></div>
       <div class='cell'></div>
       <div class='cell'></div>
       <div class='cell'></div>
       <div class='cell'></div>
       <div class='cell'></div>
      </div>
    </div>
```
I wrap everything on my div container and inside of that is my cell and input text,
and button that I can have access on my CSS and JS.


```CSS
  .board {
    display: grid;
    grid-template-column: repeat(3, 1fr);
    grid-template-row: repeat(3, 1fr);
    grid-gap: 15px;
  }
  .cell {
    display: flex;
    justify-content: center;
    items-align: center;
    cursor: pointer;
  }
```
In order to make a board template for my game, I did the display grid
make a 3 equal column and row.

I struggle on aligning the Text on the board.

```JS
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
```
I call all my element through DOM and manipulate it by using the const varibale.
This is my conditional function to make the input text to show on the game.
**gameOngoing** is telling that if you are still playing it will be true.
**xTurn** is saying that it's player1 turn and if it false it is the player 2 turn.
**champion** letting you know who won and it is all conncected with my whosWinner function.


```JS
    
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
```
This my condition on the winning rows and diagonals with a **TIE** condition as well.
Nested if else inside the else. Declaring who's turn it is.

Building more on of understanding the logic of not just the game but in general, and how syntax connect each other.