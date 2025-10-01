var canvas = document.getElementById("pongCanvas");
var ctx = canvas.getContext("2d");
var ballRadius = 10;
var paddleHeight = 10;
var paddleWidth = 75;
var x_ball = canvas.width/2;
var y_ball = canvas.height-30;
var x_paddle = canvas.width/2;
var y_paddle = canvas.height-paddleHeight;
var dx = 2;
var dy = -2;

var score = 0;
var scoreElement = document.getElementById("scoreSeconde");
scoreElement.textContent = score;

function incrementScore() {
    score++;
    scoreElement.textContent = score;
}

function resetScore() {
    score = 0;
    scoreElement.textContent = score;
}

function incrementVitesse() {
    dx *= 1.2;
    dy *= 1.2;
}

function resetVitesse() {
    dx = 2;
    dy = -2;
}

function drawBall() {
    ctx.beginPath();
    ctx.arc(x_ball, y_ball, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(x_paddle - paddleWidth / 2, y_paddle, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    movePaddle();
    drawBall();
    drawPaddle();
    if(x_ball + dx > canvas.width-ballRadius || x_ball + dx < ballRadius) {
        dx = -dx;
    }
    if(y_ball + dy > canvas.height-ballRadius || y_ball + dy < ballRadius) {
        dy = -dy;
    }

    if (y_ball + dy > y_paddle - ballRadius &&
    x_ball > x_paddle - paddleWidth / 2 &&
    x_ball < x_paddle + paddleWidth / 2) {
        let hitPos = (x_ball - x_paddle) / (paddleWidth / 2);
        dx = hitPos * 4; 
        dy = -Math.abs(dy); 
    }

    x_ball += dx;
    y_ball += dy;
}

var keys = {};

document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
        keys[event.key] = true;
    }
});

document.addEventListener("keyup", function(event) {
    if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
        keys[event.key] = false;
    }
});

function allerDroite() {
    keys["ArrowRight"] = true;
}

function allerGauche() {
    keys["ArrowLeft"] = true;
}

function movePaddle() {
    const step = 7;
    if (keys["ArrowRight"] && x_paddle + paddleWidth / 2 + step <= canvas.width) {
        x_paddle += step;
    }
    if (keys["ArrowLeft"] && x_paddle - paddleWidth / 2 - step >= 0) {
        x_paddle -= step;
    }
}

var isGameOver = false;

function gameLoop() {
    if (isGameOver) return;

    draw();
    requestAnimationFrame(gameLoop);

    if (y_ball + dy > canvas.height - ballRadius) {
        gameOver();
    }
}

function gameOver() {
    isGameOver = true;
    alert("Game Over ! Votre score est : " + score);
    resetJeux();
}

function resetJeux() {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
    }
    resetScore();
    resetVitesse();
    x_ball = canvas.width/2;
    y_ball = canvas.height-30;
    elapsedTime = 0;
    isGameOver = false;
}

var intervalId = null;
var elapsedTime = 0;

function jouerJeux() {
    if (intervalId) clearInterval(intervalId); 
    intervalId = setInterval(function() {
        incrementScore();
        elapsedTime++;
        if (score % 10 === 0 && score !== 0) {
            incrementVitesse();
        }
    }, 1000);
    gameLoop();
}

draw();