const inputs = document.querySelectorAll('.input-angle');
console.log(inputs[0]);
const isTriangleBtn = document.querySelector('#btn-is-triangle');
const outputE1 = document.querySelector('#output');
isTriangleBtn.addEventListener("click", isTriangle)


function calculateSumOfAngles(angle1, angle2, angle3) {
    const sumOfAngles = angle1 + angle2 + angle3;
    console.log(sumOfAngles);
}

function isTriangle() {

}