import { title, gallows, missOne, missTwo, missThree, missFour, missFive, missSix, missSeven, winner, lose } from './game-art.js';

import * as readline from 'node:readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

// THIS VERSION USES A STARTER WORD ARRAY & MY RANDOM WORD SELECTOR FUNCTION

// Starts you out with an array of random words
let wordArr = ['hello', 'tree', 'random', 'cowboy', 'bank', 'gold',
'abyss', 'galaxy', 'transcript', 'subway', 'luxury', 'lucky', 'zebra',
'funny', 'heart', 'apple', 'baseball', 'temple', 'president', 'sapphire',
'mountain', 'shovel', 'pickle', 'flower', 'vault', 'stage', 'cookie'
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
    word = [];
    randomWord = randomWordSelector();
    gameLoop(0);
  })
}

// Selects a random word from the start array or an array passed in by the player
let randomWordSelector = (arr = wordArr) => {
  let min = 0
  let max = arr.length + 1;
  let randomIndex = Math.floor(Math.random() * (max - min) + min);

  let word =  arr[randomIndex];

  return word;

}
let randomWord = randomWordSelector();


// MAIN GAME LOOP
let word = [];

let gameLoop = (wrongGuessCount = 0, response = '', input = '') => {
  // Check for loser
  let checkForLose = () => {
    if (wrongGuessCount >= 7) {
      console.clear();
      console.log(lose);

      rl.question('\n\n' + 'Type "yes" to play again or "no" to exit: ', (answer) => {
        if (answer.toLowerCase() === 'yes') {
          console.clear();
          startGame();
        } else if (answer.toLowerCase() === 'no') {
          console.log('Have a great day! Please come play again another time' + '\n');
          rl.close();
        } else gameLoop();
      })
    }
  }
  checkForLose();

  // Asks for the user to guess a letter
  rl.question(`The word is ${randomWord.length} characters long.

Guess a letter: `, (userInput) => {
    input = userInput;

    if (!randomWord.includes(userInput)) {
      wrongGuessCount++;

      if (wrongGuessCount === 7) {
        gameLoop(wrongGuessCount, response, input);
      }
    }

  // Check for winner
  let checkForWin = () => {
    let count = '';

    word.forEach(letter => {
      // Check if each character is a letter
      if ((/[a-zA-Z]/).test(letter)) {
        count += letter;
      }
    })
    if (count.length === randomWord.length) {
      wrongGuessCount = 'win';

    }
  }
  checkForWin();


    // Generates a random response depending on the result of your guess
    let randomResponse = () => {
      if (randomWord.includes(userInput)) {
        response = `Right on, that's correct! There is a "${input}".` + '\n'
        console.log(`Right on, that's correct! There is an "${input}".` + '\n')
      } else if (!randomWord.includes(userInput)) {
        response = "Wrong! Uh oh, this isn't looking good for the prisoner!" + '\n'
        console.log("Wrong! Uh oh, this isn't looking good for the prisoner!" + '\n');
      }

      console.clear()
      gameLoop(wrongGuessCount, response, userInput);
    }

    randomResponse();

  });

  // Displays guessed letters or underscores for letters that still need to be guessed.
  let wordDisplay = () => {
    console.log('You can guess wrong six times before someone has a really bad day...' + '\n');
    console.log('Wrong Guess Count = ' + wrongGuessCount);


    if (word.length === 0) {
      randomWord.split('').forEach((letter, i) => {
        word[i] = '_ '
      })
    } else {
      randomWord.split('').forEach((letter, i) => {
        if (letter === input) {
          word[i] = letter;
        } else if (word[i] === undefined) {
          word[i] = "_ "
        }
      });
    }
    return word.join(' ');
  }
  let printWord = '  ' + wordDisplay() + '\n\n';

  // Consolidates the display variables (keeping as DRY as possible)
  let display = () => {
    console.log(printWord); // printers letters or underscores
    console.log(response);  // prints the response from the last guess
  }
  // Changes display art based on guess count
  switch (wrongGuessCount) {
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
      // console.clear();
      console.log(lose);
      checkForLose();
      break;
    case 'win':
      console.clear();
      console.log(winner);
      console.log('Congratulations, YOU WIN! You have saved a life today!' + '\n\n');
      rl.close();
      break;
    default:
      gameLoop();
  }

}

startGame();
