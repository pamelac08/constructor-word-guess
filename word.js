var Letter = require("./letter.js");

var Word = function(word) {
  this.wordArrayVar = word;
  this.wordObject = [];
  this.display = [];
  this.joinedArray = [];
  this.wordArray = function() {
    for (i = 0; i < this.wordArrayVar.length; i++) {
      var letter = this.wordArrayVar[i];
      this.wordObject.push(new Letter(letter));
    }
  };

  this.wordDisplay = function() {
    for (i = 0; i < this.wordArrayVar.length; i++) {
      this.display.push(this.wordObject[i].display());
    }
    var joinedArray = this.display.join("");
    console.log("\n" + joinedArray + "\n");
  };

  this.wordGuess = function(guess) {
    guess = guess.toLowerCase().trim();

    this.display = [];

    for (i = 0; i < this.wordArrayVar.length; i++) {
      this.wordObject[i].guess(guess);
      this.display.push(this.wordObject[i].display());
    }
    this.joinedArray = this.display.join("");
    console.log("\n" + this.joinedArray + "\n");
  };
};

module.exports = Word;
