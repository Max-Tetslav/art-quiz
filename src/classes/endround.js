import Category from './category';

class EndRound {
  constructor(target, categoryType, categoryData, roundData, score, roundId) {
    this.target = target;
    this.categoryType = categoryType;
    this.categoryData = categoryData;
    this.roundData = roundData;
    this.score = score;
    this.roundId = roundId;

    if (this.score > 5) {
      localStorage.setItem(`${this.categoryType}${this.roundId}`, 'true');
      localStorage.setItem(`score${this.categoryType}${this.roundId}`, `${this.score}`);
    }

    if (localStorage.getItem('notify') === 'true' && this.score > 5) {
      this.audio = new Audio('./assets/audio/success-round.mp3');

      if (localStorage.getItem('volume')) {
        this.audio.volume = Number(localStorage.getItem('volume')) / 100;
      }

      this.audio.addEventListener('canplay', () => {
        this.audio.play();
      });
    } else if (localStorage.getItem('notify') === 'true' && this.score < 6) {
      this.audio = new Audio('./assets/audio/fail-round.mp3');

      if (localStorage.getItem('volume')) {
        this.audio.volume = Number(localStorage.getItem('volume')) / 100;
      }

      this.audio.addEventListener('canplay', () => {
        this.audio.play();
      });
    }
    this.stars = this.setStars(this.score);
    this.screen = `
		<div class="modal-overlay">
			<div class="modal-content">
				<p class="modal-text answer-name">${this.getScore(this.score)}</p>
				<div class="stars-container">
					${
            this.stars.length
              ? this.stars.map((item) => (item = '<img class="star" src="./assets/svg/star.svg"/>')).join('')
              : '<img class="star" src="./assets/svg/poo.svg"/>'
          }
				</div>
				<p class="modal-text answer-author">Ваш результат: ${this.score}</p>
				<a class="modal-text modal-btn">Далее</a>
			</div>
		</div>`;
    this.target.innerHTML = this.screen;
    this.target.querySelector('.modal-overlay').classList.add('fadein');
    this.target.querySelector('.modal-content').classList.add('grow');
    this.target.querySelector('.modal-btn').addEventListener('click', this.finishRound.bind(this));
  }

  getScore(score) {
    let result = '';

    if (score === 10) {
      result = 'Супер!';
    } else if (score > 7) {
      result = 'Отлично!';
    } else if (score > 5) {
      result = 'Молодец!';
    } else {
      result = 'Попробуйте еще раз!';
    }

    return result;
  }

  setStars(score) {
    let result = [];
    if (score === 10) {
      result = ['', '', ''];
    } else if (score > 7) {
      result = ['', ''];
    } else if (score > 5) {
      result = [''];
    }
    return result;
  }

  finishRound() {
    return new Category(this.categoryData, this.categoryType);
  }
}

export default EndRound;
