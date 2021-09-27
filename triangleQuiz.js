const quizForm = document.querySelector('.quiz-form');
const submitAnswerButton = document.querySelector("#submit-answer-btn");
const outputEl = document.querySelector("#output");

const correctAnswers = ["90°", "Right-Angled"]; // Storing our Correct Answers

function calculateScore() {
    var score = 0;
    let ind = 0;
    const formResults = new FormData(quizForm);
    // Form Data is an API used to get the forms results and hence we selected the entire form
    // form document.queryselector() and then used FormData to access the data

    // for (let entry of formResults.entries()) {
    //     console.log(entry);
    // }


    // The FormResults.entries() entry element returens a key-value pair for each entry in 
    // the entrie's "name"  & the "value" we've selected.


    // While the FormResults.values() gives us only the values and not the Key-value pairs


    for (let value of formResults.values()) {
        if (value === correctAnswers[ind]) {
            score = score + 1;
        }
        ind = ind + 1;
    }

    outputEl.innerText = "Your Score: " + score;
}

submitAnswerButton.addEventListener('click', calculateScore);