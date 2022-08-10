//GetComputerChoice function returns either Rock, Paper or Scissors
//function that plays single round and takes 2 parameters (Playerselection, Computerselection)
//and then returns a string that declares the winner.

function getComputerChoice() {
    const ChoiceOption = ["Rock", "Paper", "Scissors"];

    let RandomChoice = Math.floor(Math.random()*ChoiceOption.length);
    let RandomChoiceElement = ChoiceOption[RandomChoice];
    console.log(RandomChoiceElement);
}

getComputerChoice();