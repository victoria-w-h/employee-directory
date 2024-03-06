const nextBtn = document.querySelector(".next-btn");
const backBtn = document.querySelector(".back-btn");

nextBtn.addEventListener("click", (e) => {
	if (clicked) {
		clicked = false;
		const card = e.target.closest(".card");
		const index = card.getAttribute("data-index");
		displayModal(index);
	}
});
