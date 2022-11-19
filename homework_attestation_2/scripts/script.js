// 'use strict'

// const emailInput = document.getElementById('email')
// const passwordInput = document.getElementById('password')
// const passwordConfirmation = document.getElementById('password-confirmation')


const form = document.getElementById('form');




function validateForm(event) {

	event.preventDefault();

	const email = form.querySelector('[name="email"]');
	const password = form.querySelector('[name="password"]');
	const passwordConfirmation = form.querySelector('[name="password-confirmation"]');
	const textarea = form.querySelector('[name="about-me"]');
	const checkbox = form.querySelector('[name="checkbox"]');
	const genderMale = document.getElementById('radio-man');
	const genderFemale = document.getElementById('radio-woman');

	function validateEmail(email) {const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;    
		return re.test(String(email).toLowerCase());}

	let gender =  null;

	if (genderMale.checked) {

		gender = genderMale.value

	} else if (genderFemale.checked) {

		gender = genderFemale.value
	}
    

	const values = {

		email: email.value,
		password: password.value,
		passwordConfirmation: passwordConfirmation.value,
		gender: gender,
		textarea: textarea.value,
		checkbox: checkbox.checked

	};

	// Инпут email

	if (email.value.trim() == '') {

		document.getElementById('email-error').innerHTML = 'Поле обязательно для заполнения'
		document.getElementById('email-error').style.color = "red"
		email.style.borderColor = "red"
	}

	else if (!validateEmail(email.value.trimEnd())) {
		document.getElementById('email-error').innerHTML = 'Email введен некорректно'
		document.getElementById('email-error').style.color = "red"
		email.style.borderColor = "red"

	} else {

		document.getElementById('email-error').innerHTML = ''
		email.style.borderColor = '#787878'

	}


	// Пароль
	
	if (password.value.trimEnd() == '') {

		document.getElementById('password-error').innerHTML = 'Поле обязательно для заполнения'
		document.getElementById('password-error').style.color = "red"
		password.style.borderColor = "red"

	} else if (password.value.trimEnd().length < 8) {

		document.getElementById('password-error').innerHTML = 'Пароль должен содержать не менее 8 символов'
		document.getElementById('password-error').style.color = "red"
		password.style.borderColor = "red"


	} 
	
	else {

		document.getElementById('password-error').innerHTML = ''
		password.style.borderColor = '#787878'
		

	}
	
	
	if ((passwordConfirmation.value.trimEnd() == '') || (password.value.trimEnd() != passwordConfirmation.value.trimEnd()) ) {

		document.getElementById('password-confirmation-error').innerHTML = 'Пароли не совпадают'
		document.getElementById('password-confirmation-error').style.color = "red"
		passwordConfirmation.style.borderColor = "red"

	} 


	else {

		document.getElementById('password-confirmation-error').innerHTML = ''
		passwordConfirmation.style.borderColor = '#787878'
		console.log(values)
	}

}

form.addEventListener('submit', validateForm)