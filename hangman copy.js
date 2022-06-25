import { title, gallows, missOne, missTwo, missThree, missFour, missFive, missSix, missSeven, winner } from './game-art.js';

import * as readline from 'node:readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

// Starts you out with an array of random words
let wordArr = ['hello', 'tree', 'random', 'cowboy', 'bank', 'gold',
'abyss', 'galaxy', 'transcript', 'subway', 'luxury', 'lucky', 'zebra',
'funny', 'heart', 'apple', 'baseball', 'temple'
]

// Welcomes the player and initiates the game
let startGame = () => {
  console.log(title);

  console.log(`
  Welcome to the classic game, Hangman!
  Guess the word and save a life. If you miss six times,
  someone is going to have a very bad day...
  `);

  rl.question('Grab your gear and press "Enter" when you are ready to ride!', (answer) => {
    console.log("Let's go!");
    console. clear()
    gameLoop();
  })
}

// Selects a random word from the start array or an array passed in by the player
let randomWordSelector = (arr = wordArr) => {
  let min = 0
  let max = arr.length + 1;
  let randomIndex = Math.floor(Math.random() * (max - min) + min);

  let word =  arr[randomIndex];
  console.log(word);
  return word;

}
let randomWord = randomWordSelector();


// Game loop
let gameLoop = (guessCount = 0, response = '', input = '') => {

  console.log('guessCount = ' + guessCount);


  // Displays guessed letters or underscores for letters that still need to be guessed.
  let wordDisplay = () => {
    let word = '';

    if (guessCount.length === 0) {
      for (let letter of randomWord) {
        // process.stdout.write('_ ');
        word += '_ ';
      }
    } else {
      for (let letter of randomWord) {
        if (letter == input) {
          word += input + ' ';
        } else word += '_ ';
      }
    }
    return word;
  }
  let printWord = '  ' + wordDisplay() + '\n\n';
  console.log(printWord);

  // Consolidates the display variables
  let display = () => {
    console.log(printWord); // printers letters or underscores
    console.log(response);  // prints the response from the last guess
  }

  switch (guessCount) {
    case 0:
      console.log(gallows);
      console.log(printWord);
      break;
    case 1:
      console.log(missOne);
      display();
      break;
    case 2:
      console.log(missTwo);
      display();
      break;
    case 3:
      console.log(missThree);
      display();
      break;
    case 4:
      console.log(missFour);
      display();
      break;
    case 5:
      console.log(missFive);
      display();
      break;
    case 6:
      console.log(missSix);
      display();
      break;
    case 7:
      console.log(missSeven);
      display();
      break;
  }



  rl.question(`The word is ${randomWord.length} characters long.

Guess a letter: `, (userInput) => {
    input = userInput;

    if (!randomWord.includes(userInput)) {
      guessCount++;
    }

    // Generates a random response depending on the result of your guess

    let randomResponse = (input) => {

      if (randomWord.includes(input)) {
        response = `Right on, that's correct! There is an ${input}.` + '\n'
        console.log(`Right on, that's correct! There is an ${input}.` + '\n')
      } else if (!randomWord.includes(input)) {
        response = "Wrong! Uh oh, this isn't looking good for the prisoner!" + '\n'
        console.log("Wrong! Uh oh, this isn't looking good for the prisoner!" + '\n');
      }

      console. clear()
      gameLoop(guessCount, response, input);
    }

    randomResponse(userInput);


  });

}



startGame();
