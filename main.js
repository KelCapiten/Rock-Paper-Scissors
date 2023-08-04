//THE SUDO CODE
/*
1. The comp generates a choice.
-create an array with rock, paper and scissors.
-creat a function that generates an integer between zero and. This integer will be mapped to the array.
-The function will return the selected item in the array.
2. The user inputs their choice.
-The options will be predefined. User will make their choice by inputing a number that coresponds to a choice.
3. Evaluate the choices.
-Check for a tie first by evaluating wherethere or not the numbers of both are the same.
-The result will be evaluated from the perspective of the player.
-Only the win condition will be checked for.
4. The winner gets displayed.
-
*/

function compChoice() {
    let choice = (Math.floor(Math.random()*3));
    return choice;
}

function mapChoice(index = compChoice()) {
    let choiceArray = ["rock", "paper", "scissors"];
    let choice = choiceArray[index];
    return choice;
}

function userChoice() {
    console.log("Make your selection.");
    console.log("1. Rock?");
    console.log("2. Paper?");
    console.log("3. Scissors?");

    let choice = window.prompt("What will it be?");
    return choice;
}

function checkChoice(choice = userChoice()) {
    let validateThis = parseInt(choice);
    while ((validateThis < 1 || validateThis > 3) || (isNaN(validateThis))) {
        while (isNaN(validateThis)) {
            console.log("Use numbers only for your selection. Select either options 1, 2 or 3");
            validateThis = userChoice();
        }
        while (validateThis < 1 || validateThis > 3) {
            console.log("Only 3 options to choose from. 1, 2 or 3. Try again.");
            validateThis = userChoice();
        }
    }
    return validateThis;
}

