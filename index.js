var inquirer = require("inquirer");
var Word = require("./word.js");

var words = [
  "tennis",
  "football",
  "volleyball",
  "soccer",
  "cricket",
  "basketball",
  "hockey",
  "baseball"
];

var guessCount = 10;
var checkArray = [];

selectWord();

function selectWord() {
  var wordRandom = words[Math.floor(Math.random() * words.length)];
  var wordArray = wordRandom.split("");
  console.log(wordArray);

  currentWord = new Word(wordArray);
  currentWord.wordArray();
  currentWord.wordDisplay();

  guesses();
}

function guesses() {
  if (guessCount > 0) {
    console.log("guess count: " + guessCount);

    inquirer
      .prompt([
        {
          name: "guess",
          message: "Enter your guess"
        }
      ])
      .then(function(answer) {
        console.log(answer.guess);
        currentWord.wordGuess(answer.guess);


        guessCount--;
        guesses();
      });
  } else {
    console.log("Oh no, you ran out of guesses");

    endGame();
  }
}

function endGame() {
inquirer
      .prompt([
        {
          type: "confirm",
          name: "reset",
          message: "Would you like to play again?"
        }
      ])
      .then(function(answer) {
        console.log(answer.reset);

        if (answer.reset) {
          guessCount = 10;
          selectWord();
        } else {
          console.log("OK! See you next time!");
        }
      });

    }