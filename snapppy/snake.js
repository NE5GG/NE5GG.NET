const audioElement = document.getElementById('backgroundmusic');
const playButton = document.getElementById('playButton');
var dotSize = 20;
var gameBoard = document.getElementById('game-board');
var gameBoardSize = Math.min(gameBoard.offsetWidth, gameBoard.offsetHeight);
var direction = 'Right';
var snake = [{ top: 0, left: 0 }];
var food = null;


function updateGame() {
    // Update the position of the snake
    var head = Object.assign({}, snake[0]); // copy head
    switch(direction) {
        case 'Up': head.top -= dotSize; break;
        case 'Down': head.top += dotSize; break;
        case 'Left': head.left -= dotSize; break;
        case 'Right': head.left += dotSize; break;
    }
    snake.unshift(head); // add new head to snake

    // Check for food collision
    if (food && food.left === head.left && food.top === head.top) {
        food = null; // eat food
    } else {
        snake.pop(); // remove tail
    }

    // Check for self collision
    if (snake.find((dot, index) => index !== 0 && dot.left === head.left && dot.top === head.top)) {
        gameOver();
    }

    // Check for wall collision
    if (head.left < 0 || head.top < 0 || head.left === gameBoardSize || head.top === gameBoardSize) {
        gameOver();
    }

    // Randomly place food
    if (!food) {
        food = { 
            left: Math.floor(Math.random() * gameBoardSize / dotSize) * dotSize, 
            top: Math.floor(Math.random() * gameBoardSize / dotSize) * dotSize 
        };
    }

    // Update the game board
    var gameBoard = document.getElementById('game-board');
    gameBoard.innerHTML = ''; // clear the game board

    // Draw the snake
    for (var i = 0; i < snake.length; i++) {
        var dot = document.createElement('div');
        dot.style.left = `${snake[i].left}px`;
        dot.style.top = `${snake[i].top}px`;
        dot.className = 'dot';
        gameBoard.appendChild(dot);
    }

    // Draw the food
    if (food) {
        var foodElement = document.createElement('div');
        foodElement.style.left = `${food.left}px`;
        foodElement.style.top = `${food.top}px`;
        foodElement.className = 'food';
        gameBoard.appendChild(foodElement);
    }
}

function gameOver() {
    clearInterval(intervalId);
    alert('Game Over!');
}

document.addEventListener('keydown', function(e) {
    switch(e.key) {
        case 'ArrowUp': direction = 'Up'; break;
        case 'ArrowDown': direction = 'Down'; break;
        case 'ArrowLeft': direction = 'Left'; break;
        case 'ArrowRight': direction = 'Right'; break;
    }
});

var intervalId = setInterval(updateGame, 200);
var touchStartX = 0;
var touchStartY = 0;

document.addEventListener('touchstart', function(e) {
    e.preventDefault();
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
}, { passive: false });

document.addEventListener('touchmove', function(e) {
    e.preventDefault();
}, { passive: false });

document.addEventListener('touchend', function(e) {
    e.preventDefault();
    var touchEndX = e.changedTouches[0].clientX;
    var touchEndY = e.changedTouches[0].clientY;
    var diffX = touchStartX - touchEndX;
    var diffY = touchStartY - touchEndY;
    if (Math.abs(diffX) > Math.abs(diffY)) {
        // Horizontal swipe
        if (diffX > 0) {
            // Swipe left
            direction = 'Left';
        } else {
            // Swipe right
            direction = 'Right';
        }
    } else {
        // Vertical swipe
        if (diffY > 0) {
            // Swipe up
            direction = 'Up';
        } else {
            // Swipe down
            direction = 'Down';
        }
    }
}, { passive: false });

playButton.addEventListener('click', () => {
    if (audioElement.paused) {
      audioElement.play();
      playButton.innerHTML = '<i class="fas fa-pause"></i>'; // Update button icon to pause
    } else {
      audioElement.pause();
      playButton.innerHTML = '<i class="fas fa-play"></i>'; // Update button icon to play
    }
  });

  fetch('./json/audio.json')
    .then(response => response.json())
    .then(data => {
        var select = document.getElementById('trackSelect');
        data.backgroundMusic.forEach((track, index) => {
            var option = document.createElement('option');
            option.value = index;
            option.text = track.name;
            select.appendChild(option);
        });
    });

    document.getElementById('trackSelect').addEventListener('change', function() {
        fetch('./json/audio.json')
            .then(response => response.json())
            .then(data => {
                var audioElement = document.getElementById('backgroundmusic');
                var playButton = document.getElementById('playButton');
                var track = data.backgroundMusic[this.value];
                audioElement.src = track.url;
                audioElement.type = track.type;
                audioElement.load();
                audioElement.play();
                playButton.innerHTML = '<i class="fas fa-pause"></i>'; // Update button icon to pause
            });
    });