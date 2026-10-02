const txt = document.querySelector("#txt")
const container = document.querySelector(".container");
console.log(container);


function getComputerChoice() {
	const choice = ['rock', 'paper', 'scissors'];
	return choice[Math.floor(Math.random() * choice.length)];
}

let humanScore = 0;
let computerScore = 0;

function playRound(HumanChoice, ComputerChoice) {
	const human = HumanChoice.toLowerCase();
	const computer = ComputerChoice.toLowerCase();

	if (human == computer)
		txt.textContent = "Draw!"
	else if (human == "rock" && computer == "scissors" || human == "paper" && computer == "rock" || human == "scissors" && computer == "paper") {
		txt.textContent = `You win! ${human} beats ${computer}`
		humanScore++;
	}
	else {
		txt.textContent = `You lose! ${computer} beats ${human}`
		computerScore++;
	}
}


function playGame() {
	const buttons = document.querySelectorAll("button");
	const result = document.querySelector("#natija")
	console.log(prompt);
	result.style.color = "pink";
	result.innerHTML = `<span style="font-weight: bold; font-size:30px;" >You : ${humanScore} </span> <br>`;
	result.innerHTML += `<span style="font-weight: bold; font-size:30px;" > Computer : ${computerScore} </span>`;
	buttons.forEach((button) => {
		button.addEventListener("click", () => {
			const humanChoice = button.id;
			console.log(humanChoice)
			playRound(humanChoice, getComputerChoice());
			console.log("Your score: " + humanScore);
			console.log("Computer score: " + computerScore);
			result.innerHTML = `<span style="font-weight: bold; font-size:30px;" >You : ${humanScore} </span> <br>`;
			result.innerHTML += `<span style="font-weight: bold; font-size:30px;" > Computer : ${computerScore} </span>`;
			if (humanScore >= 5 || computerScore >= 5) {
				if(humanScore > computerScore)
					txt.textContent = "You WIN!"
				else
					txt.textContent = "You LOSE!"
				const tryAgain = document.createElement("button");
				tryAgain.id = "tryAgain";
				tryAgain.classList = "tryAgain"
				tryAgain.textContent = "Try Again";
				container.replaceChildren(tryAgain);
				tryAgain.addEventListener("click", () => {
					txt.textContent= "Player that reaches the five wins first will win the game. ";
					container.innerHTML = `
					<div>
						<button id="rock">
							<img src="https://sihoonathan.github.io/rock-paper-scissors/assets/img/rock.png">
						</button>
					</div>
					<div>
						<button id="paper">
							<img src="https://sihoonathan.github.io/rock-paper-scissors/assets/img/paper.png">
						</button>
					</div>
					<div>
						<button id="Scissors">
							<img src="https://sihoonathan.github.io/rock-paper-scissors/assets/img/scissors.png">
						</button>
					</div>`
					result.innerHTML = `<span style="font-weight: bold; font-size:30px;" >You : ${humanScore} </span> <br>`;
					result.innerHTML += `<span style="font-weight: bold; font-size:30px;" > Computer : ${computerScore} </span>`;

					playGame();
				});
				computerScore = 0;
				humanScore = 0;
			}
		});
	});
}

playGame();
