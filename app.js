// VARIABLES

// url has the different options available to be used in the template
const urlAPI = `https://randomuser.me/api/?results=12&inc=name, picture,
email, location, phone, dob &noinfo &nat=US`;
const gridContainer = document.querySelector(".grid-container");
let employees = [];

// FETCHING THE API

fetch(urlAPI)
	// get response in json format
	.then((res) => res.json())
	// destructuring assignment syntax to extract the results property from the response object and passing it as an argument to the displayEmployees function.
	.then((res) => res.results)
	.then(displayEmployees)
	// catches an error object as an argument and logs it to the console
	.catch((err) => console.log(err));

// EMPLOYEE DATA

// employeeData is an object that is passed to the displayEmployees function and renamed as employees
function displayEmployees(employeeData) {
	employees = employeeData;
	let employeeHTML = "";
	// for every employee setting the name to the data name etc
	employees.forEach((employee, index) => {
		let name = employee.name;
		let email = employee.email;
		let city = employee.location.city;
		let picture = employee.picture;
		//declaring the html to then be set equal to grid container inner html
		employeeHTML += `
		<div class="card" data-index="${index}"}>
			<img class="avatar" src="${picture.large}" />
			<div class="text-container">
				<h2 class="name">${name.first} ${name.last}</h2>
				<p class="email">${email}</p>
				<p class="address">${city}</p>
			</div>
		</div>`;
	});
	gridContainer.innerHTML = employeeHTML;
}
