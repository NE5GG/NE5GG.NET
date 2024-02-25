var dotSize = 20;
var gameBoardSize = 400;
var direction = 'Right';
var snake = [{ top: 0, left: 0 }];
var food = null;

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
        changeDirection(acc); // change direction of the snake
        moveCounter = 0;
    }

    lastX = acc.x;
    lastY = acc.y;
    lastZ = acc.z;
});

function changeDirection(acc) {
    var accX = Math.abs(lastX - acc.x);
    var accY = Math.abs(lastY - acc.y);
    var accZ = Math.abs(lastZ - acc.z);

    if (accX > accY && accX > accZ) {
        direction = lastX - acc.x > 0 ? 'Left' : 'Right';
    } else if (accY > accX && accY > accZ) {
        direction = lastY - acc.y > 0 ? 'Up' : 'Down';
    }
}
