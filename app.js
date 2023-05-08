var inputNum1 = document.querySelector('#input1');
var inputNum2 = document.querySelector('#input2');
var submitButton = document.querySelector('button');
function addNumbers(num1, num2) {
    return num1 + num2;
}
submitButton === null || submitButton === void 0 ? void 0 : submitButton.addEventListener('click', function () {
    console.log("The sum is: ".concat(addNumbers(+inputNum1.value, +inputNum2.value)));
});
