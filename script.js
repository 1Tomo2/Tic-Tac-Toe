"use strict";
//  * Selecting
let boxes = document.querySelectorAll(".box");
let restart = document.querySelector("#restartBtn");
let title = document.querySelector("#playerText");

let o = "O";
let x = "X";
let currentPlayer = x;

let spaces = Array(9).fill(null);

// ? Winning Combinations

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
];

// & Start Game
const startGame = () => {
  boxes.forEach((box) => box.addEventListener("click", boxClick));
};

// ^ Start Game Function (clicked box)

function boxClick(e) {
  let id = e.target.id;

  if (!spaces[id]) {
    spaces[id] = currentPlayer;
    e.target.innerText = currentPlayer;

    if (playerHasWon() !== false) {
      let winning_blocks = playerHasWon();
      winning_blocks.forEach((block) => {
        console.log(block);
        boxes[block].style.backgroundColor = "black";
        title.innerText = `${currentPlayer} has won`;
      });
    }
    // ? Switch Player
    currentPlayer = currentPlayer == x ? o : x;
  }
}

// ! Player Has Won
function playerHasWon() {
  for (const comb of winningCombos) {
    let [a, b, c] = comb;
    console.log(a, b, c);
    if (spaces[a] && spaces[a] == spaces[b] && spaces[a] == spaces[c]) {
      return [a, b, c];
    }
  }
  return false;
}

// & Restart Game
restart.addEventListener("click", restartF);
// ^ Restart Function
function restartF() {
  spaces.fill(null);
  boxes.forEach((box) => {
    box.innerText = "";
    box.style.backgroundColor = "";
    title.innerText = "Tic Tac Toe By Tomo";
  });
}
startGame();
