let mostRecentScore =localStorage.getItem("mostRecentScore");
console.log (mostRecentScore);

let highScoreGetter = JSON.parse(localStorage.getItem("highScoreGetter"));
var result = highScoreGetter.name + "  " + highScoreGetter.score;

var currentHighScore = localStorage.getItem("newHighScore");

const highScoresList = [];

if (currentHighScore == null) {
  var currentHighScore = "0";
  highScoresList();
} else {
  function highScoresList () {
    if (mostRecentScore >= currentHighScore) { 
      highScoresList.unshift(result);
      currentHighScore = mostRecentScore;
      localStorage.setItem("newHighScore", currentHighScore);
    }

    function highScoreArray(array) {
      var scoresList = document.createElement('ul');
      for (var i = 0; i < 3; i++) {
        var yourScore = document.createElement('li');
        yourScore.setAttribute("font-size", 16);
        yourScore.appendChild(document.createTextNode(array[i]));
        scoresList.appendChild(yourScore);
      }
      return scoresList;
    }

    document.querySelector('H1').appendChild(highScoreArray(highScoresList));
  } 
}
