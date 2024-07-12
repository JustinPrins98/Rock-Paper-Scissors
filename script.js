function playGame() {
    // score variables
    let humanScore = 0;
    let computerScore = 0;

    // Function that decides who wins the round
    function playRound(humanChoice, computerChoice) {
        // All win conditions
        if ((humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            console.log(`You've won ${humanChoice} wins over ${computerChoice}`);
            humanScore++; // Increments human score
        }
        // Tie
        else if (humanChoice === computerChoice) {
            console.log("It's a tie");
        }
        // Lose
        else {
            console.log(`You lose ${computerChoice} wins over ${humanChoice}`);
            computerScore++; // Increments computer score
        }
    }

    // Function that let's the CPU randomly pick one of the three strings inside the array.
    function getComputerChoice() {
        const choices = ["rock", "paper", "scissors"];
        const randomChoice = Math.floor(Math.random() * 3);
        return choices[randomChoice];
    }

    function getHumanChoice(input) {
        if (input === "rock" || input === "paper" || input === "scissors") {
            return input;
        } else {
            alert("You've entered a wrong value");
            return null;
        }
    }

    // Function so the user can enter a string, the functions checks if the string has the corrert value and then returns the input.
    // When the value is wrong the user will get Alert.
    for (let i = 0; i < 5; i++) {
        let userInput = prompt("Enter rock, paper or scrissor").toLowerCase();
        let userAnswer = getHumanChoice(userInput);

        if (userAnswer) {
            console.log(`Round ${i + 1}:`)
            console.log(`You have chosen ${userAnswer}`);

            const humanSelection = userAnswer;
            const computerSelection = getComputerChoice();
            console.log(`Computer has chosen ${computerSelection}`);

            playRound(humanSelection, computerSelection);

            console.log(`Human score: ${humanScore} Computer score: ${computerScore}`);
            console.log("_____________________")
        } else {
            i--; // Doesn't count this round if the user input is invalid.
        }
    }

    console.log("GAME OVER");
    console.log(`Final score: Human ${humanScore} Computer ${computerScore}`);

    if (humanScore > computerScore) {
        console.log("Congratulations you've won the game")
    } else if (humanScore < computerScore) {
        console.log("To bad you've lost");
    } else {
        console.log("It's a tie");
    }
}


// Start/call the game
playGame();






