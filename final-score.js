let mostRecentScore = localStorage.getItem("mostRecentScore");
console.log (mostRecentScore);

document.getElementById("finalScore").innerText = mostRecentScore;

var username = toString (document.getElementById("username").value);

console.log (username);

document.getElementById("saveScoreBtn").addEventListener("click", function saveHighScore() {
    
    localStorage.setItem ("name", username);
    localStorage.setItem ("score", mostRecentScore);
    

    return window.location.assign("high-scores.html");
});