'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct number! 🎉🎉';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
*/

//My solution to the game
function getLottery() {
  return Math.trunc(Math.random() * 20 + 1);
}

let lottery = getLottery();
let score = 20;
let highScore = 0;
console.log(`${lottery} is the lottery number`);

function displayMessage(message, score) {
  document.querySelector('.message').textContent = message;
  document.querySelector('.score').textContent = score;
}

document.querySelector('.check').addEventListener('click', function () {
  const assumption = Number(document.querySelector('.guess').value);
  if (!assumption) {
    displayMessage('⛔ No number!', score);
  } else if (assumption === lottery) {
    displayMessage('Correct number! 🎉🎉', score);
    document.querySelector('.number').textContent = lottery;
    highScore = score > highScore ? score : highScore;
    document.querySelector('.highscore').textContent = highScore;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else if (assumption !== lottery) {
    score--;
    if (score > 0) {
      displayMessage(
        assumption > lottery ? '📈 Too high!!' : '📉 Too low!!',
        score
      );
    } else {
      if (score === 0) {
        displayMessage('You lost the game💥', score);
        document.querySelector('body').style.backgroundColor = 'red';
      }
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  lottery = getLottery();
  console.log(`${lottery} is the lottery number`);
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('.guess').value = ''; // input field we use value property
  document.querySelector('.number').style.width = '15rem';
});

// const secretNumber = Math.trunc(Math.random() * 20 + 1);
// document.querySelector('.number').textContent = secretNumber;

// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);

//   if (!guess) {
//     // when guess is 0 it is considered as a falsy value and so this block is executed when the input is empty and the user click on check button
//     document.querySelector('.message').textContent = '⛔ No number!';
//   } else if (guess === secretNumber) {
//     document.querySelector('.message').textContent = 'Correct number! 🎉🎉';
//   }
// });
