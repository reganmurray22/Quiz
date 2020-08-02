let winner = localStorage.getItem("name");
let highScore = localStorage.getItem("score");

console.log (winner);
console.log (highScore);

let result = winner.concat ("    ", highScore);

let currentHighScore = 0;

const highScoresList = document.getElementById("highScoresList");

if (highScore >= currentHighScore) {
  var yourScore = document.createElement("li");
  yourScore.innerHTML = result;
  yourScore.setAttribute("font-size", 16);
  document.getElementById("highScoresList").appendChild(yourScore);

  currentHighScore = highScore;
}


 

