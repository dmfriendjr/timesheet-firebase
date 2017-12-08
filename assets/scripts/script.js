$('#employeeAddButton').on('click', (event) => {

	let newEmployee = {
		email:  $('#emailInput').val(),
		role: $('#roleInput').val(),
		startDate: $('#dateInput'),
		rate: $('#rateInput')
	}

	console.log(newEmployee)
});
