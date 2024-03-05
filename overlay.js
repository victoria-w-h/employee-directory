// const overlay = document.querySelector(".overlay");
// const modalContainer = document.querySelector(".modal-content");
// const modalClose = document.querySelector(".modal-close");
// function displayModal(index) {
// 	let {
// 		name,
// 		dob,
// 		phone,
// 		email,
// 		location: { city, street, state, postcode },
// 		picture,
// 	} = employees[index];
// 	let date = new Date(dob.date);
// 	const modalHTML = `
// <img class="avatar" src="${picture.large}" />
// <div class="text-container">
// <h2 class="name">${name.first} ${name.last}</h2>
// <p class="email">${email}</p>
// <p class="address">${city}</p>
// <hr />
// <p>${phone}</p>
// <p class="address">${street}, ${state} ${postcode}</p>
// <p>Birthday:
// ${date.getMonth()}/${date.getDate()}/${date.getFullYear()}</p>
// </div>
// `;
// 	overlay.classList.remove("hidden");
// 	modalContainer.innerHTML = modalHTML;
// }
// modalClose.addEventListener("click", () => {
// 	overlay.classList.add("hidden");
// });

// gridContainer.addEventListener("click", (e) => {
// 	if (e.target !== gridContainer) {
// 		clicked = true;
// 		const card = e.target.closest(".card");
// 		const index = card.getAttribute("data-index");
// 		displayModal(index);
// 	}
// });

// HTML

// <div class="overlay">
// 	<div class="modal">
// 		<button class="modal-close">X</button>
// 		<div class="modal-content"></div>
// 	</div>
// </div>
