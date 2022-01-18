import Home from "../home";

class Category_header {
	constructor(categoryType) {
		this.target = document.querySelector('#header');
		this.screen = `
		<div class="categories__header">
			<a class="back-btn exit-category"></a>
			<h2 class="category-title">${categoryType === 'arts' ? 'Картины' : 'Художники'}</h2>

		</div>`;

		this.target.innerHTML = this.screen;
		this.target.querySelector('.categories__header').classList.add('fadein');
		this.target.querySelector('.exit-category').addEventListener('click', this.returnScreen);
	}

	returnScreen() {
		return new Home();
	}
}

export default Category_header;