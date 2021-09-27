const base = document.querySelector(".base");
const height = document.querySelector(".height");
const checkAreaBtn = document.querySelector("#area-btn");
const outputEl = document.querySelector("#output");

function calculateArea() {
    const areaOfTriangle = 1 / 2 * Number(base.value) * Number(height.value);
    outputEl.innerText = "Area of triangle:" + areaOfTriangle;
}

checkAreaBtn.addEventListener("click", calculateArea);