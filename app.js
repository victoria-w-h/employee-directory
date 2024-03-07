// FETCHING THE API

// Variables

// url has the different options available to be used in the template
const urlAPI = `https://randomuser.me/api/?results=12&inc=name, picture,
email, location, phone, dob &noinfo &nat=US`;
const gridContainer = document.querySelector(".grid-container");
let employees = [];

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

// POPUP MODAL
let currentIndex;

const overlay = document.querySelector(".overlay");
const modalContainer = document.querySelector(".modal-content");
const modalClose = document.querySelector(".modal-close");
function displayModal(index) {
	let {
		name,
		dob,
		phone,
		email,
		location: { city, street, state, postcode },
		picture,
	} = employees[index];
	let streetNumber = JSON.stringify(street.number);
	let streetName = JSON.stringify(street.name).replace(/['"]+/g, "");
	let date = new Date(dob.date);

	const modalHTML = `	
	<div class="modal-copy" data-index=${index}>
<img class="avatar modal-avatar" src="${picture.large}" />
<div class="text-container">
<h2 class="name">${name.first} ${name.last}</h2>
<p class="email">${email}</p>
<p class="address">${city}</p>
<hr />
<p>${phone}</p>
<p class="address">${streetNumber} ${streetName}, ${state} ${postcode}</p>
<p>Birthday:
${date.getMonth()}/${date.getDate()}/${date.getFullYear()}</p>
</div>
</div>
`;
	overlay.classList.remove("hidden");
	modalContainer.innerHTML = modalHTML;
}

modalClose.addEventListener("click", () => {
	overlay.classList.add("hidden");
});

gridContainer.addEventListener("click", (e) => {
	if (e.target !== gridContainer) {
		clicked = true;
		const card = e.target.closest(".card");
		const index = card.getAttribute("data-index");
		displayModal(index);
		currentIndex = index;
	}
});
window.onclick = function (event) {
	if (event.target == overlay) {
		overlay.classList.add("hidden");
	}
};

// next and back functionality
const nextBtn = document.querySelector(".next-btn");
const backBtn = document.querySelector(".back-btn");

function nextFunction() {
	let modalCopy = modalContainer.children[0];
	let modalIndex = modalCopy.getAttribute("data-index");
	let numberModelIndex = Number(modalIndex);

	displayModal(numberModelIndex + 1);
}
function backFunction() {
	let modalCopy = modalContainer.children[0];
	let modalIndex = modalCopy.getAttribute("data-index");
	let numberModelIndex = Number(modalIndex);
	displayModal(numberModelIndex - 1);
}

// to change modal index with left and right keys
document.onkeydown = function (e) {
	switch (e.key) {
		case "ArrowLeft":
			if (!overlay.classList.contains("hidden")) {
				backFunction();
			}
			break;
		case "ArrowRight":
			if (!overlay.classList.contains("hidden")) {
				nextFunction();
			}
	}
};

// Search functionality

const searchbar = document.querySelector(".searchbar-container input");

searchbar.addEventListener("keyup", (e) => {
	let currentValue = e.target.value.toLowerCase();
	let employeeNames = document.querySelectorAll("h2.name");
	employeeNames.forEach((name) => {
		if (name.textContent.toLowerCase().includes(currentValue)) {
			name.parentNode.parentNode.style.display = "flex";
		} else {
			name.parentNode.parentNode.style.display = "none";
		}
	});
});
