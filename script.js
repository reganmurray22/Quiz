document.getElementByClassName("intro").addEventListener("click", introRules () {
    document.getElementsByTagName("h1").innerHTML = "How to Play:";
    
    var rules = document.createElement("p");
    rules.innerText = "You will presented with a series of questions about Javascript. Each question has three possible answers, answer correctly to earn a point. You have 60 seconds to answer as many questions as you can. For each incorrect answer 5 seconds will be deducted from your time."; 
    document.getElementById("home").appendChild(rules);

    var start = document.createElement("p");
    start.innerText = "Click the Start button to begin."; 
    document.getElementById("home").appendChild(start);

    var goodLuck = document.createElement("p");
    goodLuck.innerText = "Good luck and happy quizzing!"; 
    document.getElementById("home").appendChild(goodLuck);

    var startBtn = document.getElementById("intro");
    startBtn.innerText = "START";   
    startBtn.setAttribute("href", "./game.html");

    var introPage = document.getElementsByClassName("container-fluid");
    introPage.removeAttribute("background-image");
    introPage.removeAttribute("background-position");
    introPage.removeAttribute("background-repeat");
    introPage.removeAttribute("background-size");
    introPage.removeAttribute("position");

});