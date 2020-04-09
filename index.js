// figure out how to not display the "yay correct/no incorrect" on the last guess when user wins/loses

var inquirer = require("inquirer");
var Word = require("./word.js");

var words = [
  "The Twilight Zone",
  "I Love Lucy",
  "Game of Thrones",
  "Seinfeld",
  "Parks and Recreation",

  "Star Trek",
  "Band of Brothers",
  "In Living Color",
  "The Office",
  "Friends",

  "Criminal Minds",
  "Freaks and Geeks",
  "Doctor Who",
  "Golden Girls",
  "Happy Days",

  "Downton Abbey",
  "The Brady Bunch",
  "Full House",
  "Saved by the Bell",
  "Gilmore Girls"
];

var guessCount = 10;
var guess;
var answerArray = [false];
var previousGuessArray = [];
var changes = false;
var correctLetters = [];
var incorrectLetters = [];

selectWord();

function selectWord() {
  console.log("\nGuess this popular TV show:");

  var wordRandom = words[Math.floor(Math.random() * words.length)];
  var wordArray = wordRandom.split("");

  currentWord = new Word(wordArray);
  currentWord.wordArray();
  currentWord.wordDisplay();

  guesses();
}

function guesses() {
  if (answerArray.includes(false)) {
    changes = false;

    if (guessCount > 0) {
      console.log("guesses left: " + guessCount + "\n");
      console.log("------------------------------");

      previousGuessArray = [];
      for (let i = 0; i < currentWord.wordArrayVar.length; i++) {
        previousGuessArray.push(currentWord.wordObject[i].selected);
      }

      inquirer
        .prompt([
          {
            type: "input",
            name: "guess",
            message: "Enter your guess"
          }
        ])
        .then(function(answer) {
          guess = answer.guess;

          var viableChoice = /[a-zA-Z]/gi;

          if (guess.length > 1) {
            console.log("\nPlease enter only one letter\n");
            console.log(currentWord.joinedArray + "\n");
            guesses();
          } else if (!viableChoice.test(guess)) {
            console.log("\nPlease enter a letter\n");
            console.log(currentWord.joinedArray + "\n");
            guesses();
          } else if (incorrectLetters.includes(guess)) {
            console.log("\nYou've already tried that one!\n");
            console.log(currentWord.joinedArray + "\n");
            guesses();
          } else if (correctLetters.includes(guess)) {
            console.log("\nYou've already selected that one!\n");
            console.log(currentWord.joinedArray + "\n");
            guesses();
          } else {
            currentWord.wordGuess(guess);

            checkIfComplete();
            checkIfChange();

            if (changes) {
              guesses();
            }
          }
        });
    } else {
      console.log("Oh no, you ran out of guesses\n");
      endGame();
    }
  } else {
    console.log("\nCongrats! You Won!\n");
    endGame();
  }
}

function checkIfChange() {
  for (let i = 0; i < currentWord.wordArrayVar.length; i++) {
    if (answerArray[i] !== previousGuessArray[i]) {
      changes = true;
      console.log("\nYay, you got one!");
      correctLetters.push(guess);
      return;
    }
  }
  incorrectLetters.push(guess);
  console.log("Oh no, try again!");
  guessCount--;

  guesses();
}

function checkIfComplete() {
  answerArray = [];

  for (let i = 0; i < currentWord.wordArrayVar.length; i++) {
    answerArray.push(currentWord.wordObject[i].selected);
  }

  for (let i = 0; i < currentWord.wordArrayVar.length; i++) {
    if (!answerArray[i]) {
      return;
    }
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
      if (answer.reset) {
        answerArray = [false];
        incorrectLetters = [];
        correctLetters = [];
        guessCount = 10;
        selectWord();
      } else {
        console.log("OK! See you next time!\n");
      }
    });
}
