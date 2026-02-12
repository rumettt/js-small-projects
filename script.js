'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'correct number';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
}
  .querySelector('.check')
  .addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
      displayMessage('no number');
    } else if (guess === secretNumber) {
      displayMesssage('correct number');

      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
      document.querySelector('body').style.backgroundColor = '#60b347';

      document.querySelector('.number').textContent = secretNumber;

      document.querySelector('.number').style.width = '30rem';
    } else if (guess !== secretNumber) {
      if (score > 1) {
        score--;
        document.querySelector('.score').textContent = score;
        displayMessage((guess = secretNumber ? 'too high' : 'too low'));
      }
    } else {
      displayMessage('you lost the game');
      document.querySelector('.score').textContent = 0;
    }
  });

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  let secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('start guessing.....');
  document.querySelector('.number').textContent = '?';

  document.querySelector('.guess').value = '';

  document.querySelector('.body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
