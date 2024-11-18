let userscore = 0;
let computerscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score")
const computerScorePara = document.querySelector("#computer-score")

const genComChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randInx = Math.floor(Math.random()*3);
    return options [randInx];
}


const drawGame = () => {
   
    msg.innerText = "It's a Draw. Play again";
    msg.style.backgroundColor = "#081b31";
}
const showWinner = (userWin) => {
    if(userWin){
       userscore ++;
       userScorePara.innerText = userscore;
        msg.innerText = "You Win!";
        msg.style.backgroundColor = "green";
    }else {
        computerscore ++;
        computerScorePara.innerText = computerscore;
        msg.innerText = "You Lose.";
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log(`userChoice = ${userChoice}`);
    //genrate computer choice
    const computerChoice = genComChoice();
    console.log(`computer Choice = ${computerChoice}`);


    if(userChoice === computerChoice){
       drawGame();
    }else {
        let userWin = true;
        if(userChoice === "rock"){
            userWin = computerChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            userWin = computerChoice === "scissors"? false : true;
        }else {
            userWin = computerChoice === "rock"? false : true;
        }
        showWinner(userWin);
    }
};



choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked",userChoice);
        playGame(userChoice);

    });
});