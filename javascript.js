alert("you are playing rock paper scissors");

function getComputerChoice() {
    let selection = Math.floor(Math.random() * 3);
    if (selection == 0)
        return "rock";
    if (selection == 1)
        return "scissors";
    return "paper";
};
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const gameStart = document.querySelector("#startGame");
const numberDisplay = document.querySelector("#numDisplay");
const score = document.querySelector("#score");
let playerselection;

rockBtn.addEventListener("click", () => {
    alert("You click rock nigga");
    playerselection = rockBtn.value; 
})

paperBtn.addEventListener("click", () => {
    alert("You click paper nigga")
    playerselection = paperBtn.value;
    
})


scissorsBtn.addEventListener("click", () => {
    alert("You click scissors nigga")
    playerselection = scissorsBtn.value;
    
})

let scoreResult = 0

gameStart.addEventListener("click", () => {
    console.log(playerselection)
    function playround (playerSelection, computerChoice) {
        if (playerSelection == computerChoice) {
            return {text:"tie", result:"tie"} 
        }
        if (playerSelection == "rock") {
            if (computerChoice == "scissors"){
                return {text :"You got the dub, rock beats scissors", result:"win"}
                
            }
            if (computerChoice == "paper"){
                return {text:"Take the L nigga, paper beats rock", result:"lose"}
            }
        }
        if (playerSelection == "scissors") {
            if (computerChoice == "paper") {
                return {text:"You got the dub, scissors beats paper", result:"win"}
            }
            if (computerChoice == "rock"){
                return {text:"Take the L nigga, rock beats scissors", result:"lose"}
            }
        }

        if (playerSelection == "paper") {
            if (computerChoice == "rock"){
                return {text:"you got the dub, paper beats rock", result:"win"}
            }
            if (computerChoice == "scissors"){
                return {text:"Take the L nigga, scissors beats paper", result:"lose"}
            }
        }
    };
    
    function playgame() {
        computerselection = getComputerChoice()
        console.log(computerselection)
        let result = playround(playerselection, computerselection);
        numberDisplay.textContent = result.text
        if (result.result == "win")
            scoreResult += 1
        score.textContent = scoreResult
        console.log(result.result);
    };

    

    playgame()

})

/*
function getComputerChoice() {
    let selection = Math.floor(Math.random() * 3);
    if (selection == 0)
        return "Rock";
    if (selection == 1)
        return "Scissors";
    return "Paper";
}

function playRound(playerSelection, computerChoice) {
    if (playerSelection == computerChoice)
        return "Tie"
    if (playerSelection == "ROCK") {
        if (computerChoice == "SCISSORS") {
            return "You win! Rock beats Scissors"
        }
        if (computerChoice == "PAPER") {
            return "You Lose! Paper beats Rock"
        }
    }
    if (playerSelection == "SCISSORS") {
        if (computerChoice == "PAPER") {
            return "You win! Sissors beats paper!"
        }
        if (computerChoice == "ROCK") {
            return "You lose! Rock beats Scissors"
        }
    }
    if (playerSelection == "PAPER") {
        if (computerChoice == "ROCK") {
            return "You win! Paper beats rock"
        }
        if (computerChoice == "SCISSORS") {
            return "You lose! Scissors beats Paper"
        }
    }
}

function playGame() {
    let rematch = "Want to play again?";
    while (true) {
        for (let i = 0; i < 5; i++) {
    
            let selectionMsg = "Choose Rock, Paper or Scissors";
            let playerSelection;
            
            while (true) {
                playerSelection = prompt(selectionMsg).toUpperCase();
            
                if (playerSelection == "PAPER" || playerSelection == "ROCK" || playerSelection == "SCISSORS")
                    break;
                
                selectionMsg = "thats not valid, please choose one of the values";
            }
            
            const computerSelection = getComputerChoice();
            alert(playRound(playerSelection.toUpperCase(), computerSelection.toUpperCase()));

        }
        let userAnswer = prompt(rematch).toUpperCase();

        if(userAnswer != "YES"){
            alert("End of game ")
            break;
        }
    }

}

playGame(); */ 

