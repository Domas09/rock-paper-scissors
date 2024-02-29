
alert("Time to play ROCK PAPER SCISSORS");

let myChoice = confirm("Are you ready to rumble!!!!!!!");

let playerChoices = {
    rock:0,
    paper:0,
    scissors:0
}

let computerChoices = {
    rock:0,
    paper:0,
    scissors:0
}

let winLossTie = {
    win:0,
    loss:0,
    tie:0
}

function winLossTieFunction(rand,win,loss) {
    if(rand === win){
        alert("Win!");
        winLossTie.win++;
    } else if(rand === loss) {
        alert("You lose")
        winLossTie.loss++;
    } else {
        alert("Tie")
        winLossTie.tie++;
    }
}

let computer = -1;
// rock 0
// paper 1
// scissors 2
while (myChoice === true){
    let input = prompt("Choose wisely between rock, paper, or scissors");
    computer = Math.floor(Math.random() * 3);
    if(input === "rock"){
        winLossTieFunction(computer,2,1);
        playerChoices.rock++;

    } else if(input === "paper"){
        winLossTieFunction(computer,0,2);
        playerChoices.paper++;
    } else if(input === "scissors"){
        winLossTieFunction(computer, 1,0);
        playerChoices.scissors++;
    } else {
        alert("I said choose between rock, paper, or scissors not rock, paper, " + input + ".");
    }
    alert(`Record \n Wins: ${winLossTie.win} losses: ${winLossTie.loss} Ties: ${winLossTie.tie}\n 
     Your Coices \n Rock: ${playerChoices.rock} Paper: ${playerChoices.paper} Scissors: ${playerChoices.scissors}\n
     Computer Choices \n Rock: ${computerChoices.rock} Paper: ${computerChoices.paper} Scissors: ${computerChoices.scissors}`)
    myChoice = confirm("Play agian?");
}