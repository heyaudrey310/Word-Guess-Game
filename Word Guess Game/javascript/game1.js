$(function () {
    $("#question").on("click", function () {
        alert("Who's your favorite '90's pop artist?");
    });

    var name = ("Who's your favorite '90's pop artist?");
    console.log("Hello " + name);
    if (name) {
        console.log("That's great! Me too!");
    }
    // List of 90's music artists and variables//
    var words = [
        "NSYNC",
        "Boyz II Men",
        "Aaliyah",
        "TLC",
        "Madonna",
        "Tupac",
    ];
    var wins = 0;
    var losses = 0;
    var wordText = "";
    var blankSpaces = [];
    var guessLetter = "";
    var split = "";
    var guessesLeft = document.getElementById("guessesLeft");
    var winMessage = document.getElementById("winMessage");
    var loseMessage = document.getElementById("loseMessage");

    // Let's get started//
    var words = words[Math.floor(Math.random() * words.length)];

    var answerArray = [];
    for (var i = 0; i < word.length; i++) {
        answerArray[i] = " ";
    }
   return answerArray;  {

   }
//    Guesses left "_" within HTML
   var words = answerArray.join("_");
   document.getElementById("guessesLeft").innerHTML =  words;
   {
    var guessLetter = document.getElementById("_").value;
   }
//    loop created to generate words from word array
   if (word.length > 0) {
       for(var i = 0; i < word.length; i++) {
           if (words[i]=== letter)  {
               answerArray[i] = letter;
           }
       }
   }
//    if letter entered is false
   function guessLetter(letter) {
    var guessLetter = false;
    for (var i = 0; i < word.length; i++)    {
        if (guessedLetter[i] == letter) {
            guessedLetter = true;
            // prompt should show up as "Almost"
        }
    }
   }
   function guessLetter(letter) {
    var guessLetter = false;
    for (var i = 0; i < blankSpaces; i++)    {
        if (guessedLetter[i] == letter) {
            blankSpaces = true;
    // prompt should show up as "Aw, sorry. Better luck next time!"

// if letter entered is correct
// } else if (guessesLeft === 0);...
// prompt should show up as Excellent! You've won!
// Images are supposed to show when user guessed the correct artist.


   

    



