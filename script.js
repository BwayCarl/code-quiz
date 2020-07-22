//Variables____________________
let i = 0;
let score = 0;
let countdownTimer = 90;
const timer = document.querySelector("#time");

let messageDiv = document.querySelector("#message");
var storedScores;
var scoreList = [];
const answerA = document.getElementById("answerA");
const answerB = document.getElementById("answerB");
const answerC = document.getElementById("answerC");
const answerD = document.getElementById("answerD");



// Timer ________________________________________

function setTime() {
    let timerInterval = setInterval(function () {
        countdownTimer--;
        timer.textContent = "Time: " + countdownTimer;

        if (countdownTimer <= 0) {
            clearInterval(timerInterval);
            endQuiz();
            messageDiv.hidden = true;
        }

        else if (i === questions.length) {
            clearInterval(timerInterval);
            messageDiv.hidden = true;
        }
    }, 1000)
    return (score)
}

// Start Quiz --- loads the questions and choices, starts the timer, sets text content for "correct" or "wrong" response when choice is clicked.

function loadQuestion() {
    
    answerA.hidden = false;
    answerB.hidden = false;
    answerC.hidden = false;
    answerD.hidden = false;

    document.getElementById("startBtn").hidden = true;
    if (i === questions.length) {
        endQuiz();
    }
    else {
        document.getElementById("question").textContent = questions[i]["question"];
        document.getElementById("answerA").textContent = questions[i]["choices"][0];
        document.getElementById("answerB").textContent = questions[i]["choices"][1];
        document.getElementById("answerC").textContent = questions[i]["choices"][2];
        document.getElementById("answerD").textContent = questions[i]["choices"][3];
    }
}

document.getElementById("startBtn").addEventListener("click", loadQuestion);
document.getElementById("startBtn").addEventListener("click", setTime);
document.getElementById("startBtn").addEventListener("click", function () {
    messageDiv.textContent = "";
});

answerA.hidden = true;
answerB.hidden = true;
answerC.hidden = true;
answerD.hidden = true;

// CHOICES - Compares choices array strings to the answer string. //

    // If Answer A is chosen.____________________________

document.getElementById("answerA").addEventListener("click", function () {
    if (questions[i]["choices"][0] === questions[i]["answer"]) {
        messageDiv.textContent = "Correct!";
        messageDiv.classList.add("correct") // Attempting to make the "Correct!" message green - currently not working.
        score++;
        countdownTimer += 2;
    }
    else {
        messageDiv.textContent = "Wrong!";
        messageDiv.classList.add("wrong")// Attempting to make the "Wrong!" message red - currently not working.
        countdownTimer -= 10;
    }
    i++;
    loadQuestion();
    messageDiv.classList.remove("correct")
    messageDiv.classList.remove("wrong")
})

    // If Answer B is chosen.____________________________

document.getElementById("answerB").addEventListener("click", function () {
    if (questions[i]["choices"][1] === questions[i]["answer"]) {
        messageDiv.textContent = "Correct!";
        messageDiv.classList.add("correct");
        score++;
        countdownTimer += 2;
    }
    else {
        messageDiv.textContent = "Wrong!";
        messageDiv.classList.add("wrong");
        countdownTimer -= 10;
    }
    i++;
    loadQuestion();
    messageDiv.classList.remove("correct")
    messageDiv.classList.remove("wrong")
})

    // If Answer C is chosen.____________________________

document.getElementById("answerC").addEventListener("click", function () {
    if (questions[i]["choices"][2] === questions[i]["answer"]) {
        messageDiv.textContent = "Correct!";
        messageDiv.classList.add("correct");
        score++;
        countdownTimer += 2;
    }
    else {
        messageDiv.textContent = "Wrong!";
        messageDiv.classList.add("wrong");
        countdownTimer -= 10;
    }
    i++;
    loadQuestion();
    messageDiv.classList.remove("correct")
    messageDiv.classList.remove("wrong")
})

    // If Answer D is chosen.____________________________

document.getElementById("answerD").addEventListener("click", function () {
    if (questions[i]["choices"][3] === questions[i]["answer"]) {
        messageDiv.textContent = "Correct!";
        messageDiv.classList.add("correct");
        score++;
        countdownTimer += 2;
    }
    else {
        messageDiv.textContent = "Wrong!";
        messageDiv.classList.add("wrong");
        countdownTimer -= 10;
    }
    i++;
    loadQuestion();
    messageDiv.classList.remove("correct")
    messageDiv.classList.remove("wrong")
})

    // Quiz over due to time running out or answering all questions._______________

function endQuiz() {

    var scoreTag = document.createElement("h1");
    var inputTag = document.createElement("input");
    var submitBtn = document.createElement("button");
    score += countdownTimer -1;
    score = score
    document.getElementById("question").textContent = "Game Over";
    answerA.remove();
    answerB.remove();
    answerC.remove();
    answerD.remove();

    document.body.children[1].appendChild(scoreTag);
    document.getElementsByTagName("h1")[0].setAttribute("id", "score");
    document.getElementById("score").textContent = "Your Score: " + score;
    document.body.children[1].appendChild(inputTag);
   
    document.getElementsByTagName("input")[0].setAttribute("id", "input-field");
    submitBtn.textContent = "Submit";
    document.body.children[1].appendChild(submitBtn);
    
    submitBtn.addEventListener("click", function (event) {
        event.preventDefault();
        var highScoreText = new Object();
        highScoreText.name = inputTag.value.trim();
        highScoreText.newScore = score;
        storeScores(highScoreText);
    });
}

// YET TO BUILD THIS PART OF THE ASSIGNMENT

// Scores: Stores high score in localStorage and presents them on the viewport.
