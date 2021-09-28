    const quizForm = document.querySelector(".quiz-form");
    const submitButton = document.querySelector("#submit-answer-btn");
    const outputEl = document.querySelector("#output");

    const correctAnswers = ["90°", "right-angled"]; // Storing our Correct Answers

    function calculateScore() {
        let score = 0;
        let ind = 0;
        const formResults = new FormData(quizForm);
        for (let value of formResults.values()) {
            if (value === correctAnswers[ind]) {
                score = score + 1;
            }
            ind = ind + 1;
        }
        outputEl.innerText = "Your score: " + score;
    }

    submitButton.addEventListener("click", calculateScore);

    // const formResults = new FormData(quizForm);
    // Form Data is an API used to get the forms results and hence we selected the entire form
    // form document.queryselector() and then used FormData to access the data

    // for (let entry of formResults.entries()) {
    //     console.log(entry);
    // }


    // The FormResults.entries() entry element returens a key-value pair for each entry in 
    // the entrie's "name"  & the "value" we've selected.


    // While the FormResults.values() gives us only the values and not the Key-value pairs