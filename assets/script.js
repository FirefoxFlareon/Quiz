var startButton = document.querySelector("#startButton")
var startPage = document.querySelector("#startPage")
var quizPage = document.querySelector("#quizPage")
var questionTextEl = document.querySelector("#questionText")
var questionChoicesEl = document.querySelector("#questionChoices")

startButton.addEventListener("click", function(){
    startPage.classList.add("hide")
    quizPage.classList.remove("hide")
    console.log(questions[0].questionText)
})

var questions = [
    {
        questionText: "Question 1 goes here",
        choices: ["answer1", "answer2", "answer3"],
        answer: "answer1",
    },
    {
        questionText: "Question 2 goes here",
        choices: ["answer1", "answer2", "answer3"],
        answer: "answer1",
    },
]