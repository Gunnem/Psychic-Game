var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var win = 0;
var lose = 0;
var guessesLeft = 9;
var yourGuesses = 0;

document.onkeyup = function() {
    var psychicChooses = options[Math.floor(Math.random()*options.length)];
    console.log(psychicChooses);
    var userGuess = String.fromCharCode(event.keyCode).
        toLowerCase();

    if((userGuess === psychicChooses) && (guessesLeft > 0)){
        win++;
        guessesLeft = 9;
        yourGuesses = 0;
        alert("You are psychic!");
        
    } else if((userGuess !== psychicChooses) && (guessesLeft > 0)){
        guessesLeft--;
        yourGuesses++;
        
    } else{
        win = 0;
        lose++;
        guessesLeft = 9;
        yourGuesses = 0;
    }
       
    var html = "<p><h1>The Psychic Game</h1></p>" +
    "<p>Type the letter I'm thinking of...</p>" +
    "<p>Wins: " + win + "</p>" +
    "<p>Losses: " + lose + "</p>" +
    "<p>Number of guesses left: " + guessesLeft + "</p>" +
    "<p>Your guesses so far: " + yourGuesses + "</p>";

    document.querySelector("#game").innerHTML = html;
}