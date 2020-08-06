let mostRecentScore =localStorage.getItem("mostRecentScore");
console.log (mostRecentScore);
var str = localStorage.getItem("highScore");
console.log(str);

let highScoreGetter = JSON.parse(localStorage.getItem("highScore"));

result = highScoreGetter.name + "  " + highScoreGetter.score;
console.log(result)

 if (currentHighScore == null){
   currentHighScore = 0;
 }else{
   var currentHighScore = localStorage.getItem("newHighScore");
console.log(currentHighScore);
 }
    
let list = JSON.parse(localStorage.getItem("updatedList") || "[]");
console.log(list);
    




if (mostRecentScore >= currentHighScore) { 
  list.unshift(result);
  currentHighScore = mostRecentScore;
  localStorage.setItem("newHighScore", "currentHighScore");
  console.log (list);
  console.log (currentHighScore);
 localStorage.setItem("updatedList", JSON.stringify(list));
 
} else if (mostRecentScore < currentHighScore) { 
  list.push(result);
 localStorage.setItem("updatedList", JSON.stringify(list));
}


function highScoreArray(array) {
  var scoresList = document.querySelector('ol');
  for (var i = 0; i < 3; i++) {
    var yourScore = document.createElement('li');
    yourScore.setAttribute("font-size", 16);
    yourScore.appendChild(document.createTextNode(array[i]));
    scoresList.appendChild(yourScore);
  }
  return scoresList;
}

highScoreArray(list);
