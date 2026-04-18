console.log("hello bitch");
let humanScore=0;
let compScore=0;

function getCompChoice(){
    
    let a= Math.floor(Math.random()*3);
    
    if(a==0)return "rock";
    else if(a==1)return "paper";
    else return "scissor"


    //0->rock
    //1->paper
    //2->scissor
}

function getHumanChoice(){
    let b= prompt("your choice: ");
    return b;
}

// const compChoice=getCompChoice();
// // console.log(compChoice);
// const humanChoice=getHumanChoice().toLowerCase();
// console.log(humanChoice);

function playRound(humanChoice,compChoice){

    if(humanChoice==compChoice){
        // console.log("Tie");
        return;
    }
    
    if(humanChoice=="rock"){
        if(compChoice=="paper")compScore++;
        else humanScore++;
    }
    else if(humanChoice=="paper"){
        if(compChoice=="rock")humanScore++;
        else compScore++;
    }
    else{
        if(compChoice=="paper")humanScore++;
        else compScore++;
    }

}

for(let i=0;i<5;i++){
    const compChoice=getCompChoice();
    const humanChoice=getHumanChoice().toLowerCase();
    playRound(humanChoice,compChoice);
    console.log("human chose: "+humanChoice);
    console.log("comp chose: "+compChoice);
    console.log("current score: "+ `human: ${humanScore} `+ `computer: ${compScore}`);
}



function winner(humanScore,compScore){
    if(humanScore>compScore)console.log("human wins");
    else if(humanScore<compScore)console.log("computer wins");
    else console.log("it is a tie");
}

winner(humanScore,compScore);