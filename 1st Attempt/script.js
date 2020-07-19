/*/ Elements
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
    choiceA: "Hypertext ",
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


// Countown Timer

/*const startingMinutes = .1;
let time = startingMinutes * 60;

const countdownEl = document.getElementById("countdown")

setInterval(updateCountdown, 1000);

function updateCountdown() {
const minutes = Math.floor(time / 60);
let seconds = time % 60;

seconds = seconds < 10 ? "0" + seconds : seconds;
countdownEl.innerHTML = `${minutes}: ${seconds}`;
    time--;
    if (minutes == 0 && seconds == 0) {
        return;
    }
}*/


// Start Page Variables
const startpageContainerEl = document.getElementById("startpage")
const startBtn = document.getElementById("start-button")
const quizContainerEl = document.getElementById("quiz")
const timescoreContainerEl = document.getElementById("timescore")

let shuffledQuestions, currentQuestionIndex

const questionEl = document.getElementById("question")
const answerBtnEl = document.getElementById("choices")


// Start Quiz
startBtn.addEventListener("click", startQuiz);

function startQuiz() {
    console.log("Started")
    startBtn.classList.add("hide")
    shuffledQuestions = questions.sort(() => Math.random() - .5) //Shuffles questions each time the quiz is taken.
    currentQuestionIndex = 0;
    startpageContainerEl.classList.add("hide")
    quizContainerEl.classList.remove("hide")
    timescoreContainerEl.classList.remove("hide")
    setNextQuestion()
}

// Load Questions
function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionEl.innerText = question.question

// Creates button for each answer choice.
    question.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn","btn-secondary", "btn-light", "btn-lg", "btn-block")

        // Check Answer
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerBtnEl.appendChild(button)
    })
}

function resetState () {
    while (answerBtnEl.firstChild) {
        answerBtnEl.removeChild
        (answerBtnEl.firstChild)
    }
}

function selectAnswer(e) {

}
// Quiz Questions

const questions = [
    {   
        question: "What does HTML stand for?",
        answers: [
         {text: "Hypertext Markup Language", correct: true},
         {text: "Hyperlink Markup Language", correct: false},
         {text: "How To Make Language", correct: false},
         {text: "Hypertext Marking Language", correct: false}
        ]
        
        }]/*,
    {   question: "Besides 'var', what other two ways can you declare a variable?",
        choiceA: "'let' and 'for'",
        choiceB: "'if' and 'else'",
        choiceC: "'this' and 'const'",
        choiceD: "'let' and 'const'",
        answer: "'let' and 'const'"
        },
    {   question: "How do you style an HTML file?",
        choiceA: "jQuery ",
        choiceB: "Javascript",
        choiceC: "CSS",
        choiceD: "MongoDB",
        answer: "CSS"
        },    
    {   question: "What does CSS stand for?",
        choiceA: "Comment Styled Sheets",
        choiceB: "Cascading Style Sheets",
        choiceC: "Constructing Style Sheets",
        choiceD: "Case Styling Sheets",
        answer: "Cascading Style Sheets"
        }, 
    {   question: "What is the proper syntax for an array object?",
        choiceA: "var carMakes = (Toyota, BMW, Ford)",
        choiceB: "var carMakes = ['Toyota', 'BMW', 'Ford']",
        choiceC: "var carMakes = ['Toyota' 'BMW' 'Ford']",
        choiceD: "var carMakes = {'Toyota', 'BMW', 'Ford'}",
        answer: "var carMakes = ['Toyota', 'BMW', 'Ford']"
        },  
    {   question: "What does the concat() Method do?",
        choiceA: "It is used to join two or more arrays.",
        choiceB: "It is used to store strings of characters.",
        choiceC: "It is used style buttons.",
        choiceD: "It is used to find felines with a criminal records.",
        answer: "It is used to join two or more arrays."
        },  
    {   question: "What character is used to define/access jQuery?",
        choiceA: "#",
        choiceB: ".",
        choiceC: "$",
        choiceD: "&&",
        answer: "$"
        },   
    {   question: "What is Bootstrap?",
        choiceA: "It is a library of functions for use with JavaScript.",
        choiceB: "It is a CSS Framework for developing responsive and mobile-first websites.",
        choiceC: "It is a jQuery Framework that is a lightweight, 'write less, do more', JavaScript library.",
        choiceD: "A tool by which you pick yourself up, usually in pairs.",
        answer: "It is a CSS Framework for developing responsive and mobile-first websites."
        },
    {   question: "What does a 'Responsive Web Design' mean?",
        choiceA: "Making sure your website is quick to access links and articles.",
        choiceB: "Creating voice commands to access parts of the webpage instad of using a mouse.",
        choiceC: "Adding animation to images and buttons.",
        choiceD: "Making a website look good on all devices (desktops, tablets, and phones).",
        answer: "Making a website look good on all devices (desktops, tablets, and phones)."
        },
    {   question: "What is the proper syntax for a media query?",
        choiceA: "'?media' in the HTML file. ",
        choiceB: "'@media' in the CSS file.",
        choiceC: "'@media' in the JavaScript file.",
        choiceD: "'@mediaScreen' in the CSS file.",
        answer: "'@media' in the CSS file."
        }
]
// Countdown Timer

document.getElementById('timer').innerHTML =
  002 + ":" + 00;
startTimer();

function startTimer() {
  var presentTime = document.getElementById('timer').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}
  //if(m<0){alert('timer completed')}
  
  document.getElementById('timer').innerHTML =
    m + ":" + s;
  console.log(m)
  setTimeout(startTimer, 1000);
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
  if (sec < 0) {sec = "59"};
  return sec;
} */
