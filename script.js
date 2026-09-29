function getComputerChoice()
{
	const choice = ['rock', 'paper', 'sciossors'];
	return choice[Math.floor(Math.random() * choice.length)];
}

function getHumanChoice()
{
	const choice = prompt("rock, paper or scissors?")
	return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(HumanChoice, ComputerChoice)
{
	const human = HumanChoice.toLowerCase();
	const computer = ComputerChoice.toLowerCase();

	if (human == computer)
		console.log("Draw!");
	else if (human == "rock" && computer == "scissors" || human == "paper" && computer == "rock" || human == "scissors" && computer == "paper")
	{
		console.log("You win! " + human + " beats " + computer);
		humanScore++;
	}
	else
	{
		console.log("You lose! " + computer + " beats " + human);
		computerScore++;
	}
}


function playGame()
{
	for (let i = 0; i < 5; i++)
	{
		const humanSelection = getHumanChoice();
		const computerSelection = getComputerChoice();
	
		playRound(humanSelection, computerSelection); 
	}
}

playGame();

console.log("Your score: " + humanScore);
console.log("Computer score: " + computerScore);
