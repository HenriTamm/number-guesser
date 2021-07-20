let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}

const compareGuesses = (currentHumanGuess, computerGuess, target) => {
    let humanDiff = Math.abs(target - currentHumanGuess);
    let computerDiff = Math.abs(target - computerGuess);
    return humanDiff <= computerDiff;
}

const updateScore = winner => {
    if (winner === 'human') {
        humanScore++;
    } else {
        computerScore++;
    }
}

const advanceRound = () => {
    currentRoundNumber++;
}

