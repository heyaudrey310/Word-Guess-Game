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

    
    var word = words[Math.floor(Math.random() * words.length)];

    var answerArray = [];
    for (var i = 0; i < word.length; i++) {
        answerArray[i] = " ";
    }
    // letters left to be guessed//
    var remainingLetters = word.length;
    while (remainingLetters > 0) {
        alert(answerArray.join(" "));
    }
    letters = document.getElementById("letters");



