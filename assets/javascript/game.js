
// //variables that hold wins, losses, left guesses, guesses so far and set them equal to their respective value
// var wins = 0,
// losses = 0,
// guessesLeft = 9. //start off with 9 guesses till game over
// guessesSoFar = 0;

// //array of letters
//  var wordsToGuess = ['k','i','n','g','s','l','a','y','e','r'];

//     var directionsText = document.getElementById("directions-text");
//     var winsText = document.getElementById("wins-text");
//     var lossesText = document.getElementById("losses-text");
//     var guessText = document.getElementById("guess-text");
//     var guessAmountText = document.getElementById("guess-amount-text");

//  var randomGuess = wordsToGuess[Math.floor(Math.random()*wordsToGuess.length)];


// //console.log(randomGuess);

// // This function is run whenever the user presses a key.
// document.onkeyup = function(event) {

//     // Determines which key was pressed.
//     var userGuess = event.key;

//     if (userGuess === randomGuess) {
//           wins++;
//         } else if (userGuess != randomGuess) {
//           losses++;
//           guessesLeft--;
//         }

//         //Display game content 
//         winsText.textContent = "Wins: " + wins;
//         lossesText.textContent = "Losses: " + losses;
//         guessText.textContent = "Guesses Left " + guessesLeft;
//         guessAmountText.contains = "Guesses so Far " + guessesSoFar;

//         // computerChoiceText.textContent = "The computer chose: " + computerGuess;
//         // winsText.textContent = "wins: " + wins;
//         // lossesText.textContent = "losses: " + losses;
//         // tiesText.textContent = "ties: " + ties;
// }
// /* <p id="directions-text">
    //         <strong>Guess what letter I'm thinking of</strong>    
    //     </p>
    //     <p id="wins-text">
    //         <strong>Wins:</strong>
    //     </p>
    //     <p id="losses-text">
    //         <strong>Losses:</strong>
    //     </p>
    //     <p id="guess-text">
    //         <strong>Guesses Left:</strong>
    //     </p>
    //     <p id="guess-amount-text">
    //         <strong>Guesses so Far:</strong>
    //     </p>
    // </div> */