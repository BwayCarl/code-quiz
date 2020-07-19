

/*


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
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct

    setStatusClass(document.body, correct)
    Array.from(answerBtnEl.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
}

function setStatusClass(element, correct) {
    clearStatusClass(element)

    if (correct) {
        element.classList.add("correct")
    } else (
        element.classList.add("wrong")
    )
}

function clearStatusClass(element) {
    element.classList.remove("correct")
    element.classList.remove("wrong")
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
        ]},

    {   question: "Besides 'var', what other two ways can you declare a variable?",
        answers: [
        {text: "'let' and 'for'", correct: false},
        {text: "'if' and 'else'", correct: false},
        {text: "'this' and 'const'", correct: false},
        {text: "'let' and 'const'", correct: true},
        ]},

    {   question: "How do you style an HTML file?",
        answers: [
        {text: "jQuery ", correct: false},
        {text: "Javascript", correct: false},
        {text: "CSS", correct: true},
        {text: "MongoDB", correct: false},
        ]}, 

    {   question: "What does CSS stand for?",
        answers: [
        {text: "Comment Styled Sheets", correct: false},
        {text: "Cascading Style Sheets", correct: true},
        {text: "Constructing Style Sheets", correct: false},
        {text: "Case Styling Sheets", correct: false},
        ]}, 

    {   question: "What is the proper syntax for an array object?",
    answers: [
        {text: "var carMakes = (Toyota, BMW, Ford)", correct: false},
        {text: "var carMakes = ['Toyota', 'BMW', 'Ford']", correct: true},
        {text: "var carMakes = ['Toyota' 'BMW' 'Ford']", correct: false},
        {text: "var carMakes = {'Toyota', 'BMW', 'Ford'}", correct: false},
    ]},  

    {   question: "What does the concat() Method do?",
        answers: [
        {text: "It is used to join two or more arrays.", correct: true},
        {text: "It is used to store strings of characters.", correct: false},
        {text: "It is used style buttons.", correct: false},
        {text: "It is used to find felines with a criminal records.", correct: false},
        ]},  

    {   question: "What character is used to define/access jQuery?",
        answers: [
        {text: "#", correct: false},
        {text: ".", correct: false},
        {text: "$", correct: true},
        {text: "&&", correct: false},
        ]},   

    {   question: "What is Bootstrap?",
        answers: [
        {text: "It is a library of functions for use with JavaScript.", correct: false},
        {text: "It is a CSS Framework for developing responsive and mobile-first websites.", correct: true},
        {text: "It is a jQuery Framework that is a lightweight, 'write less, do more', JavaScript library.", correct: false},
        {text: "A tool by which you pick yourself up, usually in pairs.", correct: false},
        ]},

    {   question: "What does a 'Responsive Web Design' mean?",
        answers: [
        {text: "Making sure your website is quick to access links and articles.", correct: false},
        {text: "Creating voice commands to access parts of the webpage instad of using a mouse.", correct: false},
        {text: "Adding animation to images and buttons.", correct: false},
        {text: "Making a website look good on all devices (desktops, tablets, and phones).", correct: true},
        ]},

    {   question: "What is the proper syntax for a media query?",
        answers: [
        {text: "'?media' in the HTML file. ", correct: false},
        {text: "'@media' in the CSS file.", correct: true},
        {text: "'@media' in the JavaScript file.", correct: false},
        {text: "'@mediaScreen' in the CSS file.", correct: false},
        ]}
]
// Countdown Timer
/*
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
