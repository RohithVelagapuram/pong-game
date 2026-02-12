const canvas = document.getElementById('pong');
const context = canvas.getContext('2d');

// Create the pong paddle
const paddleWidth = 10;
const paddleHeight = 100;

const player = {
    x: 0,
    y: canvas.height / 2 - paddleHeight / 2,
    width: paddleWidth,
    height: paddleHeight,
    score: 0
};

const computer = {
    x: canvas.width - paddleWidth,
    y: canvas.height / 2 - paddleHeight / 2,
    width: paddleWidth,
    height: paddleHeight,
    score: 0
};

// Create the pong ball
const ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: 10,
    speed: 4,
    velocityX: 5,
    velocityY: 5
};

// Draw everything
function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = '#000';
    context.fillRect(player.x, player.y, player.width, player.height);
    context.fillRect(computer.x, computer.y, computer.width, computer.height);

    context.beginPath();
    context.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2, false);
    context.fill();
}

// Update game entities
function update() {
    ball.x += ball.velocityX;
    ball.y += ball.velocityY;

    if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
        ball.velocityY = -ball.velocityY;
    }

    const paddle = (ball.x < canvas.width / 2) ? player : computer;

    if (
        ball.x - ball.radius < paddle.x + paddle.width &&
        ball.x + ball.radius > paddle.x &&
        ball.y + ball.radius > paddle.y &&
        ball.y - ball.radius < paddle.y + paddle.height
    ) {
        ball.velocityX = -ball.velocityX;
    }
}

// Game loop
function game() {
    draw();
    update();
    requestAnimationFrame(game);
}

// Start the game
game();
