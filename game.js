// timer
let secondsRemaining = 10;
function countdown() {
    setInterval (function () {
        if (secondsRemaining < 0) {
            localStorage.setItem("mostRecentScore", score);
//go to the final-score page
            return window.location.assign("final-score.html");
          }   
        } 
        document.querySelector("#timer").innerHTML = secondsRemaining
        secondsRemaining -=1
    }, 1000) 
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

let questionCounter = 0;
let score = 0; 
let progress = score + " / " + questionCounter;

let x = 0;

function myValue1 () {
    var v = "1";
    checkAnswer ();
}

function myValue2 () {
    var v = "2";
    checkAnswer ();
}

function myValue3 () {
    var v = "3";
    checkAnswer ();
}

for (x=0; x<=questions.length; x++) {


// question counter and score
      
    function counterAdd() {
        questionCounter += 1;
        var progress = score + " / " + questionCounter;
        document.getElementById("question-counter").textContent = progress;    
    }

//populating question and answer boxes 

    document.getElementById("question").textContent = questions[x].question;
    document.getElementById("choice1").textContent = questions[x].answers[0];
    document.getElementById("choice2").textContent = questions[x].answers[1];
    document.getElementById("choice3").textContent = questions[x].answers[2];


//correct/incorrect
    function checkAnswer () {
    //compare strings
        if (v==(questions[x].solution)) {
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
                    document.getElementsById("question-counter").textContent = progress;
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

let mostRecentScore = localStorage.getItem('mostRecentScore');
    
   
 
    
