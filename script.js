// Elements
const start = document.getElementById("start")
const quiz = document.getElementById("quiz")
const question = document.getElementById("question")
const timer = document.getElementById("timer")

const choiceA = document.getElementById("A")
const choiceB = document.getElementById("B")
const choiceC = document.getElementById("C")
const choiceD = document.getElementById("D")


//Create questions
let questions = [
{   question: "What does HTML stand for?",
    choiceA: "Correct",
    choiceB: "Wrong",
    choiceC: "Wrong",
    choiceD: "Wrong",
    correct: "A"
    },{
    question: "What does HTML stand for?",
    choiceA: "Wrong",
    choiceB: "Wrong",
    choiceC: "Correct",
    choiceD: "Wrong",
    correct: "C"
    },{
    question: "What does HTML stand for?",
    choiceA: "Wrong",
    choiceB: "Wrong",
    choiceC: "Wrong",
    choiceD: "Correct",
    correct: "D"
    },{
    question: "What does HTML stand for?",
    choiceA: "Wrong",
    choiceB: "Correct",
    choiceC: "Wrong",
    choiceD: "Wrong",
    correct: "B"
    },{

    question: "WHat does HTML stand for?",
    choiceA: "Wrong",
    choiceB: "Correct",
    choiceC: "Wrong",
    choiceD: "Wrong",
    correct: "B"
    }
];


// Rendering the questions

let lastQuestion = questions.length -1;
let runningQuestion = 0;

function renderQuestion() {
    let q = questions[runningQuestion];
        question.innerHTML - "<p>" + q.question + "</p>";
        choiceA.innerHTML = q.choiceA;
        choiceB.innerHTML = q.choiceB;
        choiceC.innerHTML = q.choiceC;
        choiceD.innerHTML = q.choiceD;
}
start.style.display - "none";
renderQuestion();
quiz.style.display = "block";

//Next question

renderQuestion(); {
    runningQuestionIndex++;

    renderQuestion();
}

// Timer

const startTimer = 75; //75 second timer
let timer = 75;

function countdown() {
    let 
}

var seconds = document.getElementById("timer").textContent;
var countdown = setInterval(function() {
    seconds--;
    document.getElementById("timer").textContent = seconds;
    if (seconds <= 0) clearInterval(countdown);
}, 1000);

//Check Answer

function checkAnswer(answer) {
    if (questions[runningQuestionIndex].correct == answer){
        timer + 5;
    } else {
        timer -10;
    }
}

//Start Quiz

start.addEventListener("click", startQuiz);

    function startQuiz(){
        
        counterRender();
        timer = setInterval(counterRender, 1000);
        questionRender;
        
    }