var startButton = document.querySelector("#startButton")
var startPage = document.querySelector("#startPage")
var quizPage = document.querySelector("#quizPage")
var questionTextEl = document.querySelector("#questionText")
var questionChoicesEl = document.querySelectorAll(".Choice")
var scoreEl = document.querySelector("#score")
var currentQuestionIndex = 0
var currentScore = 0


startButton.addEventListener("click", function(){
    startPage.classList.add("hide")
    quizPage.classList.remove("hide")
    runQuiz();
})

var questions = [
    {
        questionText: "When using the console.log() command, where will your output be shown?",
        choices: ["On the page", "In your html file", "In the console", "In your diary"],
        answer: "In the console",
    },
    {
        questionText: "when adding padding, border, or margin, what should you always keep in mind? ",
        choices: ["TRBL", "BUBL", "HUBL", "STBL"],
        answer: "TRBL",
    },
    {
        questionText: "Which of the following is NOT a primitive data type?",
        choices: ["Boolean", "String", "Symbol", "Array"],
        answer: "Array",
    },
    {
        questionText: "If you wanted a number to to be read as a string, what would you put around it?",
        choices: ["Curly brackets", "Square brackets", "Quotation marks", "Parentheses"],
        answer: "Quotation marks",
    },
    {
        questionText: "If you wanted to go through a block of code multiple times, you could use a....",
        choices: ["querySelector", "eventListener", "Variable", "For loop"],
        answer: "For loop",
    },
]

function runQuiz() {
    if (currentQuestionIndex < questions.length){
        var currentQuestion = questions[currentQuestionIndex]
        questionTextEl.textContent = currentQuestion.questionText

       for (var i=0; i < questionChoicesEl.length; i++){
        questionChoicesEl[i].textContent = currentQuestion.choices[i]
       }
    } else {
        questionTextEl.textContent = "How'd you do?"

        for (var i=0; i < questionChoicesEl.length; i++){
            questionChoicesEl[i].classList.add("hide")
        }
    }
}

for (var i=0; i < questionChoicesEl.length; i++){
    questionChoicesEl[i].addEventListener("click", function(e){
        var clickedChoice = e.target.textContent
        answerResult(clickedChoice, questions[currentQuestionIndex].answer)
    })
}



function answerResult(clickedChoice) {
    if (clickedChoice === questions[currentQuestionIndex].answer) {
        currentScore++;
    }

    currentQuestionIndex++;
    runQuiz();

    scoreEl.textContent = "Your Score: " + currentScore;
}
