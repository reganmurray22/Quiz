let username = document.getElementById("username");
let saveScoreBtn = document.getElementById("saveScoreBtn");
let finalScore = document.getElementById("finalScore");
let mostRecentScore = localStorage.getItem("mostRecentScore");

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];


finalScore.innerText = mostRecentScore;

saveScoreBtn.addEventListener("click", savHighScore());

saveHighScore = (e) => {
    e.preventDefault();

    const score = {
        score: mostRecentScore.value,
        name: username.value,
    };
    highScores.push(score);

    localStorage.setItem("highScores", JSON.stringify(highScores));
    return window.location.assign("high-scores.html");
};