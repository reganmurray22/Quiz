// timer
var seconds = 60, $seconds = document.querySelector('#timer');
(function countdown() {
    $seconds.textContent = seconds + ('s')
    if(seconds --> 0) { setTimeout(countdown, 1000)
    } else {(seconds = 0)
    alert("GAME OVER!!")}
})();
;

// array of possible questions
let questions = [

    {
    question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
    answers = ["<script href='xxx.js'>", "<script url='xxx.js'>", "<script src='xxx.js'>"],
    solution: "<script src='xxx.js'>",
    },

    { 
    question: "Which of the following is NOT a reserved word in JavaScript?",
    answer: ["fix", "break", "return",],
    },

    { 
    question: "What is the syntax for creating a function in JavaScript?",
    answer: ["function:()", "function()", "function = ()",],
    },

    { 
    question: "What is the correct syntax for adding comments in JavaScript?",
    answer: ["**comments**", "<!--comments-->", "//comments",],
    },

    { 
    question: "How do you initialize an array in JavaScript?",
    answers: ["var array = ['A', 'B', 'C']", "var array = (A, B, C)", "var array = 'A', 'B', 'C'",],
    },

];
console.log (questions[0].answer1);

//set loop to add progress to 1/7 everytime there is a new question
    var totalQuestions = x;    

     document.getElementById("question").innerHTML = questions[0].question;
     document.getElementById("choice1").innerHTML = questions[0].answers[0];
     document.getElementById("choice2").innerHTML = questions[0].answers[1];
     document.getElementById("choice3").innerHTML = questions[0].answers[2];
      


