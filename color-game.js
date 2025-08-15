const colorBox = document.getElementById("colorBox");
const colorOptions = document.querySelectorAll(".color-option");
const gameStatus = document.getElementById("gameStatus");
const scoreDisplay = document.getElementById("score");
const newGameButton = document.getElementById("newGameButton");
let score = 0;
let targetColor;

function generateColors() {
    return Array.from({ length: 6 }, () => randomColor());
}

function randomColor() {
    return `rgb(${randVal()}, ${randVal()}, ${randVal()})`;
}

function randVal() {
    return Math.floor(Math.random() * 256);
}

function setGame() {
    const colors = generateColors();
    targetColor = colors[Math.floor(Math.random() * colors.length)];
    colorBox.style.backgroundColor = targetColor;
    
    colorOptions.forEach((button, index) => {
        button.style.backgroundColor = colors[index];
        button.onclick = () => checkGuess(colors[index]);
    });
    
    gameStatus.textContent = "";
}

function checkGuess(selectedColor) {
    if (selectedColor === targetColor) {
        gameStatus.textContent = "Correct! 🎉";
        gameStatus.style.color = "green";
        score++;
        scoreDisplay.textContent = `Score: ${score}`;
    } else {
        gameStatus.textContent = "Wrong! Try again.";
        gameStatus.style.color = "red";
    }
}

newGameButton.onclick = setGame;

setGame();