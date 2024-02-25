var dotSize = 20;
var gameBoardSize = 400;
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

    // TODO: Update the game board
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
