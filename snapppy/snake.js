
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
// Your existing Snake game code...

document.addEventListener('keydown', function(e) {
    switch(e.key) {
        case 'ArrowUp': direction = 'Up'; break;
        case 'ArrowDown': direction = 'Down'; break;
        case 'ArrowLeft': direction = 'Left'; break;
        case 'ArrowRight': direction = 'Right'; break;
    }
});

// Touch control code...

var touchStartX = 0;
var touchStartY = 0;

document.addEventListener('touchstart', function(e) {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
}, false);

document.addEventListener('touchend', function(e) {
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
}, false);

var intervalId = setInterval(updateGame, 200);

var lastX, lastY, lastZ;
var moveCounter = 0;

window.addEventListener('devicemotion', function (e) {
    var acc = e.accelerationIncludingGravity;
    if (!acc) {
        return;
    }

    if (!lastX) {
        lastX = acc.x;
        lastY = acc.y;
        lastZ = acc.z;
        return;
    }

    var deltaX = Math.abs(acc.x - lastX);
    var deltaY = Math.abs(acc.y - lastY);
    var deltaZ = Math.abs(acc.z - lastZ);

    if (deltaX + deltaY + deltaZ > 15) {
        moveCounter++;
    } else {
        moveCounter = Math.max(0, --moveCounter);
    }

    if (moveCounter > 2) {
        changeDirection(); // change direction of the snake
        moveCounter = 0;
    }

    lastX = acc.x;
    lastY = acc.y;
    lastZ = acc.z;
});

function changeDirection() {
    // Change the direction of the snake
    // This function needs to be implemented based on your game logic
}
