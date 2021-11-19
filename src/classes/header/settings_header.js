import Home from "../home";

class Settings_header {
	constructor() {
		this.target = document.querySelector('#header');
		this.screen = `
		<div class="settings__header">
			<a class="back-btn" href="#/"></a>
			<p class="settings-title">Настройки</p>
		</div>`;

		this.target.innerHTML = this.screen;
		this.target.querySelector('.settings__header').classList.add('rollin');

		this.target.querySelector('.back-btn').addEventListener('click', this.returnScreen);
	}

	returnScreen() {

		new Home();
	}
}

export default Settings_header;