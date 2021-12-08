import Category from './category';
import HeaderHome from './header/home_header';

class Home {
  constructor() {
    this.target = document.querySelector('#content');
    this.header = new HeaderHome();
    this.preloadBackground();
    this.screen = `	
			<div class="homescreen">
				<img class="logo-big" src="./assets/svg/main-logo.svg" alt="logo" >
				<div href="#/arts/" class="quiz-category arts-btn" id="arts">Картины</div>
				<div href="#/artists/" class="quiz-category artists-btn" id="artists">Художники</div>
			</div>`;
    this.target.innerHTML = this.screen;
    this.target.querySelector('.homescreen').classList.add('fadein');

    this.categories = document.querySelectorAll('.quiz-category');
    this.categories.forEach((item) => item.addEventListener('click', this.choseCategory.bind(this)));
  }

  async choseCategory(event) {
    const url = './images.json';
    const data = await this.fetchData(url);

    let artsData = [...data];
    const artsQuestions = [];

    if (event.target.id === 'arts') {
      artsData = data.slice(0, data.length / 2);
      artsData.forEach((item) => (item.question = `Автором какой из этих картин является <br/> ${item.author}?`));
    } else {
      artsData = data.slice(data.length / 2);
      artsData.forEach((item) => (item.question = `Кто написал картину <br/> ${item.name}?`));
    }

    for (let i = 0; i < artsData.length; i += 10) {
      const copyArr = [...artsData];
      artsQuestions.push(copyArr.slice(i, i + 10));
    }

    return new Category(artsQuestions, event.target.id);
  }

  preloadBackground() {
    const img = new Image();
    img.src = `./assets/images/background/98full.jpg`;
    img.onload = () => {
      document.body.style.backgroundImage = `linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${img.src})`;
    };
  }

  async fetchData(url) {
    const response = await fetch(url);
    const result = await response.json();

    return result;
  }
}

export default Home;
