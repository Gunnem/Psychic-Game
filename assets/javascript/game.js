var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var psychicChooses = options[Math.floor(Math.random()*options.length)];

    console.log(psychicChooses)

var win = 0;
var lose = 0;
var guessesLeft = 9;
var yourGuesses = 0;

document.onkeyup = function() {
    var userGuess = String.fromCharCode(event.keyCode).
        toLowerCase();

        console.log(userGuess)

    if(userGuess === psychicChooses) && (guessesLeft > 0{
        win++;
        alert("You are psychic!");
        
    } else {
        lose++;
        guessesLeft--
        yourGuesses++
        alert("try again");
        
    }
    
    var html = "<p><h1>The Psychic Game</h1></p>" +
    "<p>Type the letter I'm thinking of...</p>" +
    "<p>Wins: " + win + "</p>" +
    "<p>Losses: " + lose + "</p>" +
    "<p>Number of guesses left: " + guessesLeft + "</p>" +
    "<p>Your guesses so far: " + yourGuesses + "</p>" +

    document.querySelector( '#game').innerHTML = html;
}