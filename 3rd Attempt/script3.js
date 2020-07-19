const startButton = document.getElementById("start-btn");
const questonContainerElement = document.getElementById("question-container")
const questionElement = document.getElementById("question")
const answerButtonsElement = document.getElementById("answer-buttons")

let shuffledQuestons, currentQuestionIndex

startButton.addEventListener("click", startGame);

function startGame() {
console.log("Started");
startButton.classList.add("hide")
shuffledQuestions = questions.sort(() => Math.random() - .5) // Random array depending on a negative or positive result from shuffledQuestions variable.
currentQuestionIndex = 0
questonContainerElement.classList.remove("hide")
setNextQuestion()
}

function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn-primary btn-lg")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function selectAnswer () {

}

//List of Questions

const questions =  [
{
    question: "What is 2 + 2?",
    answers: [
        {text: "4", correct: true},
        {text: "22", correct: false},
        {text: "0", correct: false},
        {text: "5", correct: false}
    ]
}

]