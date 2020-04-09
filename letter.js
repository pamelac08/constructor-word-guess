var Letter = function(character) {
  this.character = character;
  this.selected = false;
  this.display = function() {
    if (this.character === " ") {
      this.selected = true;
    }
    if (this.selected) {
      return this.character + " ";
    } else {
      return "_ ";
    }
  };
  this.guess = function(guess) {
    if (guess === this.character.toLowerCase()) {
      this.selected = true;
    }
  };
};

module.exports = Letter;
