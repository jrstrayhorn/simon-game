function redButtonMousedown() {
    var redButton = document.getElementById("red-button");
    redButton.style.backgroundColor = "IndianRed";

}

function redButtonMouseup() {
    var redButton = document.getElementById("red-button");
    redButton.style.backgroundColor = "red";
}

function greenButtonMousedown() {
    var greenButton = document.getElementById("green-button");
    greenButton.style.backgroundColor = "mediumseagreen";

}

function greenButtonMouseup() {
    var greenButton = document.getElementById("green-button");
    greenButton.style.backgroundColor = "green";
}

function yellowButtonMousedown() {
    var yellowButton = document.getElementById("yellow-button");
    yellowButton.style.backgroundColor = "lightyellow";

}

function yellowButtonMouseup() {
    var yellowButton = document.getElementById("yellow-button");
    yellowButton.style.backgroundColor = "yellow";
}

function blueButtonMousedown() {
    var blueButton = document.getElementById("blue-button");
    blueButton.style.backgroundColor = "cornflowerblue";

}

function blueButtonMouseup() {
    var blueButton = document.getElementById("blue-button");
    blueButton.style.backgroundColor = "blue";
}

function pressRedButton() {
    redButtonMousedown();
    setTimeout(redButtonMouseup, 500);
}

function pressBlueButton() {
    blueButtonMousedown();
    setTimeout(blueButtonMouseup, 500);
}

function pressYellowButton() {
    yellowButtonMousedown();
    setTimeout(yellowButtonMouseup, 500);
}

function pressGreenButton() {
    greenButtonMousedown();
    setTimeout(greenButtonMouseup, 500);
}

function greenButtonClick() {
    if (buttonArray[userButtonPresses] == 1) {
        userButtonPresses += 1;
        if (turns == userButtonPresses) {
            generateButton();
        }
    }
    else
    {
        alert("Game Over! You went " + turns + " turns. Hit Start Game to try again");
        resetGame();
    }
}

function redButtonClick() {
    if (buttonArray[userButtonPresses] == 0) {
        userButtonPresses += 1;
        if (turns == userButtonPresses) {
            generateButton();
        }
    }
    else
    {
        alert("Game Over! You went " + turns + " turns. Hit Start Game to try again");
        resetGame();
    }
}

function yellowButtonClick() {
    if (buttonArray[userButtonPresses] == 2) {
        userButtonPresses += 1;
        if (turns == userButtonPresses) {
            generateButton();
        }
    }
    else
    {
        alert("Game Over! You went " + turns + " turns. Hit Start Game to try again");
        resetGame();
    }
}

function blueButtonClick() {
    if (buttonArray[userButtonPresses] == 3) {
        userButtonPresses += 1;
        if (turns == userButtonPresses) {
            generateButton();
        }
    }
    else
    {
        alert("Game Over! You went " + turns + " turns. Hit Start Game to try again");
        resetGame();
    }
}

function resetGame() {
    buttonArray = [];
    turns = 0;
    userButtonPresses = 0;
}

var buttonArray = [];
var turns = 0;
var userButtonPresses = 0;

// 0: Red, 1: Green, 2: Yellow, 3: Blue
function generateButton() {
    /*pressRedButton();
    setTimeout(pressGreenButton, 750)
    setTimeout(pressYellowButton, 1500);
    setTimeout(pressBlueButton, 2250);*/
    turns = 1;

    var randomNumber = getRandomNumber();
    pressButton(randomNumber);

    buttonArray.push(randomNumber);
}

function pressButton(number) {
    switch(number) {
        case 0:
            pressRedButton();
            break;
        case 1:
            pressGreenButton();
            break;
        case 2:
            pressYellowButton();
            break;
        case 3:
            pressBlueButton();
            break;
        default:

    }
}

function getRandomNumber() {
    return Math.floor(Math.random() * 4);
}