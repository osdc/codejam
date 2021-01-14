import { items } from "./wordsObj.js";

const elements = {
  newBtn: document.querySelector(".new-btn"),
  figureOne: document.querySelector(".figure-1"),
  figureSecond: document.querySelector(".figure-2"),
  hintText: document.querySelector(".hint"),
  jumbledWord: document.querySelector(".jumbled-word"),
  playerOnePanel: document.querySelector(".player-1-section"),
  playerSecondPanel: document.querySelector(".player-2-section"),
  rodFigureOne: document.querySelectorAll(".rod-part-1"),
  rodFigureSecond: document.querySelectorAll(".rod-part-2"),
  scoreOne: document.querySelector(".score-1"),
  scoreSecond: document.querySelector(".score-2"),
  wordOne: document.querySelector(".word-1"),
  wordSecond: document.querySelector(".word-2"),
  wrongOne: document.querySelector(".wrong-container-1"),
  wrongSecond: document.querySelector(".wrong-container-2"),
};

const len = Object.keys(items).length;
let n = Math.ceil(Math.random() * len); //randomly choosing a number in [0,len]
let word = "word" + n;

let score,
  activePlayer,
  isGame,
  correctLettersOne = [],
  wrongLettersOne = [],
  correctLettersSecond = [],
  wrongLettersSecond = [];

//TO PICK RANDOM WORDS FROM THE OBJECT

const wordGenerator = (n, word) => {
  elements.jumbledWord.innerText = items[word][2];
};

//TO DISPLAY HINT

const hintGenerator = (n, word) => {
  elements.hintText.innerText = items[word][3];
};

//CHECK WINNER

const updateScore = (el) => {
  console.log(el);
  if (score[el - 1] <= 1) {
    score[el - 1] += 1;
  }
  displayScore();
};

//DISPLAY WORD FOR PLAYER 1 AND CHECK IF IT WON

const displayWordOne = (n, word) => {
  elements.wordOne.innerHTML = `
    ${items[word][0]
      .split("")
      .map(
        (el) => `
            <span class="letter">
            ${correctLettersOne.includes(el) ? el : ""}
            </span>       
        `
      )
      .join("")}`;

  const innerWord = elements.wordOne.innerText.replace(/\n/g, "");
  const selectedWord = items[word][0].toUpperCase();
  if (innerWord === selectedWord) {
    elements.newBtn.style.display = "block";
    updateScore(activePlayer);
    isGame = false;
  }
};

//DISPLAY WORD FOR PLAYER 2 AND CHECK IF IT WON

const displayWordSecond = (n, word) => {
  elements.wordSecond.innerHTML = `
      ${items[word][1]
        .split("")
        .map(
          (el) => `
              <span class="letter">
              ${correctLettersSecond.includes(el) ? el : ""}
              </span>       
          `
        )
        .join("")}`;

  const innerWord = elements.wordSecond.innerText.replace(/\n/g, "");
  const selectedWord = items[word][1].toUpperCase();
  if (innerWord === selectedWord) {
    elements.newBtn.style.display = "block";
    updateScore(activePlayer);
    isGame = false;
  }
};

//WRONG LETTER HANDLER

const wrongFunction = () => {
  if (activePlayer === 1) {
    elements.wrongOne.innerHTML = `
    ${
      wrongLettersOne.length > 0
        ? wrongLettersOne
            .map((el) => `<span class="wrong-span">${el}</span>`)
            .join("")
        : ""
    }
    `;

    elements.rodFigureOne.forEach((el, index) => {
      if (index < wrongLettersOne.length) {
        el.style.display = "none";
      } else {
        el.style.display = "block";
      }
    });
    if (wrongLettersOne.length === 4) {
      isGame = false;
      elements.newBtn.style.display = "block";
    }
  } else if (activePlayer === 2) {
    elements.wrongSecond.innerHTML = `
    ${
      wrongLettersSecond.length > 0
        ? wrongLettersSecond
            .map((el) => `<span class="wrong-span">${el}</span>`)
            .join("")
        : ""
    }
    `;

    elements.rodFigureSecond.forEach((el, index) => {
      if (index < wrongLettersSecond.length) {
        el.style.display = "none";
      } else {
        el.style.display = "block";
      }
    });
    if (wrongLettersSecond.length === 4) {
      isGame = false;
      elements.newBtn.style.display = "block";
    }
  }
};

//SHIFT TO NEXT PLAYER

const nextPlayer = () => {
  activePlayer === 1 ? (activePlayer = 2) : (activePlayer = 1);
  let inactivePlayer;
  activePlayer === 1 ? (inactivePlayer = 2) : (inactivePlayer = 1);

  document
    .querySelector(".player-" + activePlayer + "-section")
    .classList.remove("inactive");
  document
    .querySelector(".player-" + inactivePlayer + "-section")
    .classList.add("inactive");
};

//EVENT LISTENER FOR KEYS PRESSED

window.addEventListener("keydown", (e) => {
  if (isGame) {
    if (e.keyCode >= 65 && e.keyCode <= 90) {
      const letter = e.key;

      if (activePlayer === 1) {
        if (items[word][0].includes(letter)) {
          if (!correctLettersOne.includes(letter)) {
            correctLettersOne.push(letter);
            displayWordOne(n, word);
          } else {
            return;
          }
        } else {
          if (!wrongLettersOne.includes(letter)) {
            wrongLettersOne.push(letter);

            wrongFunction();
          } else {
            return;
          }
        }
      } else if (activePlayer === 2) {
        if (items[word][1].includes(letter)) {
          if (!correctLettersSecond.includes(letter)) {
            correctLettersSecond.push(letter);
            displayWordSecond(n, word);
          } else {
            return;
          }
        } else {
          if (!wrongLettersSecond.includes(letter)) {
            wrongLettersSecond.push(letter);

            wrongFunction();
          } else {
            return;
          }
        }
      }
      nextPlayer();
    }
  }
});

//DISPLAY SCORE

const displayScore = () => {
  elements.scoreOne.textContent = score[0];
  elements.scoreSecond.textContent = score[1];
};

const valueGenerator = () => {
  wordGenerator(n, word);
  hintGenerator(n, word);
  displayWordOne(n, word);
  displayWordSecond(n, word);
};

//CHECK IF A LETTER IS CORRECT

const init = () => {
  score = [0, 0];
  activePlayer = 1;
  isGame = true;
  valueGenerator();
  elements.scoreOne.innerText = "0";
  elements.scoreSecond.innerText = "0";
  elements.playerSecondPanel.classList.add("inactive");
};

init();

const newGame = () => {
  //TO RESET VALUES FOR A NEW GAME
  isGame = true;
  correctLettersOne.splice(0);
  wrongLettersOne.splice(0);
  correctLettersSecond.splice(0);
  wrongLettersSecond.splice(0);

  n = Math.ceil(Math.random() * len);
  word = "word" + n;
  valueGenerator();
  for (let i = 1; i <= 2; i++) {
    //RUN WRONG FUNCTION FOR BOTH PLAYERS
    activePlayer = i;
    wrongFunction();
  }
  nextPlayer();
  elements.newBtn.style.display = "none";
};

elements.newBtn.addEventListener("click", newGame);
