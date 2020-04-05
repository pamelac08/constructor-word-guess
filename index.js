// still need to fix displaying the "current word" after entering more than one letter or something besides a letter
// still need to add a "incorrect letters" array and either display letters or not let user select a previously selected letter
    // or let a previously selected correct answer be counted as incorrect (create two more arrays for 'guessed correct' and 'guessed incorrect')



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
var answerArray = [false];
var previousGuessArray = [];
var changes = false;

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

  
    if (answerArray.includes(false)) {
    
    changes = false;

  if (guessCount > 0) {
    console.log("guesses left: " + guessCount);

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
          var guess = answer.guess;
        console.log(guess);

        var viableChoice = /[a-zA-Z]/gi;

        if (guess.length > 1) {
            console.log("Please enter only one letter")
            guesses();
        }
        else if (!viableChoice.test(guess)) {
            console.log("Please enter a letter");
            guesses();
        }
        else {

        currentWord.wordGuess(guess);

        checkIfComplete();
        checkIfChange();

        if (changes) {
            guesses();
        }
        }
      });
  } else {
    console.log("Oh no, you ran out of guesses");
    endGame();
  }
}
else {
    endGame();
}
}

function checkIfChange() {

    for (let i = 0; i < currentWord.wordArrayVar.length; i++) {

        if (answerArray[i] !== previousGuessArray[i]) {
            changes = true;
            return
        }
    };
    guessCount--;
    guesses();
}

function checkIfComplete ()  {

    answerArray =  [];

    for (let i = 0; i < currentWord.wordArrayVar.length; i++) {
        answerArray.push(currentWord.wordObject[i].selected);
    }

    for (let i = 0; i < currentWord.wordArrayVar.length; i++) {

        if (!answerArray[i]) {  
            return
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
        console.log(answer.reset);
        
        if (answer.reset) {
            answerArray = [false];
          guessCount = 10;
          selectWord();
        } else {
          console.log("OK! See you next time!");
        }
      });

    }