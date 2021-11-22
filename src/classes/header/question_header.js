import Category from "../category";

class Question_header {
	constructor(categoryType, categoryData) {
		this.target = document.querySelector('#header');
		this.categoryType = categoryType;
		this.categoryData = categoryData;
		console.log(localStorage.getItem('seconds'));
		this.screen = `
		<div class="question__header">
			<a class="back-btn exit-question"></a>
			<h2 class="category-title">${categoryType === 'arts' ? 'Картины' : 'Художники'
			}</h2>
		</div > `;

		this.target.innerHTML = this.screen;
		this.target.querySelector('.question__header').classList.add('fadein');
		this.target.querySelector('.exit-question').addEventListener('click', this.returnScreen.bind(this));
	}

	returnScreen() {
		new Category(this.categoryData, this.categoryType);
	}


}

export default Question_header;