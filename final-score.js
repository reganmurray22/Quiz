let mostRecentScore = localStorage.getItem("mostRecentScore");
console.log (mostRecentScore);

document.getElementById("finalScore").innerText = mostRecentScore;

let username = document.getElementById("username");

document.getElementById("saveScoreBtn").addEventListener("click", saveHighScore());

function saveHighScore() {

    const result = {
        nameKey: name,
        nameValue: username.value,
        scoreKey: score,
        scoreValue: mostRecentScore,
    }  

    console.log(nameKey, nameValue);
    console.log (scoreKey, scoreValue);
    
    localStorage.setItem (nameKey, nameValue);
    localStorage.setItem (scoreKey, scoreValue);

    return window.location.assign("high-scores.html");
};