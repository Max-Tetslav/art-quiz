import './style.scss';

import Home from "./classes/home";
import Footer from './classes/footer';
import Header_home from './classes/header/home_header';

const header_container = document.querySelector('.header');
const content_container = document.querySelector('#content');
const footer_container = document.querySelector('#footer');


new Header_home(header_container);
new Home(content_container);
new Footer(footer_container);



// const OPEN_SETTINGS_BTN_EL = document.querySelector('.settings-btn');
// const CLOSE_SETTINGS_BTN_EL = document.querySelector('.back-btn');
// const SETTINGS_CONTAINER_EL = document.querySelector('.settings__container');
// const SETTINGS_HEADER_EL = document.querySelector('.settings__header');


// const HOMESCREEN_EL = document.querySelector('.homescreen');


// const CATEGORIES_EL = document.querySelector('.categories');
// const CATEGORIES_HEADER_EL = document.querySelector('.categories__header');
// const CLOSE_CATEGORY_BTN_EL = document.querySelector('.exit-category');
// const CATEGORIES_CONTAINER_EL = document.querySelector('.categories_container');
// const CATEGORY_TITLE_EL = document.querySelector('.category-title');

// const CATEGORY_BTN_ELEMS = document.querySelectorAll('.quiz-category');
// const ARTS_BTN_EL = document.querySelector('.arts-btn');
// const ARTISTS_BTN_EL = document.querySelector('.artists-btn');


// function shuffleArray(array) {
// 	for (var i = array.length - 1;i > 0;i--) {
// 		var j = Math.floor(Math.random() * (i + 1));
// 		var temp = array[i];
// 		array[i] = array[j];
// 		array[j] = temp;
// 	}
// }

// function closeSettings() {
// 	if (isCategoryScreen) {
// 		CATEGORIES_EL.classList.add('show');
// 		CATEGORIES_HEADER_EL.classList.add('show');
// 	} else {
// 		HOMESCREEN_EL.classList.remove('hide');
// 	}
// 	SETTINGS_HEADER_EL.classList.remove('show');
// 	SETTINGS_CONTAINER_EL.classList.remove('show');
// 	OPEN_SETTINGS_BTN_EL.classList.remove('hide');
// }

// function openSettings() {
// 	if (isCategoryScreen) {
// 		CATEGORIES_EL.classList.remove('show');
// 		CATEGORIES_HEADER_EL.classList.remove('show');
// 	}
// 	SETTINGS_HEADER_EL.classList.add('show');
// 	SETTINGS_CONTAINER_EL.classList.add('show');
// 	OPEN_SETTINGS_BTN_EL.classList.add('hide');
// 	HOMESCREEN_EL.classList.add('hide');
// }

// OPEN_SETTINGS_BTN_EL.addEventListener('click', openSettings);
// CLOSE_SETTINGS_BTN_EL.addEventListener('click', closeSettings);

// let isArtsOpened = false;
// let isArtistsOpened = false;
// let isCategoryScreen = false;

// function closeCategory() {
// 	HOMESCREEN_EL.classList.remove('hide');
// 	CATEGORIES_HEADER_EL.classList.remove('show');
// 	CATEGORIES_EL.classList.remove('show');

// 	isArtsOpened = false;
// 	isArtistsOpened = false;
// 	isCategoryScreen = false;
// }

// function openCategories() {
// 	HOMESCREEN_EL.classList.toggle('hide');
// 	CATEGORIES_HEADER_EL.classList.toggle('show');
// 	CATEGORIES_EL.classList.toggle('show');
// 	isCategoryScreen = true;
// }

// CLOSE_CATEGORY_BTN_EL.addEventListener('click', closeCategory);
// ARTS_BTN_EL.addEventListener('click', openArtsCategory);
// // ARTS_BTN_EL.addEventListener('click', openArtsQuestions);
// ARTISTS_BTN_EL.addEventListener('click', openArtistsCategory);
// CATEGORY_BTN_ELEMS.forEach(btn => btn.addEventListener('click', openCategories));


// const DATA_URL = './images.json';

