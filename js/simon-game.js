function redButtonMousedown() {
    var redButton = document.getElementById("red-button");
    redButton.style.backgroundColor = "IndianRed";
    var cNote = document.getElementById('cAudio');
    cNote.currentTime = 0;
    cNote.play();
}

function redButtonMouseup() {
    var redButton = document.getElementById("red-button");
    redButton.style.backgroundColor = "red";
}

function greenButtonMousedown() {
    var greenButton = document.getElementById("green-button");
    greenButton.style.backgroundColor = "mediumseagreen";
    var aNote = document.getElementById('aAudio');
    aNote.currentTime = 0;
    aNote.play();
}

function greenButtonMouseup() {
    var greenButton = document.getElementById("green-button");
    greenButton.style.backgroundColor = "green";
}

function yellowButtonMousedown() {
    var yellowButton = document.getElementById("yellow-button");
    yellowButton.style.backgroundColor = "lightyellow";
    var eNote = document.getElementById('eAudio');
    eNote.currentTime = 0;
    eNote.play();
}

function yellowButtonMouseup() {
    var yellowButton = document.getElementById("yellow-button");
    yellowButton.style.backgroundColor = "yellow";
}

function blueButtonMousedown() {
    var blueButton = document.getElementById("blue-button");
    blueButton.style.backgroundColor = "cornflowerblue";
    var gNote = document.getElementById('gAudio');
    gNote.currentTime = 0;
    gNote.play();
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
    checkUserButtonPress(GREEN_BUTTON_INDEX);
}

function redButtonClick() {
    checkUserButtonPress(RED_BUTTON_INDEX);
}

function yellowButtonClick() {
    checkUserButtonPress(YELLOW_BUTTON_INDEX);
}

function blueButtonClick() {
    checkUserButtonPress(BLUE_BUTTON_INDEX);
}

function checkUserButtonPress(buttonIndex) {
    if (buttonArray[userButtonPresses] == buttonIndex) {
        userButtonPresses += 1;
        if (userButtonPresses == buttonArray.length) {
            // keep the game going
            userButtonPresses = 0;
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
    //gameStarted = false;
}

var buttonArray = [];
var turns = 0;
var userButtonPresses = 0;
var RED_BUTTON_INDEX = 0;
var GREEN_BUTTON_INDEX = 1;
var YELLOW_BUTTON_INDEX = 2;
var BLUE_BUTTON_INDEX = 3;
var DELAY_TIMING = 600;
//var gameStarted = false;

// 0: Red, 1: Green, 2: Yellow, 3: Blue
function generateButton() {
    /*pressRedButton();
    setTimeout(pressGreenButton, 750)
    setTimeout(pressYellowButton, 1500);
    setTimeout(pressBlueButton, 2250);*/
    turns += 1;

    //if (turns == 1) {
    //    gameStarted = true;
    //}

    var randomNumber = getRandomNumber();
    //pressButton(randomNumber);

    buttonArray.push(randomNumber);
    pressButtonSequence(buttonArray);
}

function pressButtonSequence(btnArray) {
    for (var index = 0; index < btnArray.length; index++) {
        var element = btnArray[index];
        //pressButton(element);
        // press button but with delay of 750 to give built in delay of button press time
        setTimeout(pressButton, (DELAY_TIMING * index) + DELAY_TIMING, element);
    }
}

function pressButton(number) {
    switch(number) {
        case RED_BUTTON_INDEX:
            pressRedButton();
            break;
        case GREEN_BUTTON_INDEX:
            pressGreenButton();
            break;
        case YELLOW_BUTTON_INDEX:
            pressYellowButton();
            break;
        case BLUE_BUTTON_INDEX:
            pressBlueButton();
            break;
        default:

    }
}

function getRandomNumber() {
    return Math.floor(Math.random() * 4);
}