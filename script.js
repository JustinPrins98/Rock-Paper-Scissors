let humanScore = 0;
let computerScore = 0;





// Function that let's the CPU randomly pick one of the three strings inside the array.
function getComputerChoice() {
    const choices = ["rock", "paper", "scissor"];
    const randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
}

console.log(getComputerChoice());


// Function so the user can enter a string, the functions checks if the string has the corrert value and then returns the input.
// When the value is wrong the user will get Alert.
let userInput = prompt("Enter rock, paper or scrissor").toLowerCase();

function getHumanChoice(input) {
    if (input === "rock" || input === "paper" || input === "scissor") {
        return input;
    } else {
        alert("You've entered a wrong value");
        return null;
    }
}

// Calls the funtion getHumanChoice when UserInput get a value.
let userAnswer = getHumanChoice(userInput);
// Console.log's the return value of UserAnswer.
if (userAnswer) {
    console.log(`You have chosen ${userAnswer}`);
}