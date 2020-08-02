let winner = localStorage.getItem("nameKey");
let highScore = localStorage.getItem("scoreKey");

let currentHighScore = 0

const highScoresList = document.getElementById("highScoresList");

if (highScore >= currentHighScore) {
  var yourScore = document.createElement("li");
  yourScore.innerText = winner + "   " + highScore;
  document.getElementById("highScoresList").appendChild(yourScore);
} 



 

