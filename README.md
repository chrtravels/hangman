Hangman

Basic game of hangman, using NODE Readline:

https://nodejs.org/api/readline.html


The game consists of:

1. Main Logic - hangmain.js
2. Game Art - game-art.js
3. package.json - necessary to add "type:" modules, for ES6 module imports

The pool of words uses a small words array and randomizes the selection.


#DEV

Features to add for version 2:

1. Implement the random-words package to increase the number
of available words. https://www.npmjs.com/package/random-words
2. Print name of word if you lose
3. ...
