const sides = document.querySelectorAll('.side-input');
const hypotenuseBtn = document.querySelector('#hypotenuse-button');
const outputEl = document.querySelector('#output');

function calculateSumOfSquares(a, b) {
    const sumOfSquares = a * a + b * b;
    return sumOfSquares;
}

function calculateHypotenuse() {
    const sumOfSquares = calculateSumOfSquares(Number(sides[0].value), Number(sides[1].value));
    const lengthOfHypotenuse = Math.sqrt(sumOfSquares);

    outputEl.innerText = "The length ofthe  Hypotenuse is: " + lengthOfHypotenuse;
}

hypotenuseBtn.addEventListener('click', calculateHypotenuse);