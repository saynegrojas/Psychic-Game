var wins = 0;
var losses = 0;
var guessesLeft = 10; //start off with 9 guesses till game over
var guessesSoFar = [];

//array of letters
var wordsToGuess = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j','k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't','u', 'v', 'w', 'x', 'y', 'z'];

//reference to id
var directionsText = document.getElementById("directions-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessText = document.getElementById("guess-text");
var guessAmountText = document.getElementById("guess-amount-text");

//randomly pic a letter
var randomLetterSelect = wordsToGuess[Math.floor(Math.random() * wordsToGuess.length)];

//function runs when the user presses a key.
document.onkeyup = function (event) {
    var userGuess = event.key;


    //*****GAME INSTRUCTIONS*****
    //user has to guess which letter the program chose (randomly)
    //guesses so far (specific letters that the user typed. Display)
    //wins(# of times the user guessed the letter correctly)
    //guess left (# of guess left) (update)
    //losses(# of times the user guessed the letter inccorrectly)
    //when the player wins, increase wins counter & start over without refresh
    //when the player loses, increase wins counter & start over without refresh
    console.log(randomLetterSelect);
    console.log(guessesSoFar)
    if (userGuess === randomLetterSelect) {
        wins++;
        guessesLeft = 10;
        guessesSoFar = [];
        //when player wins, guessesLeft is set back to 10, guessesSoFar is set to an empty array
        //when guessesSoFar = [], set randomLetterSelect generates another random number
        if(guessesSoFar = []){
            randomLetterSelect = wordsToGuess[Math.floor(Math.random() * wordsToGuess.length)];
            //error: leaves empty until key is pressed
        }
    } else if (userGuess != randomLetterSelect) {
        guessesLeft--;
    }
     if (guessesLeft === 0) {
        losses++;
        guessesLeft = 10;
        guessesSoFar = [];
    }
    guessesSoFar += userGuess;

    //Display game content 
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guessText.textContent = "Guesses Left: " + guessesLeft;
    guessAmountText.textContent = "Guesses so Far: " + guessesSoFar;
    //variables that hold wins, losses, left guesses, guesses so far and set them equal to their respective value
}