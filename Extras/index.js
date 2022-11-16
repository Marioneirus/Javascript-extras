let purchaseEl = document.getElementById("error");

function purchase() {

    purchaseEl.innerHTML = " Something went weong, please try again later."

};

let num1 = 8;
let num2 = 2;
document.getElementById("num1-el").textContent = 8;
document.getElementById("num2-el").textContent = 2;
let sum = document.getElementById("sum-el");

function add() {

    let result = num1 + num2;
    sum.textContent = "Sum:" + result;
};
function subtract() {

    let result = num1 - num2;
    sum.textContent = "Sum:" + result;
};
function divide() {

    let result = num1 / num2;
    sum.textContent = "Sum:" + result;
};
function multiply() {

    let result = num1 * num2;
    sum.textContent = "Sum:" + result;
};