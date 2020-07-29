// timer
let secondsRemaining = 30;
function countdown() {
    setInterval (function () {
    if (secondsRemaining <= 0) {
    clearInterval (secondsRemaining = 0);
    } 
    document.querySelector("#timer").innerHTML = secondsRemaining
    secondsRemaining -=1
    }, 1000) 
}
    if (secondsRemaining <= 0) {
        alert("GAME OVER!!");
     }
 
countdown ();


// array of possible questions

let questions = [

    {
    question: "What is the correct syntax for referring to an external javascript file called 'xxx.js'?",
    answers: ["\<script href='xxx.js'\>", "\<script url='xxx.js'\>", "\<script src='xxx.js'\>"],
    solution: "<script src='xxx.js'>",
    },

    { 
    question: "Which of the following is NOT a reserved word in JavaScript?",
    answers: ["fix", "break", "return"],
    solution: "fix", 
    },

    { 
    question: "What is the syntax for creating a function in JavaScript?",
    answers: ["function:()", "function()", "function = ()"],
    solution: "function ()",
    },

    { 
    question: "What is the correct syntax for adding comments in JavaScript?",
    answers: ["**comments**", "<!--comments-->", "//comments"],
    solution:"//comments",
    },

    { 
    question: "How do you initialize an array in JavaScript?",
    answers: ["var array = ['A', 'B', 'C']", "var array = (A, B, C)", "var array = 'A', 'B', 'C'"],
    solution: "var array = ['A', 'B', 'C']",
    },

]

let x = 0

function startQuiz () {


// question counter and score

// question counter and score

let questionCounter = 1;
let score = 0; 
let progress = score + " / " + questionCounter;

document.getElementById("question-counter").textContent = progress;

//populating question and answer boxes    
    document.getElementById("question").textContent = questions[x].question;
    document.getElementById("choice1").textContent = questions[x].answers[0];
    document.getElementById("choice2").textContent = questions[x].answers[1];
    document.getElementById("choice3").textContent = questions[x].answers[2];

    document.getElementById("submitBtn").addEventListener("click", getNewQuestion()); 
}


function getNewQuestion () {
questionCounter++
x++
document.getElementById("question").textContent = questions[x].question;
document.getElementById("choice1").textContent = questions[x].answers[0];
document.getElementById("choice2").textContent = questions[x].answers[1];
document.getElementById("choice3").textContent = questions[x].answers[2];

document.getElementById("submitBtn").addEventListener("click", getNewQuestion); 

}
//on correct answer score++
//str1.equals(str2);

