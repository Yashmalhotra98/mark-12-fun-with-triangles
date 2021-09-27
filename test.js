const quizForm = document.querySelector(".quiz-form");
const submitButton = document.querySelector("#submit-answer-btn");
const outputEl = document.querySelector("#output");

const correctAnswers = ["90°", "right-angled"];

function calculateScore() {
    let score = 0;
    let i = 0;
    const formResults = new FormData(quizForm);
    for (let value of formResults.values()) {
        if (value === correctAnswers[i]) {
            score = score + 1;
        }
        i = i + 1;
    }
    outputEl.innerText = "Your score: " + score;
}

submitButton.addEventListener("click", calculateScore)