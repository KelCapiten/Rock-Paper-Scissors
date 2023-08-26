const buttonDiv = document.querySelector(".buttons");
const playerScoreDisplay = document.querySelector(".playerScore");
const compScoreDisplay = document.querySelector(".compScore");

let intervalID = setInterval(handShow, 1000);
let playerScore = 0;
let compScore = 0;

function resetGame() {
    const displayMessage = document.querySelector(".messageDisplay");

    if (playerScore >= 5) {
        displayMessage.textContent = "YOU HAVE WON THE GAME AND BEAT THE SYSTEM. CONGRADULATIONS!!!";
    } else {
        if (compScore >= 5) {
            displayMessage.textContent = "YOU HAVE LOST THE GAME. GIVE IT ANOTHER SHOT!!!";
        }
    }
    playerScore = 0;
    compScore = 0;
    playerScoreDisplay.textContent = `${playerScore}`;
    compScoreDisplay.textContent = `${compScore}`;
}

function updateScore(winner) {
    const displayMessage = document.querySelector(".messageDisplay");

    if (winner === 'player') {
        playerScore += 1;
        displayMessage.textContent = "YOU WINS THIS ROUND!!!";
    } else {
        compScore += 1;
        displayMessage.textContent = "SORRY YOU LOOSE THIS ROUND. Hmmm AGAIN!!!";
    }
    playerScoreDisplay.textContent = `${playerScore}`;
    compScoreDisplay.textContent = `${compScore}`;
    intervalID = setInterval(handShow, 1000);
}

const buttonClickAction = function (theButton) {
    let compChoiceVar = compChoice();

    const displayMessage = document.querySelector(".messageDisplay");
    displayMessage.textContent = "MAKE YOUR CHOICE!!";
    const theButtonID = parseInt(theButton.target.id);

    displayCompsChoice(compChoiceVar);
    displayPlayersChoice(theButtonID);

    setTimeout(() => {
        if (theButtonID == compChoiceVar) {
            displayMessage.textContent = "IT'S A TIE!. AGAIN!! MAKE A SELECTION.";
            intervalID = setInterval(handShow, 1000);
            return;
        }
    
        if ((theButtonID == 0 && compChoiceVar == 2) || 
            (theButtonID == 1 && compChoiceVar == 0) || 
            (theButtonID == 2 && compChoiceVar == 1)) {
            updateScore('player');
        } else {
            updateScore('comp');
        }
    }, 1000)
}


buttonDiv.addEventListener('click', buttonClickAction);

let count = 0;
function handShow() {
    let images = ["images/rock.png", "images/paper.png", "images/scissors.png"];

    const playerImage = document.querySelector('.playerHand');
    const compImage = document.querySelector('.compHand');

    playerImage.src = images[count];
    compImage.src = images[count];

    ++count;
    if (count >= 3) {
        count = 0;
    }    
    
    if (compScore >= 5 || playerScore >= 5) {
        const displayMessage = document.querySelector(".messageDisplay");
        const playerScoreDisplay = document.querySelector(".playerScore");
        const compScoreDisplay = document.querySelector(".compScore");

        playerScoreDisplay.textContent = `${playerScore}`;
        compScoreDisplay.textContent = `${compScore}`;

        displayMessage.textContent = "VALIDATING RESULTS.";

        setTimeout(() => {resetGame();}, 1000)
    }
}

function updateChoiceDisplay(choice, imageElement, displayMessageElement) {
    const images = ["/images/rock.png", "/images/paper.png", "/images/scissors.png"];
    const messages = ["ROCK!!", "PAPER!!", "SCISSORS!!"];

    imageElement.src = images[choice];
    displayMessageElement.textContent = messages[choice];
}

function displayPlayersChoice(playerChoice) {
    const playerImage = document.querySelector('.playerHand');
    const displayMessage = document.querySelector(".messageDisplay");

    clearInterval(intervalID);
    updateChoiceDisplay(playerChoice, playerImage, displayMessage);
}

function displayCompsChoice(choice) {
    const compImage = document.querySelector('.compHand');
    const displayMessage = document.querySelector(".messageDisplay");

    updateChoiceDisplay(choice, compImage, displayMessage);
}

function compChoice() {
    return (Math.floor(Math.random()*3)); 
}