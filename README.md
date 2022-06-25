Hangman

Basic game of hangman, using NODE Readline:

https://nodejs.org/api/readline.html

I built this as part of my process in learning JavaScript.

The game consists of:

1. Main Logic - hangmain.js
2. Game Art - game-art.js
3. version 2 - in progress to add another way to get random words.
4. package.json - necessary to add "type:" modules, for ES6 module imports

The pool of words uses a small words array and randomizes the selection.


#DEV

Features to add for version 2:

1. Implement the random-words package to increase the number
of available words. https://www.npmjs.com/package/random-words
2. Print name of word if you lose
3. Learn some Markup and still this README
4. ...


What I learned making this app:

1. I finally really understand the term callback hell! ;-)

This is a relatively small app as well, so I imagine it could get quite cumbersome, in a large app.
Especially so in this case since I am using JavaScript for display and display order as well and not
just logic.

2. The benefit of thoroughly thinking through your app design, to help structure the order of functions
and callbacks.

3. How building self contained modules could be helpful for reusablity as well as being able to more
clearly see what is happening in your code.
