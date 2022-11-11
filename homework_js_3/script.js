'use strict'

fetch('https://reqres.in/api/users?per_page=12')
	
	.then((response) => {
		response.json().then((info) => {

			console.log('Фамилии всех пользователей в цикле:')
			console.log('-----------------------------------')

			info.data.forEach(element => {

				console.log(element.last_name)
	
			});
			console.log('-----------------------------------')
			console.log('Все данные всех пользователей, фамилия которых начинается на F:')

			info.data.forEach(element => {

				if (element.last_name.startsWith('F')) {
					
					console.log(element.first_name + ' ' + element.last_name + ':')

					for (let key in element) {
						console.log(`	${key}: ${element[key]}`)
					}
					console.log('....................')
					// console.log(element)
				}
			})

			console.log('-----------------------------------')

			// console.log(info.data)

			const resStr = info.data.reduce((accum, element, index) => {


				if (accum == '') {
					accum = `${element.first_name} ${element.last_name}`
					return accum
				}

				accum = `${accum}, ${element.first_name} ${element.last_name}`
				return accum

			}, '')

			console.log(`Наша база содержит данные следующих пользователей: ${resStr}`)

			console.log('-----------------------------------')
			console.log('Названия всех ключей в объекте пользователя:')

			

			console.log(Object.keys(info.data[0]).join(', '))

		})


	});

	