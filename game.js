// timer
let secondsRemaining = 30;
function countdown() {
    setInterval (function () {
        if (secondsRemaining <= 0) {
                alert('TIME\'S UP!!');
                break; 
            function clearQuiz() {     
                var final = document.getElementsByClassName("final-score");
                final.remove();
            } 
            getScore();        
        } 
        document.querySelector("#timer").innerHTML = secondsRemaining
        secondsRemaining -=1
    }, 1000) 
}
countdown ();


// array of possible questions

let questions = [

    {
    question: "What is the correct syntax for referring to an external javascript file called 'xxx.js'?",
    answers: ["<script href='xxx.js'>", "<script url='xxx.js'>", "<script src='xxx.js'>"],
    solution: "3",
    },

    {
    question: "How to write an ‘if’ statement for executing some code if “i” is NOT equal to 5?",
    answers: ["if(i/=5) ", "if i!=5", "if(i!=5)"],
    solution: "3",
    },

    { 
    question: "Which of the following is NOT a reserved word in JavaScript?",
    answers: ["fix", "break", "return"],
    solution: "1", 
    },

    { 
    question: "What is the syntax for creating a function in JavaScript?",
    answers: ["function:()", "function()", "function = ()"],
    solution: "2",
    },

    { 
    question: "What is the correct syntax for adding comments in JavaScript?",
    answers: ["**comments**", "<!--comments-->", "//comments"],
    solution:"3",
    },

    { 
    question: "How do you initialize an array in JavaScript?",
    answers: ["var array = ['A', 'B', 'C']", "var array = (A, B, C)", "var array = 'A', 'B', 'C'"],
    solution: "1",
    },

    {
    question: "String values must be enclosed within ___________ when being assigned to variables.",
    answers: ["Curly Brackets", "Quotes", "Parenthesis"],
    solution: "2",
    },

    {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: ["console.log", "gitHub", "Terminal/Bash"]
    solution: "1",
    },
]

function getQuestion () {

// question counter and score

    let questionCounter = 1;
    let score = 0; 
    let progress = score + " / " + questionCounter;

    document.getElementById("question-counter").textContent = progress;

//populating question and answer boxes 

    for (x=0; x<=questions.length; x++) {
        document.getElementById("question").textContent = questions[x].question;
        document.getElementById("choice1").textContent = questions[x].answers[0];
        document.getElementById("choice2").textContent = questions[x].answers[1];
        document.getElementById("choice3").textContent = questions[x].answers[2];
    }

//correct/incorrect
    function checkAnswer () {
    //click event    
            document.getElementsByClassName("choice-text").addEventListener("click", function correctIncorrect() {
    //get text content of DOM element
                function storeVar(value){
                let amount = value;
                }   
    //compare strings
                if (amount.equals(questions[x].solution)) {
    //if they match = correct        
                    function correctAnswer () {            
                        setInterval (document.GetElementsByClassName("choice-text").style.border = "green", 1000);
                        function itIsCorrect () {
                            var iconCheck = document.createElementNS("svg");
                            iconCheck.href = "bootstrap-icons.svg#check-circle";
                            iconCheck.setAttribute("font-size", "10px");
                            iconCheck.setAttribute("color", green)
                            document.getElementsByClassName("icon").appendChild(iconCheck);
                          }                       
                        function success () {
                            score += 1;
                            var progress = score + " / " + questionCounter;
                            document.getElementById("question-counter").textContent = progress;
                        };
                    }
                } else {
    //if they dont = incorrect 
                    function incorrectAnswer () {
                        setInterval (document.GetElementsByClassName("choice-text").style.border = "red", 1000);
                        function itIsIncorrect() {
                            var iconX = document.createElementNS("svg");
                            iconX.href = "bootstrap-icons.svg#x-circle"; 
                            iconX.setAttribute("font-size", "10px");
                            iconX.setAttribute("color", red);
                            document.getElementByClassName("icon").appendChild(iconX);
                        }
                        secondsRemaining -= 5;
                    }
                }
            })
        function nextQuestion() {
            var btn = document.createElement("BUTTON");
            btn.innerText = "NEXT QUESTION"; 
            btn.classList.add("nextQuestionBtn")
            document.getElementByClassName("next").appendChild(btn);
        } 
 
// Show next question  
    document.getElementByClassName("nextQuestionBtn").addEventListener("click", getQuestion () {
        
        function onClick() {
            questionCounter += 1;
            var progress = score + " / " + questionCounter;
            document.getElementById("question-counter").textContent = progress;
        }
    }
    //score
    function getScore () {
        var highScore = document.createElement("p");
        highScore.innerText = "score"; 
        highScore.classList.add("highScore")
        document.getElementsByClassName("final-score").appendChild(highScore);   
    }   
    
    function saveToLocalStorage() {
        localStorage.setItem("initials", initialInput.value);
        localStorage.setItem("score", score.textContent);
      }