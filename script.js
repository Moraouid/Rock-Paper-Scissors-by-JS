function getComputerChoice()
{
	if (Math.floor(Math.random() * 3) == 0)
		return "rook";
	else if (Math.floor(Math.random() * 3) == 1)
		return "paper";
	else (Math.floor(Math.random() * 3) == 2)
		return "scissors";
}

function getHumanChoice()
{
	const choice = prompt("rook, paper or scissors?")
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
	else if (human == "rook" && computer == "scissors" || human == "paper" && computer == "rook" || human == "scissors" && computer == "paper")
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