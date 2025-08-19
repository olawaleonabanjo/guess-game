'use strict';

let number = Math.trunc(Math.random() * 30) + 1;
let score = 10;
let highscore = 0;

 document.querySelector('.check').addEventListener('click', function() {
    const guess = document.querySelector('.guess').value;
    console.log(guess);


        //When there is no input
    if (!guess) {
        document.querySelector('.start').textContent = '🚫No guess';

        //when the player wins
    }else if (guess == number) {
        document.querySelector('.start').textContent = '👏Correct guess';
        document.querySelector('.number').textContent = number;
        document.querySelector('.main-container').style.backgroundColor = '#60b347';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

        //when guess is too high
    } else if (guess > number) {

        if(score > 0) {
            document.querySelector('.start').textContent = '📈Too high';
        score--;
        document.querySelector('.scores').textContent = score;
        } else{
            document.querySelector('.start').textContent = '😢You lost';
        }

        //when guess is too low
    }else if (guess < number) {
        if(score>0) {
            document.querySelector('.start').textContent = '📉Too low';
            score--;
            document.querySelector('.scores').textContent = score;
        } else{
            document.querySelector('.start').textContent = '😢You lost';
        }
    }
});

document.querySelector('.try').addEventListener('click', function() {
    score = 10;
    number = Math.trunc(Math.random() * 30) + 1;
    document.querySelector('.start').textContent = '🎲Start guessing...';
    document.querySelector('.scores').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('.main-container').style.backgroundColor = 'rgb(109, 222, 213)';
});
