let questionCounter = 0;
let score = 0; 
let progress = score + " / " + questionCounter;

document.getElementById("question-counter").textContent = progress;
 
let secondsRemaining = 30;
function countdown() {
    setInterval (function () {
        if (secondsRemaining < 0) {
            localStorage.setItem("mostRecentScore", score);
            return window.location.assign("final-score.html");            
        } 
        document.querySelector("#timer").innerHTML = secondsRemaining;
        secondsRemaining -=1;
    }, 1000);
}
countdown ();



// array of possible questions

var questions = [

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
    answers: ["console.log", "gitHub", "Terminal/Bash"],
    solution: "1",
    },
]

function myValue1 () {
    var v = "1";
}

function myValue2 () {
    var v = "2";
}

function myValue3 () {
    var v = "3";
}

var x = - 0 


function getQuestion () {
    x++
    questionCounter += 1;

//populating question and answer boxes 

    document.getElementById("question").textContent = questions[x].question;
    document.getElementById("choice1").textContent = questions[x].answers[0];
    document.getElementById("choice2").textContent = questions[x].answers[1];
    document.getElementById("choice3").textContent = questions[x].answers[2];


//correct/incorrect
    function checkAnswer () {
    //compare strings
        if (v==(questions[0].solution)) {
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
                var newScore = function success () {
                    score += 1;
                    }
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
                        document.getElementsByClassName("icon").appendChild(iconX);
                    }
                    secondsRemaining -= 5;               
            }
        }
    }

    
    
}
getQuestion ();
    
   
 
    
