//Criara elemento que ira rodar o jogo
let canvas = document.getElementsByNameId("snake");
let context = canvas.getContext("2d");
let box = 32;

//criar cobrinha como vetor
let snake = [];

//inicio da cobrinha
snake[0] = {
    x: 8 * box,
    y: 8 * box
}

//direção
let direction = "right";

//comida
let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

//função para criar o background
function criarBG() {
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function criarCobrinha() {
    for (i = 0; i < snake.length; i++) {
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}


document.addEventListener('keydown', update);

function update(event) {
    if (event.keyCode == 37 && direction != 'right') direction = 'left';
    if (event.keyCode == 38 && direction != 'down') direction = 'up';
    if (event.keyCode == 39 && direction != 'left') direction = 'right';
    if (event.keyCode == 40 && direction != 'up') direction = 'down';
}

function iniciarJogo() {
    if (snake[0].x > 15 * box && direction == "right") {
        snake[0].x = 0;
    }

    if (snake[0].x < 0 && direction == "left") {
        snake[0].x = 16;
    }

    if (snake[0].y > 15 * box && direction == "down") {
        snake[0].y = 0;
    }

    if (snake[0].y < 0 && direction == "up") {
        snake[0].y = 16;
    }

    criarBG();
    criarCobrinha();
    drawFood();
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if (direction == "right") snakeX += box;
    if (direction == "left") snakeX -= box;
    if (direction == "up") snakeX -= box;
    if (direction == "down") snakeX += box;

    if (snakeX != food.x || snakeY != food.y) {
        snake.pop();
    } else {
        food.x = Math.floor(Math.random() * 15 + 1) * box;
        food.y = Math.floor(Math.random() * 15 + 1) * box;
    }

    let newHead={
        x:snakeX,
        y:snakeY
    }
    snake.unshift(newHead);
}