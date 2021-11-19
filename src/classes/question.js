import shuffleArray from "../utils/shuffleArray";
import Question_header from "./header/question_header";
import Modal from "./modal";

class Question {
	constructor(target, categoryType, categoryData, roundData, questionNum, score, roundId) {
		this.target = target;
		this.categoryType = categoryType;
		this.categoryData = categoryData;
		this.roundData = roundData;
		this.questionNum = questionNum;
		this.score = score;
		this.roundId = roundId;


		this.rightAnswer = this.categoryType === 'arts' ? Number(roundData[this.questionNum].imageNum) : roundData[this.questionNum].author;
		this.allVariants = this.setVariants(this.categoryType);
		this.screen = this.categoryType === 'arts'
			? `	<div class="question">
		<p class="question__text" >${this.roundData[this.questionNum].question}</p>
		${localStorage.getItem('timer') === 'true' ? `<p class="question__timer">${localStorage.getItem('seconds')}</p>` : ''}
		<div class="variants__container">${this.allVariants.map((variant, index) => `
		<div class="variant">
		<img class="variant-img" src="./assets/img/${variant}.jpg" id="a${index}"/>
		</div>`).join('')}
		</div>
		</div>`
			: `	<div class="question artist-question">
		<p class="question__text" >${this.roundData[this.questionNum].question}</p>
		<img class="question-image" src="./assets/img/${this.roundData[this.questionNum].imageNum}.jpg"/>
		<div class="variants__container artists_container">${this.allVariants.map((variant, index) => `
		<div class="artist-variant " id="a${index}">${variant}</div>`).join('')}
		</div>
		</div>`;
		this.target.innerHTML = this.screen;
		this.target.querySelector('.question').classList.add('fadein');

		this.timer = this.target.querySelector('.question__timer');
		if (this.thimer) {
			this.timer.classList.add('shake');
		}
		this.variants_container = this.target.querySelector('.variants__container');
		this.variants_container.addEventListener('click', this.chooseAnswer.bind(this));
		this.headerIteration;
		this.timerGlobal;
		clearTimeout(this.timerGlobal);
		if (this.timer) {
			this.tiktac(this.timer.textContent)
		};
		console.log(this.timerGlobal);
		this.header = new Question_header(this.categoryType, this.categoryData, this.timerGlobal);
	}

	chooseAnswer(event) {
		clearTimeout(this.timerGlobal);

		let id = Number(event.target.id.charAt(1));
		let isRight = id === this.allVariants.indexOf(this.rightAnswer);
		let nextQuestionNum = this.questionNum;
		let score = this.score;

		if (isRight) {
			score += 1;
		};

		nextQuestionNum += 1;


		if (this.questionNum < 10) {
			new Modal(this.target, this.categoryType, this.categoryData, this.roundData, this.roundData[this.questionNum], nextQuestionNum, isRight, score, this.roundId);
		}
	}

	tiktac(num) {
		let prop = Number(num);
		console.log(prop);
		this.timer.innerHTML = prop;

		if (prop >= 0) {
			prop -= 1;
		}


		let nextQuestionNum = this.questionNum;

		let timerId = setTimeout(this.tiktac.bind(this, [prop]), 1000);

		this.timerGlobal = timerId;


		// this.header = new Question_header(this.categoryType, this.categoryData, this.timerGlobal);
		// this.setHeader.bind(Question, []);

		if (prop === -1) {
			clearTimeout(timerId);
			nextQuestionNum += 1;
			new Modal(this.target, this.categoryType, this.categoryData, this.roundData, this.roundData[this.questionNum], nextQuestionNum, false, this.score);
		}

		if (prop >= 0) {
			timerId;
		}

	}

	setHeader() {
		if (!this.headerIteration) {
			headerIteration = 0;
		}

		this.headerIteration += 1;

		if (this.headerIteration < 2) {
			this.header = new Question_header(this.categoryType, this.categoryData, this.timerGlobal);
		}
	}

	setVariants(type) {
		let variants = [this.rightAnswer];

		if (type === 'arts') {
			for (let i = 0;variants.length < 4;i++) {
				let questionNum = Math.round(Math.random() * 120);
				if (!variants.includes(questionNum)) {
					variants.push(questionNum);
				};
			};
		} else {
			for (let i = 0;variants.length < 4;i++) {
				let questionNum = Math.round(Math.random() * 120);
				if (!variants.includes(this.categoryData.flat()[questionNum].author)) {
					variants.push(this.categoryData.flat()[questionNum].author);
				};
			};
		}


		return shuffleArray(variants);
	}
}

export default Question