'use strict';


const signs = ['+','-','/','*'];

const firstNumInput = document.getElementById('number1');

const signInput = document.getElementById('sign');

const secondNumInput = document.getElementById('number2');

const button = document.getElementById('btn');


button.addEventListener('click',(event)=> {
	event.preventDefault();

	if (secondNumInput.value == '0' && signInput.value == '/') {

		console.log('Операция некорректна')
	}

	else if (firstNumInput.value.length == 0) {
		
		console.log('Первое число не указаано')
	}

	else if (secondNumInput.value.length == 0) {

		console.log('Второе число не указаано')
	}

	else if (signInput.value.length == 0) {

		console.log('Не введён знак')
	}

	else if ((isNaN(Number(firstNumInput.value)) || isNaN(Number(secondNumInput.value))) || (firstNumInput.value.trim() == '' || secondNumInput.value.trim() == '') ) {
		console.log('Некорректный ввод чисел')
	} 
	
	else if (!signs.includes(signInput.value)) {
		console.log('Программа не поддерживает такую операцию')
	}
	
	else if (signInput.value == '+') {
		
		console.log(Number(firstNumInput.value) + Number(secondNumInput.value))
	}

	else if (signInput.value == '-') {
		
		console.log(Number(firstNumInput.value) - Number(secondNumInput.value))
	}
	
	else if (signInput.value == '*') {
		
		console.log(Number(firstNumInput.value) * Number(secondNumInput.value))
	}

	else if (signInput.value == '/') {
		
		console.log(Number(firstNumInput.value) / Number(secondNumInput.value))
	}
	
	

})

