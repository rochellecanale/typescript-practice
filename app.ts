const inputNum1 = document.querySelector('#input1') as HTMLInputElement;
const inputNum2 = document.querySelector('#input2') as HTMLInputElement;
const submitButton = document.querySelector('button');

function addNumbers(num1: number, num2: number) {
	return num1 + num2;
}

submitButton?.addEventListener('click', () => {
	console.log(`The sum is: ${addNumbers( +inputNum1.value, +inputNum2.value )}`)
})
