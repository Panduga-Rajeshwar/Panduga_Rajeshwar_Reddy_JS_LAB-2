const questions = [
    {
        question: "JavaScript supports",
        choices: ["Functions", "XHTML", "CSS", "HTML"],
        answer: "Functions"
    },
    {
        question: "Which language is used for styling web pages?",
        choices: ["HTML", "JQuery", "CSS", "XML"],
        answer: "CSS"
    },
    {
        question: "Which is not a JavaScript Framework?",
        choices: ["Python Script", "JQuery", "Django", "NodeJS"],
        answer: "Django"
    },
    {
        question: "Which is used for Connect To Database?",
        choices: ["PHP", "HTML", "JS", "All"],
        answer: "PHP"
    },
    {
        question: "JavaScript is a",
        choices: ["Language", "Programming Language", "Development", "All"],
        answer: "Programming Language"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {

    if (currentQuestionIndex >= questions.length) {
        displayResults();
        console.log(score);
        return;
    }

    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById('question').innerText = currentQuestion.question;
    for (let i = 0; i <= 3; i++) {
        document.getElementById('choice' + i).innerText = currentQuestion.choices[i];
    }
    document.getElementById('progress').innerText = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
}

function checkAnswer(choice) {
    const currentQuestion = questions[currentQuestionIndex];
    if (currentQuestion.choices[choice] === currentQuestion.answer) {
        score++;
    }
    currentQuestionIndex++;
    loadQuestion();
}

for (let i = 0; i <= 3; i++) {
    document.getElementById('btn' + i).onclick = () => checkAnswer(i);
}

function displayResults() {
    const quizDiv = document.getElementById('quiz');
    quizDiv.innerHTML = `
        <h1>Result</h1>
        <hr style="margin-bottom: 20px">
        <p id="score">Your Score: ${score} out of ${questions.length}. Your percentage is ${((score / questions.length) * 100)}%</p>
    `;
}

loadQuestion();
