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
    answers: ["<script href='xxx.js'>", "<script url='xxx.js'>", "<script src='xxx.js'>"],
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

]



function startQuiz () {


// question counter and score

// question counter and score
    let x = 0
    let questionCounter = 1;
    let score = 0; 
    let progress = score + " / " + questionCounter;

    document.getElementById("question-counter").textContent = progress;

//populating question and answer boxes    
    document.getElementById("question").textContent = questions[x].question;
    document.getElementById("choice1").textContent = questions[x].answers[0];
    document.getElementById("choice2").textContent = questions[x].answers[1];

//correct/incorrect
    function checkAnswer () {
//click event    
        document.getElementsByClassName("choice-text").addEventListener("click", function () {
//get text content of DOM element
            function storeVar(value){
            let amount = value;
            }   
//compare strings
            if (amount.equals(questions[x].solution)) {
//if they match = correct        
                function correctAnswer () {            
                    setInterval (document.GetElementsByClassName("choice-text").style.border = "green", 1000);
                    function myFunction() {
                        var iconCheck = document.createElement("INPUT");
                        iconCheck.setAttribute("type", "placeholder");
                        iconCheck.setAttribute("value", data-feather = "check-circle");
                        iconCheck.setAttribute("color", green)
                        document.getElementsByClassName.appendChild(iconCheck);
                      }
                    score++;
                }
            } else {
//if they dont = incorrect 
                function incorrectAnswer () {
                    setInterval (document.GetElementsByClassName("choice-text").style.border = "red", 1000);
                    function myFunction() {
                        var iconX = document.createElement("INPUT");
                        iconX.setAttribute("type", "placeholder");
                        iconX.setAttribute("value", data-feather = "x-circle");
                        iconX.setAttribute("color", red)
                        document.getElementsByClassName.appendChild(iconX);
                    }
                    secondsRemaining -= 5;
                }
            }
        })
    function nextQuestion() {
        var btn = document.createElement("BUTTON");
        btn.innerText = "NEXT QUESTION"; 
        document.getElementsByClassName("next").appendChild(btn);
      }    
}


    
function getNewQuestion () {
questionCounter = questionCounter++
x = x++
document.getElementById("question").textContent = questions[x].question;
document.getElementById("choice1").textContent = questions[x].answers[0];
document.getElementById("choice2").textContent = questions[x].answers[1];
document.getElementById("choice3").textContent = questions[x].answers[2];

document.getElementById("submitBtn").addEventListener("click", getNewQuestion); 

}
//on correct answer score++


