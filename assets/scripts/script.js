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
		name:  $('#nameInput').val(),
		position: $('#roleInput').val(),
		startDate: $('#dateInput').val(),
		wage: $('#rateInput').val()

	}

	database.ref().push(newEmployee);

	console.log(newEmployee)
});


database.ref().on('child_added', function(snapshot){
	console.log(snapshot.val());
	let row = $('<tr>');

	for (var key in snapshot.val()) {
		if (snapshot.val().hasOwnProperty(key)) {
			console.log(snapshot.val()[key]);
			let dataElement = $('<td>');
			dataElement.text(snapshot.val()[key]);
			row.append(dataElement);
		}
	}

	$("#employee-table").append(row);
	console.log(row);


})





