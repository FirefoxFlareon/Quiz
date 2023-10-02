var startButton = document.querySelector("#startButton")
var startPage = document.querySelector("#startPage")
var quizPage = document.querySelector("#quizPage")
var questionTextEl = document.querySelector("#questionText")
var questionChoicesEl = document.querySelector("#questionChoices")

startButton.addEventListener("click", function(){
    startPage.classList.add("hide")
    quizPage.classList.remove("hide")
    
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