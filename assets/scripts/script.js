  // Initialize Firebase
var config = {
	apiKey: "AIzaSyD3vwqgL2IIh9dW3JuHkXCQRPHLPxqp8fI",
	authDomain: "timesheet-fi.firebaseapp.com",
	databaseURL: "https://timesheet-fi.firebaseio.com",
	projectId: "timesheet-fi",
	storageBucket: "",
	messagingSenderId: "226258508438"
};
firebase.initializeApp(config);

var database = firebase.database();

$('#employeeAddButton').on('click', (event) => {

	event.preventDefault(); 

	console.log('testing');

	let newEmployee = {
		email:  $('#emailInput').val(),
		role: $('#roleInput').val(),
		startDate: $('#dateInput').val(),
		rate: $('#rateInput').val()

	}

	database.ref().push(newEmployee);

	console.log(newEmployee)
});
