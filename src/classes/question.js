import shuffleArray from '../utils/shuffleArray';
import QuestionHeader from './header/question_header';
import Modal from './modal';

class Question {
  constructor(target, categoryType, categoryData, roundData, questionNum, score, roundId) {
    this.target = target;
    this.categoryType = categoryType;
    this.categoryData = categoryData;
    this.roundData = roundData;
    this.questionNum = questionNum;
    this.score = score;
    this.roundId = roundId;

    this.rightAnswer =
      this.categoryType === 'arts' ? Number(roundData[this.questionNum].imageNum) : roundData[this.questionNum].author;
    this.allVariants = this.setVariants(this.categoryType);
    this.screen =
      this.categoryType === 'arts'
        ? `	<div class="question">
		<p class="question__text" >${this.roundData[this.questionNum].question}</p>
		${localStorage.getItem('timer') === 'true' ? `<p class="question__timer">${localStorage.getItem('seconds')}</p>` : ''}
		<div class="variants__container">${this.allVariants
      .map(
        (variant, index) => `
		<div class="variant">
		<img class="variant-img" src="./assets/img/${variant}.jpg" id="a${index}"/>
		</div>`,
      )
      .join('')}
		</div>
		</div>`
        : `	<div class="question artist-question">
		<p class="question__text" >${this.roundData[this.questionNum].question}</p>
		${localStorage.getItem('timer') === 'true' ? `<p class="question__timer">${localStorage.getItem('seconds')}</p>` : ''}
		<img class="question-image" src="./assets/img/${this.roundData[this.questionNum].imageNum}.jpg"/>
		<div class="variants__container artists_container">${this.allVariants
      .map(
        (variant, index) => `
		<div class="artist-variant " id="a${index}">${variant}</div>`,
      )
      .join('')}
		</div>
		</div>`;
    this.target.innerHTML = this.screen;
    this.target.querySelector('.question').classList.add('grow');

    this.timer = this.target.querySelector('.question__timer');

    this.variants_container = this.target.querySelector('.variants__container');
    this.variants_container.addEventListener('click', this.chooseAnswer.bind(this));
    if (this.timer) {
      this.timerAudio = new Audio('./assets/audio/timer.mp3');
      this.timerAudio.volume = Number(localStorage.getItem('volume')) / 100;
      this.timerAudio.play();
      this.tiktac(this.timer.textContent);
    }
    this.timer.classList.add('shake');
    this.header = new QuestionHeader(this.categoryType, this.categoryData);
  }

  chooseAnswer(event) {
    clearTimeout(this.timerGlobal);

    const id = Number(event.target.id.charAt(1));
    const isRight = id === this.allVariants.indexOf(this.rightAnswer);
    let nextQuestionNum = this.questionNum;
    let { score } = this;

    if (isRight) {
      score += 1;
    }

    nextQuestionNum += 1;

    if (this.questionNum < 10) {
      return new Modal(
        this.target,
        this.categoryType,
        this.categoryData,
        this.roundData,
        this.roundData[this.questionNum],
        nextQuestionNum,
        isRight,
        score,
        this.roundId,
      );
    }
  }

  tiktac(num) {
    this.prop = Number(num);
    this.timer.innerHTML = this.prop;

    if (this.prop >= 0) {
      this.prop -= 1;
    }

    let nextQuestionNum = this.questionNum;

    const timerId = setTimeout(this.tiktac.bind(this, [this.prop]), 1000);

    this.timerGlobal = timerId;

    if (this.prop === -1) {
      clearTimeout(timerId);
      nextQuestionNum += 1;
      return new Modal(
        this.target,
        this.categoryType,
        this.categoryData,
        this.roundData,
        this.roundData[this.questionNum],
        nextQuestionNum,
        false,
        this.score,
      );
    }
  }

  setVariants(type) {
    const variants = [this.rightAnswer];

    if (type === 'arts') {
      for (let i = 0; variants.length < 4; i += 1) {
        const questionNum = Math.round(Math.random() * 120);
        if (!variants.includes(questionNum)) {
          variants.push(questionNum);
        }
      }
    } else {
      for (let i = 0; variants.length < 4; i += 1) {
        const questionNum = Math.round(Math.random() * 120);
        if (!variants.includes(this.categoryData.flat()[questionNum].author)) {
          variants.push(this.categoryData.flat()[questionNum].author);
        }
      }
    }

    return shuffleArray(variants);
  }
}

export default Question;