// class Category {
// 	constructor(type, background, number, isPlayed = false, end) {
// 		this.type = type;
// 		this.background = background;
// 		this.number = number;
// 		this.isPlayed = isPlayed;
// 	}
// }
// //если в категорию не играли показывается номер категории, если играли показывается результат 5\10 например
// async function getData() {
// 	let response = await fetch(DATA_URL);
// 	let myData = await response.json();

// 	return myData;
// };



// function openArtistsCategory() {
// 	getData().then(myData => {
// 		isArtistsOpened = true;
// 		if (!isArtsOpened || isArtistsOpened) {
// 			CATEGORIES_CONTAINER_EL.innerHTML = '';
// 		}

// 		CATEGORY_TITLE_EL.innerHTML = `Художники`;
// 		const artistsData = myData.slice(120);
// 		for (let i = 0, num = 1;i < artistsData.length;i += 10, num++) {
// 			let cardData = new Category('artists', `./assets/img/${artistsData[i].imageNum}.jpg`, num, false);
// 			let card = `
// 				<div class="card">
// 				<img class="card-img" src="${cardData.background}"/>
// 				</div>`;
// 			CATEGORIES_CONTAINER_EL.innerHTML += card;
// 		};
// 		let card_el = document.querySelector('.card');
// 		let card_img_el = document.querySelector('.card-img');
// 		card_el.classList.add('card');
// 		card_img_el.classList.add('card-img');
// 	});
// }

// const QUESTION_EL = document.querySelector('.question');
// const QUESTION_HEADER_EL = document.querySelector('.question__header');
// const VARIANTS_CONTAINER_EL = document.querySelector('.variants__container');

// function openArtsCategory() {
// 	getData().then(myData => {
// 		isArtsOpened = true;
// 		if (!isArtistsOpened || isArtsOpened) {
// 			CATEGORIES_CONTAINER_EL.innerHTML = '';
// 		}

// 		CATEGORY_TITLE_EL.innerHTML = `Картины`;
// 		const artsData = myData.slice(0, 120);
// 		for (let i = 0, num = 1;i < artsData.length;i += 10, num++) {
// 			let cardData = new Category('arts', `./assets/img/${artsData[i].imageNum}.jpg`, num, false, i);
// 			let card = `
// 				<div class="card">
// 				<img class="card-img" id="${num}" src="${cardData.background}"/>
// 				</div>`;
// 			CATEGORIES_CONTAINER_EL.innerHTML += card;
// 		};
// 		let card_el = document.querySelectorAll('.card');
// 		let card_img_el = document.querySelectorAll('.card-img');

// 		card_el.forEach(card => {
// 			card.classList.add('card');
// 			card.addEventListener('click', openArtsQuestions);
// 		});
// 		card_img_el.forEach(card => card.classList.add('card-img'));
// 	});
// };

// let data = fetch(DATA_URL);




// function openArtsQuestions(e) {
// 	let firstQuestionNum = e.target.getAttribute('id') - 1;
// 	let questionNum = firstQuestionNum++;
// 	let rightAnswer = questionNum++;

// 	let artist = data;
// 	// getData().then(myData => artist = myData[rightAnswer].author);

// 	console.log(artist);

// 	let allVariants = [];
// 	while (allVariants.length < 3) {
// 		let num = Math.round(Math.random() * 120);
// 		if (num !== rightAnswer && !allVariants.includes(num)) {
// 			allVariants.push(num);
// 		}
// 		continue;
// 	};
// 	allVariants.push(rightAnswer);
// 	shuffleArray(allVariants);
// 	console.log(allVariants);
// 	CATEGORIES_HEADER_EL.classList.remove('show');
// 	CATEGORIES_EL.classList.remove('show');
// 	QUESTION_EL.classList.add('show');
// 	QUESTION_HEADER_EL.classList.add('show');

// 	allVariants.forEach(item => {
// 		let variant = `
// 		<div class="variant">
// 		<img class="variant-img" src="./assets/img/${item}.jpg"/>
// 		</div>`;
// 		VARIANTS_CONTAINER_EL.innerHTML += variant;
// 	});

// 	isCategoryScreen = false;
// }



