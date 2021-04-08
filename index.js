
var maxGuess;

function easyMode(){
    maxGuess=10;
    document.getElementById("welcomePage").style.display="none";
    document.getElementById("gamePage").style.display="block";
    document.getElementById('start').style.display='none';
}

function hardMode(){
    maxGuess=5;
    document.getElementById("welcomePage").style.display="none";
    document.getElementById("gamePage").style.display="block";
    document.getElementById('start').style.display='none';
}

function welcomeMode(){
    document.getElementById("welcomePage").style.display="block";
    document.getElementById("gamePage").style.display="none";
}

function gameEnded(){
    document.getElementById("start").style.display="inline";
    document.getElementById("guess").setAttribute("readonly","readonly");
}


var computerGuess;
var userGuess;
var userGuesses=[];
var attempts=0;
function computerFn(){
 computerGuess= Math.floor(Math.random()*100+1);
 console.log(computerGuess);
}

function userAttemptsFn(){
    userGuess=Number(document.getElementById("guess").value);
    document.getElementById("guess").value='';
    userGuesses.push(userGuess);
    attempts++;
    document.getElementById('guessResult').innerText=userGuesses;
    document.getElementById('count').innerText=attempts;
    if(attempts<maxGuess){
        if(userGuess>computerGuess)
        {
        document.getElementById("output").innerHTML="Your Guess is too High";
        }
    else if(userGuess<computerGuess)
        {
        document.getElementById("output").innerHTML="Your Guess is too Low";
        }
    else{
        document.getElementById("output").innerHTML="Congratualations, You won this game in "+attempts+" attempt";
        gameEnded();
        }
    }
    else{
        if(userGuess<computerGuess || userGuess>computerGuess )
        {
            document.getElementById("output").innerHTML="Sorry, You Lose the game :(";
            gameEnded();
        }
        else{
            document.getElementById("output").innerHTML="You won the Game !!!";
            gameEnded();
        }
    }
}