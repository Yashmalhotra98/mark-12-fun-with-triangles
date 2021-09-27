const inputs = document.querySelectorAll('.input-angle');
// inputsValues = Number(inputs[0].value, inputs[1].value, inputs[2].value);
// console.log((inputsValues[0].value, inputsValues[1].value, inputsValues[2].value));
const isTriangleBtn = document.querySelector('#btn-is-triangle');
const outputEl = document.querySelector('#output');

isTriangleBtn.addEventListener("click", isTriangle)


function calculateSumOfAngles(angle1, angle2, angle3) {
    var sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles;
}

function isTriangle() {
    const sumOfAngles = calculateSumOfAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));
    if (sumOfAngles === 180) {
        outputEl.innerText = 'Yay, these angles form a triangle';

    } else {
        outputEl.innerText = "Oh No! The angles don't form a triangle";
    }
}