import Category_header from "./header/category_header";
import Question from "./question";
import Round from "./round";

class Category {
	constructor(data, categoryType) {
		this.target = document.querySelector('#content');
		this.rounds = data;
		this.categoryType = categoryType;
		new Category_header(this.categoryType);
		this.covers = this.setCovers();
		this.screen = `
		<div class="categories_container">
		${this.covers.map((cover, index) => `
					<div class="card noplayed-card">
						<div class="number-container">
						<p class="card-number">${index + 1}</p>
						</div>
						
						${localStorage.getItem(`score${this.categoryType}${index}`) ? `	
							<div class="score-container">
								<p class="card-score">${localStorage.getItem(`score${this.categoryType}${index}`)}</p>
							</div>` : ''}

						<img class="card-img" src="./assets/img/${cover}.jpg" id="${index}"/>
					</div>
				`).join('')}
		</div >`;


		this.target.innerHTML = this.screen;
		this.target.querySelector('.categories_container').classList.add('fadein');

		this.cards = this.target.querySelectorAll('.card');

		this.cards.forEach((item, index) => {
			if (localStorage.getItem(`${this.categoryType}${index}`) === 'true') {
				item.classList.remove('noplayed-card');
				item.classList.add('played-card');
			}
		});

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
			let id = event.target.id;
			let questions = this.rounds[id];
			new Round(this.target, this.rounds, questions, this.categoryType, id);
		}
	}
}

export default Category;