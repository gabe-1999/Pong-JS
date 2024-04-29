let paddle1;
let paddle2;
let ball;
let ballSpeed;

function setup() {
    createCanvas(600, 400);
    ballSpeed = [3, -3];
    paddle1 = new Paddle(1, height / 2);
    paddle2 = new Paddle(width - 20, height / 2);
    ball = new Ball(width / 2, height / 2, random(ballSpeed), random(ballSpeed), 10);
}

function draw() {
    background(0);

    if (ball.y > height || ball.y < 1) {
        ball.speedY = ball.speedY * -1;
    }
    if ((ball.x - ball.r < paddle1.x + paddle1.width &&
        ball.y > paddle1.y &&
        ball.y < paddle1.y + paddle1.height) ||
        (ball.x + ball.r > paddle2.x &&
        ball.y > paddle2.y &&
        ball.y < paddle2.y + paddle2.height)) {
        ball.speedX = ball.speedX * -1;
    }
    if (ball.x < 0) {
        paddle2.points++;
        showPoints();
        resetBall();
    } else if (ball.x > width) {
        paddle1.points++;
        resetBall();
        showPoints();
    }

    ball.show();
    ball.update();

    paddle1.show();
    paddle1.move(mouseY);
    paddle2.show();
    paddle2.update();
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        paddle2.setState("moveUp");
    } else if (keyCode === DOWN_ARROW) {
        paddle2.setState("moveDown");
    }
}

function keyReleased() {
    if (keyCode == UP_ARROW || keyCode == DOWN_ARROW) {
        paddle2.setState("still");
    }
}

function resetBall() {
    ball.x = width / 2;
    ball.y = height / 2;
    ball.speedX = random(ballSpeed);
    ball.speedY = random(ballSpeed);
}

function showPoints() {
    print(`Player 1: ${paddle1.points}\tPlayer 2: ${paddle2.points}`);  
}