import Settings_header from "./header/settings_header";

class Settings {
	constructor() {
		this.target = document.querySelector('#content');
		this.header = new Settings_header();
		this.screen = `
		<div class="settings__container">
			<form class="settings__form">
				<div class="notify__container">
					<div class="turn-notify_container">
					<label class="container__label" for="notify">Оповещения</label>
					<input class="timer__input notify__checker" type="checkbox" name="notify" id="notify">
					</div>
					<div class="range_container">
					<input class="notify__input" type="range" name="notify-range" id="notify" value="50" min="0" max="100">
					</div>
				</div>
				<div class="turn-time_container">
				<div class="timer__container">
					<label class="container__label" for="timer_checked">Таймер</label>
					<input class="timer__input" id="timer_checked" type="checkbox" name="timer">
				</div>
				<div class="time__container">
					<label class="container__label" for="time">Время</label>
					<div class="time-input__container">
						<button class="time-btn" id="minus-btn" type="button">-</button>
						<input class="time__input" id="time" type="number" min="10" max="30" value="15" readonly>
						<button class="time-btn" id="plus-btn" type="button">+</button>
					</div>
				</div>	
				</div>
			</form>
		</div>`;
		this.target.innerHTML = this.screen;

		this.target.querySelector('.settings__container').classList.add('fadein');

		this.notifyChecker = document.querySelector('.notify__checker');
		this.notifyVolume = document.querySelector('.notify__input');
		this.timerChecker = document.querySelector('#timer_checked');
		this.secondsCounter = document.querySelector('.time__input');
		this.plusBtn = document.querySelector('#plus-btn');
		this.minusBtn = document.querySelector('#minus-btn');
		if (localStorage.getItem('notify') === "true") {
			this.notifyChecker.checked = true;
		}

		if (localStorage.getItem('volume')) {
			this.notifyVolume.value = localStorage.getItem('volume');
		}

		if (!this.notifyChecker.checked) {
			this.notifyVolume.disabled = true;
		}

		if (localStorage.getItem('timer') === 'true') {
			this.timerChecker.checked = true;
		}

		if (localStorage.getItem('seconds')) {
			this.secondsCounter.setAttribute('value', localStorage.getItem('seconds'));
		}

		this.notifyChecker.addEventListener('input', this.turnNotify.bind(this));
		this.notifyVolume.addEventListener('input', this.changeVolume.bind(this));
		this.timerChecker.addEventListener('input', this.turnTimer.bind(this));
		this.secondsCounter.addEventListener('input', this.setSeconds.bind(this));
		this.plusBtn.addEventListener('click', this.plusSeconds.bind(this));
		this.minusBtn.addEventListener('click', this.minusSeconds.bind(this));
	}

	turnNotify() {
		if (this.notifyVolume.disabled) {
			this.notifyVolume.disabled = false;
		} else if (!this.notifyVolume.disabled) {
			this.notifyVolume.disabled = true;
		}

		if (!this.notifyChecker.checked) {
			localStorage.setItem('volume', 0);
		}

		localStorage.setItem('notify', this.notifyChecker.checked);
	}

	changeVolume() {
		if (this.notifyChecker.checked) {
			localStorage.setItem('volume', this.notifyVolume.value);
			this.notifyVolume.setAttribute('value', localStorage.getItem('volume'));
		}
	}

	turnTimer() {
		localStorage.setItem('timer', this.timerChecker.checked);
	}

	setSeconds() {
		localStorage.setItem('seconds', this.secondsCounter.value);
	}

	plusSeconds() {
		if (this.secondsCounter.value < this.secondsCounter.max) {
			let value = Number(this.secondsCounter.value);
			value += 5;
			this.secondsCounter.setAttribute('value', value);
			localStorage.setItem('seconds', this.secondsCounter.value);
		}
	}

	minusSeconds() {
		if (this.secondsCounter.value > this.secondsCounter.min) {
			let value = Number(this.secondsCounter.value);
			value -= 5;
			this.secondsCounter.setAttribute('value', value);
			localStorage.setItem('seconds', this.secondsCounter.value);
		}
	}
}

export default Settings;