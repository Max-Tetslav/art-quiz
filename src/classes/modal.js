import Question from "./question";
import EndRound from "./endround";

class Modal {
	constructor(target, categoryType, categoryData, roundData, prevQuestionInfo, nextQuestionNum, isRight, score) {
		this.target = target;
		this.categoryType = categoryType;
		this.categoryData = categoryData;
		this.roundData = roundData;
		this.nextQuestionNum = nextQuestionNum;
		this.score = score;
		if (localStorage.getItem('notify') === 'true' && isRight) {
			this.audio = new Audio('../assets/audio/right-answer.wav');

			if (localStorage.getItem('volume')) {
				this.audio.volume = Number(localStorage.getItem('volume')) / 100;
			}

			this.audio.addEventListener("canplay", (event) => {
				this.audio.play();
			});
		} else if (localStorage.getItem('notify') === 'true' && !isRight) {
			this.audio = new Audio('../assets/audio/wrong-answer.mp3');

			if (localStorage.getItem('volume')) {
				this.audio.volume = Number(localStorage.getItem('volume')) / 100;
			}

			this.audio.addEventListener("canplay", (event) => {
				this.audio.play();
			});
		}

		this.screen = `
		<div class="modal-overlay">
			<div class="modal-content">
				<img class="answer-status" src="${isRight ? './assets/svg/right-answer.svg' : './assets/svg/wrong-answer.svg'}"/>
				<img class="answer-img" src="./assets/img/${prevQuestionInfo.imageNum}.jpg"/>
				<p class="modal-text answer-name">${prevQuestionInfo.name}</p>
				<p class="modal-text answer-author">${prevQuestionInfo.author}</p>
				<p class="modal-text answer-year">${prevQuestionInfo.year}</p>
				<a class="modal-text modal-btn" >Продолжить</a>
			</div>
		</div>`;
		this.target.innerHTML = this.screen;
		this.target.querySelector('.modal-overlay').classList.add('fadein');
		this.target.querySelector('.modal-content').classList.add('gelatine');

		this.target.querySelector('.modal-btn').addEventListener('click', this.nextQuestion.bind(this));
	}

	nextQuestion() {
		if (this.nextQuestionNum < 10) {
			new Question(this.target, this.categoryType, this.categoryData, this.roundData, this.nextQuestionNum, this.score);
		} else {
			console.log(this.categoryData);
			new EndRound(this.target, this.categoryType, this.categoryData, this.roundData, this.score);
		}
	}
}

export default Modal;