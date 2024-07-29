function playGame() {
    // Score variables
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
            result.textContent += `You've won! ${humanChoice} wins over ${computerChoice}\n`;
            humanScore++; // Increments human score
        }
        // Tie
        else if (humanChoice === computerChoice) {
            result.textContent += "It's a tie\n";
        }
        // Lose
        else {
            result.textContent += `You lose! ${computerChoice} wins over ${humanChoice}\n`;
            computerScore++; // Increments computer score
        }

        result.textContent += `Human score: ${humanScore} Computer score: ${computerScore}\n`;
        result.textContent += "_____________________\n";

        checkWinner();
    }

    // Function that lets the CPU randomly pick one of the three strings inside the array.
    function getComputerChoice() {
        const choices = ["rock", "paper", "scissors"];
        const randomChoice = Math.floor(Math.random() * 3);
        return choices[randomChoice];
    }

    function checkWinner() {
        if (humanScore === 5) {
            result.textContent += "Congratulations, you've won the game!\n";
            resetGame();
        } else if (computerScore === 5) {
            result.textContent += "Too bad, you've lost the game!\n";
            resetGame();
        }
    }

    function resetGame() {
        humanScore = 0;
        computerScore = 0;
        result.textContent += "Game reset. Let's play again!\n";
        result.textContent += "_____________________\n";
        result.textContent = "";
    }

    const rockButton = document.querySelector("#rock");
    const paperButton = document.querySelector("#paper");
    const scissorsButton = document.querySelector("#scissors");

    rockButton.addEventListener("click", () => playRound("rock"));
    paperButton.addEventListener("click", () => playRound("paper"));
    scissorsButton.addEventListener("click", () => playRound("scissors"));

    result.textContent = "Let's play Rock, Paper, Scissors!\n";
}

// Start/call the game
playGame();