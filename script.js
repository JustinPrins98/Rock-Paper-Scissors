
function playGame() {
    // score variables
    let humanScore = 0;
    let computerScore = 0;
    const result = document.querySelector("#results");


    // Function that decides who wins the round
    function playRound(humanChoice) {
        const computerChoice = getComputerChoice();
        // All win conditions
        if ((humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            result.textContent += `You've won ${humanChoice} wins over ${computerChoice}`;
            humanScore++; // Increments human score
        }
        // Tie
        else if (humanChoice === computerChoice) {
            result.textContent += "It's a tie";
        }
        // Lose
        else {
            result.textContent += `You lose ${computerChoice} wins over ${humanChoice}`;
            computerScore++; // Increments computer score
        }

        result.textContent += `Human score: ${humanScore} Computer score: ${computerScore}`;
        result.textContent += "_____________________\n";
    }

    // Function that let's the CPU randomly pick one of the three strings inside the array.
    function getComputerChoice() {
        const choices = ["rock", "paper", "scissors"];
        const randomChoice = Math.floor(Math.random() * 3);
        return choices[randomChoice];
    }



    const rockButton = document.querySelector("#rock");
    const paperButton = document.querySelector("#paper");
    const scissorsButton = document.querySelector("#scissors");

    rockButton.addEventListener("click", () => playRound("rock"));
    paperButton.addEventListener("click", () => playRound("paper"));
    scissorsButton.addEventListener("click", () => playRound("scissors"));

    result.textContent = "Let's play Rock, Paper, Scissors!";

    // Function so the user can enter a string, the functions checks if the string has the corrert value and then returns the input.
    // When the value is wrong the user will get Alert.









    // result.textContent("GAME OVER");
    // result.textContent(`Final score: Human ${humanScore} Computer ${computerScore}`);

    // if (humanScore > computerScore) {
    //     result.textContent("Congratulations you've won the game")
    // } else if (humanScore < computerScore) {
    //     result.textContent("To bad you've lost");
    // } else {
    //     result.textContent("It's a tie");
    // }


}


// Start/call the game
playGame();






