var Letter = require("./letter.js");


var Word = function (word) {
 this.wordArrayVar = word; 
 this.wordObject = []; 
 this.display = [];
 this.joinedArray = [];
 this.wordArray = function () {
    for (i = 0; i < this.wordArrayVar.length; i++) {
        var letter = this.wordArrayVar[i];
        this.wordObject.push(new Letter(letter))
    }
 }

 this.wordDisplay = function () {
    for (i = 0; i < this.wordArrayVar.length; i++) {
    // console.log(this.wordObject[i].display());
    this.display.push(this.wordObject[i].display())
   
    }
    var joinedArray = this.display.join("");
    console.log("worddisplay:" + joinedArray);
 }

 this.wordGuess = function(guess) {

    this.display = [];

    for (i = 0; i < this.wordArrayVar.length; i++) {
        this.wordObject[i].guess(guess);
        // this.wordObject[i].display();
        this.display.push(this.wordObject[i].display())
        // this.display.push(placeholder);
        // this.display.join("");
        }
        this.joinedArray = this.display.join("");
        console.log("worddisplay:" + this.joinedArray);
    }
    
}



module.exports = Word;