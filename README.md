# Constructor Word Guess
Coding Bootcamp
Unit 11 : Javascript Constructors and Callbacks


###  Technical Description

* Overview:
This app is a Word Guess Command-Line Input game.

* How it works

    - user runs index.js file in node
    - a word is randomly selected by the program and displayed on the terminal
    - user is prompted to guess a letter to complete the word
    - user has 10 guesses to complete the word
    - every correct letter guessed, the letter will show up in the displayed word array and user is prompted to guess another letter
    - every incorrect letter guessed, the guess count is decremented and user is prompted to guess another letter
    - if user guesses a previously guessed letter (either correct or incorrect), enters more than one letter at a time, or enters anything besides a letter: the program will display the error and prompt the user to guess another letter without decrementing the guess count

User wins if the entire word is completed before the guess count gets to zero and is prompted if they want to play again.

User loses if they run out of guesses before completing the entire word and is prompted to play again.


* Technologies used:

    - Inquirer prompt method
    - NPM packages
    - JS constructors (including export and require)
    - Javascript/jQuery 
       - data validation
       - conditional statements
       - for loops


* Technical Approach:

    - User input is received using the inquirer npm package
    - Contains three files:

        * Letter.js: Containing the *Letter* constructor 
            - This constructor display either the letter or a blank placeholder, depending on whether or not the user has guessed the letter 
            * This constructor should define:
                - A string value to store the underlying character for the letter
                - A boolean value that stores whether that letter has been guessed yet
                - A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
                - A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly

        * Word.js: Containing the *Word* constructor 
            - The Word constructor depends on the Letter constructor and is used to create an object representing the current word the user is attempting to guess 
            * This constructor defines:
                - An array of new Letter objects representing the letters of the underlying word
                - A function that returns a string representing the word. This should call the function on each letter object that displays the character or an underscore and concatenate those together.
                - A function that takes a character as an argument and calls the guess function on each letter object

        * index.js: The file containing the logic for the course of the game
            - depends on Word constructor
            - Randomly selects a word and uses the Word constructor to store it
            - Prompts the user for each guess and keeps track of the user's remaining guesses

    - Letter.js should not require any other files.
    - Word.js should only require Letter.js



Gif displaying all errors with messaging and winning the game
![Gif-withErrorsWin](./gifs/constructor_wordGuess_errors_win.gif)

Gif displaying a losing game
![Gif-withLose](./gifs/constructor_wordGuess_lose.gif)
