function introRules () {
    document.getElementById("header").innerHTML = "How to Play:";
    
    var rules = document.createElement("p");
    rules.innerText = "You will presented with a series of questions about Javascript. Each question has three possible answers, answer correctly to earn a point. You have 30 seconds to answer as many questions as you can. For each incorrect answer 5 seconds will be deducted from your time."; 
    document.getElementById("body").appendChild(rules);

    var start = document.createElement("p");
    start.innerText = "Click the Start button to begin.";
    start.setAttribute("text-align", "center"); 
    document.getElementById("body").appendChild(start);

    var goodLuck = document.createElement("p");
    goodLuck.innerText = "Good luck and happy quizzing!";
    goodLuck.setAttribute ("text-align", "center"); 
    document.getElementById("body").appendChild(goodLuck);  
    
    var elem = document.getElementById("intro");
    elem.parentNode.removeChild(elem);


    var startBtn = document.createElement("a");
    startBtn.innerText = "START";
    document.getElementById("home").appendChild(startBtn);
    startBtn.classList.add("btn");
    startBtn.setAttribute ("href", "game.html");

}
