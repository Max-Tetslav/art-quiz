import Settings from "../settings";

class Home_header {
	constructor() {
		this.target = document.querySelector('#header');
		this.screen = `
		<div class="homescreen__header">
			<div class="settings-btn" id='settings'></div>
		</div>`;

		this.target.innerHTML = this.screen;
		this.target.querySelector('.homescreen__header').classList.add('fadein');
		this.target.querySelector('#settings').addEventListener('click', this.openSettings.bind(this));
	}

	openSettings() {
		new Settings();
	}
}

export default Home_header;