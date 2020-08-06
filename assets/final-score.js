let mostRecentScore = localStorage.getItem("mostRecentScore");
console.log (mostRecentScore);

let highScore = [];

document.getElementById("finalScore").innerText = mostRecentScore;



document.getElementById("saveScoreBtn").addEventListener("click", function saveHighScore() {
    var username = document.getElementById("username").value;    
    score = {
    name: username,
    score: mostRecentScore,
    }
 
    var str = localStorage.setItem("highScore", JSON.stringify(score));

    return window.location.assign("high-scores.html");

});