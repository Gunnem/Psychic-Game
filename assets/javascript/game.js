var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var win = 0;
var lose = 0;
var guessesLeft = 9;
var yourGuesses = [];
var computerPick = [];

window.onload = function() {
    var compPick = options[Math.floor(Math.random()*options.length)];
    computerPick.push(compPick);
    console.log(computerPick[0]);
}

document.onkeyup = function() {
        var userGuess = String.fromCharCode(event.keyCode).
        toLowerCase();
        yourGuesses.push(userGuess);

    if((userGuess === computerPick[0]) && (guessesLeft > 0)){
        win++;
        guessesLeft = 9;
        yourGuesses.length = 0;
        computerPick.length = 0;
        var compPick = options[Math.floor(Math.random()*options.length)];
        computerPick.push(compPick);
        console.log(computerPick[0]);
        alert("You are psychic!");
        
    } else if((userGuess !== computerPick[0]) && (guessesLeft > 0)){
        guessesLeft--;
            
    } else{
        win = 0;
        lose++;
        guessesLeft = 9;
        yourGuesses.length = 0;
        var compPick = options[Math.floor(Math.random()*options.length)];
        computerPick.push(compPick);
        console.log(computerPick[0]);
    }
   
    var html = "<p><h1>The Psychic Game</h1></p>" +
    "<p>Type the letter I'm thinking of...</p>" +
    "<p>Wins: " + win + "</p>" +
    "<p>Losses: " + lose + "</p>" +
    "<p>Number of guesses left: " + guessesLeft + "</p>" +
    "<p>Your guesses so far: " + yourGuesses + "</p>";

    document.querySelector("#game").innerHTML = html;
}