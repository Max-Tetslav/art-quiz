import Category_header from "./header/category_header";
import Question from "./question";
import Round from "./round";
import load from "../utils/imageOnload";

class Category {
	constructor(data, categoryType) {
		for (let i = 0;i < 100;i++) {
			clearTimeout(i);
		}

		this.target = document.querySelector('#content');
		this.rounds = data;
		this.categoryType = categoryType;
		new Category_header(this.categoryType);
		this.covers = this.setCovers();
		this.onload;
		this.screen = `
		<div class="categories_container">
		${this.covers.map((cover, index) => `
					<div class="card noplayed-card">

						<p class="card-number">${index + 1}</p>

						${localStorage.getItem(`score${this.categoryType}${index}`) ? `	
								<p class="card-score">${localStorage.getItem(`score${this.categoryType}${index}`)}</p>
							` : ''}
							 <div class="card-img" id="${index}"></div>
							</div>
							`).join('')}
							</div >`;
		// ${load(cover, 'card-img', index)};
		// ${this.onload = new Onload(cover, 'card-img', index)}


		this.target.innerHTML = this.screen;

		this.cardsImg = this.target.querySelectorAll('.card-img');

		this.covers.map((cover, index) => load(this.cardsImg[index], cover));

		this.cards = this.target.querySelectorAll('.card');

		this.cards.forEach((item, index) => {
			// item.classList.add('rollin');
			if (localStorage.getItem(`${this.categoryType}${index}`) === 'true') {
				item.classList.remove('noplayed-card');
				item.classList.add('played-card');
			}
		});
		// this.target.querySelector('.categories_container').classList.add('fadein');

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
		console.log(event.target.parentNode.classList.contains('card'));
		if (event.target.parentNode.classList.contains('card')) {
			let id = event.target.id;
			let questions = this.rounds[id];
			new Round(this.target, this.rounds, questions, this.categoryType, id);
		}
	}
}

export default Category;