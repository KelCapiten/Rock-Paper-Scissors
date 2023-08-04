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
    let choice = ((Math.floor(Math.random()*3))+1);
    return choice;
}

console.log(compChoice())