
// first Interactive game

const choices  = ['rock', 'paper', 'scissors'];

let playGame = confirm("Shall we play rock, paper, or scissors?");

if(playGame){
   
    let playerChoice = prompt("please enter rock, paper or scissors");

    if(playerChoice){
        let playerOne = playerChoice.trim().toLowerCase();
        let playerTwo = choices[Math.floor(Math.random()*3)];
        
        if(playerOne == playerTwo){
            alert("Match tie");

        }else if(
            (playerOne==='rock' && playerTwo==='scissors') || 
            (playerOne==='paper' && playerTwo === 'rock') ||
            (playerOne==='scissors' && playerTwo === 'paper')
        ){

            alert("You won!!!")
        }else if(playerOne==="rock" || playerOne==="paper" || playerOne==="scissors"){
            alert("you Lost (:");
        }else{
            alert("wrong input from player one")
        }

       let playAgain = confirm("play again? ");
       playAgain? location.reload() : alert("Ok, thanks for playing!!");

    }else{
        alert("I guess you changed your mind,maybe next time...")
    }



}else{
    alert("Ok, maybe next time. ");
}