import Category_header from "./header/category_header";
import Question from "./question";
import Round from "./round";

class Category {
	constructor(data, type, timerId) {
		this.target = document.querySelector('#content');
		this.rounds = data;
		this.type = type;
		this.screenName = 'category';
		new Category_header(this.type);
		this.covers = this.setCovers();
		this.screen = `
		<div class="categories_container">
		${this.covers.map((cover, index) => `
					<div class="card">
						<div class="number-container">
						<p class="card-number">${index + 1}</p>
						</div>
						<img class="card-img" src="./assets/img/${cover}.jpg" id="${index}"/>
					</div>
				`).join('')}
		</div >`;


		this.target.innerHTML = this.screen;
		this.target.querySelector('.categories_container').classList.add('fadein');


		this.round_container = this.target.querySelector('.categories_container');

		document.addEventListener('click', this.chooseRound.bind(this));

	}

	setCovers() {
		let data = this.rounds.flat();
		let covers = [];
		for (let i = 0;covers.length < 12;i++) {
			let num = Math.round(Math.random() * data.length);
			if (!covers.includes(num)) {
				covers.push(num);
			};
		};
		return covers;
	}

	chooseRound(event) {
		if (event.target.tagName === 'IMG') {
			console.log(event.target.tagName);
			let id = event.target.id;
			let questions = this.rounds[id];
			new Round(this.target, this.rounds, questions, this.type);
		}
	}
}

export default Category;