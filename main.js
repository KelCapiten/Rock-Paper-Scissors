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
game();

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

function checUserkChoice(choice = userChoice()) {
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
    return validateThis - 1;
}

function isUserWinner(user = checUserkChoice(), comp = compChoice()) {
    if (user == comp) {
        console.log("It's a tie!!! AGAIN!");
    } else {
        if ((user == 0 && comp == 1) || (user == 1 && comp == 2) || (user == 2 && comp == 0)) {
            console.log(`You loose the round, sorry. ${mapChoice(comp)} beats ${mapChoice(user)}. AI is taking over!`);
            return false;
        } else {
            console.log(`Nice!!, you win the round. ${mapChoice(user)} beats ${mapChoice(comp)}. Keep em coming`);
            return true;
        }
    }

}

function game() {
    let user = 0;
    let comp = 0;

    while ( user < 5 && comp < 5) {
        let winner = isUserWinner();

        while (winner == undefined) {
            console.log(`Your score is: ${user}. Comp score is: ${comp}.`);
            winner = isUserWinner();
        }
        if (winner) {
            user += 1;
            console.log(`Your score is: ${user}. Comp score is: ${comp}.`);
        } else {
            comp += 1;
            console.log(`Your score is: ${user}. Comp score is: ${comp}.`);
        }
    }

    if (user > comp) {
        console.log("YOU HAVE WON THE GAME!!");
        return true;
    } else {
        console.log("YOU HAVE LOST THE GAME. SORRY BUDDY, BETTER LUCK NEXT TIME");
        return false;
    }
}