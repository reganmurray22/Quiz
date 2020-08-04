let mostRecentScore = localStorage.getItem("mostRecentScore");
console.log (mostRecentScore);

let highScore = [];

document.getElementById("finalScore").innerText = mostRecentScore;

var username = document.getElementById("username");

document.getElementById("saveScoreBtn").addEventListener("click", function saveHighScore() {
    score = {
    name: username,
    score: mostRecentScore,
    }
 
    localStorage.setItem("highScore", JSON.stringify(score));

    return window.location.assign("high-scores.html");

});