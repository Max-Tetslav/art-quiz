import Category from "../category";
import Home from "../home";
import Settings from "../settings";

class Home_header {
	constructor(actualScreen, categoryType, timer) {
		this.target = document.querySelector('#header');
		this.screen = `
		<div class="homescreen__header">
			<div class="settings-btn" id='settings'></div>
		</div>`;

		this.target.innerHTML = this.screen;
		this.target.querySelector('.homescreen__header').classList.add('fadein');


		this.target.querySelector('#settings').addEventListener('click', this.openSettings.bind(this));
		// setTimeout(() => this.target.querySelector('#settings').addEventListener('click', this.openSettings.bind(this)), 0);


		// actualScreen === 'category' ?
		// 	this.target.querySelector('.exit-category').addEventListener('click', this.returnScreen.bind(this)) : 0;


		// actualScreen === 'question' ?
		// 	this.target.querySelector('.exit-question').addEventListener('click', this.returnScreen.bind(this)) : 0;

	}

	// returnScreen(screen) {
	// 	new Home(document.querySelector('#content'));
	// 	// new Category(document.querySelector('#content'));
	// }

	openSettings() {
		new Settings();
	}
}

export default Home_header;