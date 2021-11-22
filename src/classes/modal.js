import Question from "./question";
import EndRound from "./endround";
import load from "../utils/imageOnload";
import clearTimer from "../utils/clearTimer";

class Modal {
	constructor(target, categoryType, categoryData, roundData, prevQuestionInfo, nextQuestionNum, isRight, score, roundId) {
		clearTimer();
		this.target = target;
		this.categoryType = categoryType;
		this.categoryData = categoryData;
		this.roundData = roundData;
		this.nextQuestionNum = nextQuestionNum;
		this.score = score;
		this.roundId = roundId;


		if (localStorage.getItem('notify') === 'true' && isRight) {
			this.audio = new Audio('./assets/audio/right-answer.wav');

			if (localStorage.getItem('volume')) {
				this.audio.volume = Number(localStorage.getItem('volume')) / 100;
			}

			this.audio.addEventListener("canplay", (event) => {
				this.audio.play();
			});
		} else if (localStorage.getItem('notify') === 'true' && !isRight) {
			this.audio = new Audio('./assets/audio/wrong-answer.mp3');

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
				<div class="answer-status"></div>
				<div class="answer-img"></div>
				<p class="modal-text answer-name">${prevQuestionInfo.name}</p>
				<p class="modal-text answer-author">${prevQuestionInfo.author}</p>
				<p class="modal-text answer-year">${prevQuestionInfo.year}</p>
				<a class="modal-text modal-btn" >Продолжить</a>
			</div>
		</div > `;
		this.target.innerHTML = this.screen;
		load(this.target.querySelector('.answer-status'), isRight ? './assets/svg/right-answer.svg' : './assets/svg/wrong-answer.svg');
		load(this.target.querySelector('.answer-img'), `./assets/img/${prevQuestionInfo.imageNum}.jpg`);
		this.target.querySelector('.modal-overlay').classList.add('fadein');
		this.target.querySelector('.modal-content').classList.add('gelatine');

		this.target.querySelector('.modal-btn').addEventListener('click', this.nextQuestion.bind(this));
	}

	nextQuestion() {
		if (this.nextQuestionNum < 10) {
			new Question(this.target, this.categoryType, this.categoryData, this.roundData, this.nextQuestionNum, this.score, this.roundId);
		} else {
			new EndRound(this.target, this.categoryType, this.categoryData, this.roundData, this.score, this.roundId);
		}
	}
}

export default Modal;