import CategoryHeader from './header/category_header';
import Round from './round';
import load from '../utils/imageOnload';
import clearTimer from '../utils/clearTimer';

class Category {
  constructor(data, categoryType) {
    clearTimer();
    this.target = document.querySelector('#content');
    this.rounds = data;
    this.categoryType = categoryType;
    this.header = new CategoryHeader(this.categoryType);
    this.covers = this.setCovers();
    this.screen = `
		<div class="categories_container">${this.covers
      .map(
        (cover, index) => `
			<div class="card noplayed-card">
				<p class="card-number card-info">${index + 1}</p>${
          localStorage.getItem(`score${this.categoryType}${index}`)
            ? `<p class="card-score card-info">${localStorage.getItem(`score${this.categoryType}${index}`)}</p>`
            : ''
        }
        <div class="card-img" id="${index}"></div>
      </div>`,
      )
      .join('')}
    </div >`;
    this.target.innerHTML = this.screen;

    this.cardsImg = this.target.querySelectorAll('.card-img');

    this.covers.map((cover, index) => load(this.cardsImg[index], `./assets/img/${cover}.jpg`));

    this.cards = this.target.querySelectorAll('.card');

    this.cards.forEach((card, index) => {
      if (localStorage.getItem(`${this.categoryType}${index}`) === 'true') {
        card.classList.remove('noplayed-card');
        card.classList.add('played-card');
      }
      card.classList.add('grow');
    });
    document.addEventListener('click', this.chooseRound.bind(this));
  }

  setCovers() {
    const data = this.rounds.flat();
    const covers = [];
    for (let i = 0; covers.length < 12; i += 1) {
      const num = Math.round(Math.random() * data.length);
      if (!covers.includes(num)) {
        covers.push(num);
      }
    }
    return covers;
  }

  chooseRound(event) {
    if (event.target.parentNode.classList.contains('card')) {
      const { id } = event.target;
      const questions = this.rounds[id];
      const round = new Round(this.target, this.rounds, questions, this.categoryType, id);
      return round;
    }
  }
}

export default Category;
