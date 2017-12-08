$('#employeeAddButton').on('click', (event) => {
	event.preventDefault();
	let newEmployee = {
		email:  $('#emailInput').val(),
		role: $('#roleInput').val(),
		startDate: $('#dateInput').val(),
		rate: $('#rateInput').val(),
	}

	console.log(newEmployee)
});
