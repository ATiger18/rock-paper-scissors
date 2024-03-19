console.log("Hello World");

function playRound(playerSelection, computerSelection) {
    // your code here!
// Code that protects against case sensitivity goes here
// Stuff here might just need to be HTML
let choice = prompt('rock,paper, or scissors?');

if (playerSelection == computerSelection) {
    return ("Tie!");
} else if (
    (playerSelection === "rock" && computerSelection ==="scissors")||
    (playerSelection === "scissors" && computerSelection === "paper")||
    (playerSelection === "paper"&& computerSelection === "rock")
) {
    return "You won!" + playerSelection + "beats" + computerSelection;
}




  }
  
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));