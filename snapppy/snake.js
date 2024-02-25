
var dotSize = 20;
var gameBoardSize = 400;
var direction = 'Right';
var snake = [{ top: 0, left: 0 }];
var food = null;

function updateGame() {
    var head = Object.assign({}, snake[0]); // copy head
    switch(direction) {
        case 'Left': head.left -= dotSize; break;
        case 'Right': head.left += dotSize; break;
        case 'Up': head.top -= dotSize; break;
        case 'Down': head.top += dotSize; break;
    }

    if (head.top < 0 || head.left < 0 || head.top === gameBoardSize || head.left === gameBoardSize) {
        return gameOver();
    }

    if (food && food.left === head.left && food.top === head.top) {
        food = null;
    } else {
        snake.pop();
    }

    snake.unshift(head);

    if (food === null) {
        food = { top: Math.floor(Math.random() * gameBoardSize / dotSize) * dotSize, left: Math.floor(Math.random() * gameBoardSize / dotSize) * dotSize };
    }

    drawGame();
}

function drawGame() {
    var gameBoard = document.getElementById('game-board');
    gameBoard.innerHTML = '';
    snake.forEach(function(dot) {
        var dotElem = document.createElement('div');
        dotElem.className = 'dot';
        dotElem.style.left = `${dot.left}px`;
        dotElem.style.top = `${dot.top}px`;
        gameBoard.appendChild(dotElem);
    });

    var foodElem = document.createElement('div');
    foodElem.className = 'food';
    foodElem.style.left = `${food.left}px`;
    foodElem.style.top = `${food.top}px`;
    gameBoard.appendChild(foodElem);

    document.getElementById('score').innerText = `Score: ${snake.length}`;
}

function gameOver() {
    clearInterval(intervalId);
    alert('Game over!');
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
