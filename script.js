// Elements
const start = document.getElementById("start")
const quiz = document.getElementById("quiz")
const queston = document.getElementById("question")
const timer = document.getElementById("timer")

const choiceA = document.getElementById("A")
const choiceB = document.getElementById("B")
const choiceC = document.getElementById("C")
const choiceD = document.getElementById("D")

// Rendering the questions

let lastQuestionIndex = questions.length -1;
let runningQuestionIndex = 0;

function renderQuestion() {
    let q =questions[runningQuestionIndex];
    question.innerHTML - "<p>" + q.question + "</p>";
        choiceA.innerHTML = q.choiceA;
        choiceB.innerHTML = q.choiceB;
        choiceC.innerHTML = q.choiceC;
        choiceD.innerHTML = q.choiceD;
}

//Next question

function renderQuestion() {
    runningQuestionIndex++;
}