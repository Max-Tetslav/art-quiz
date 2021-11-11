import './style.scss';

const OPEN_SETTINGS_BTN_EL = document.querySelector('.settings-btn');
const CLOSE_SETTINGS_BTN_EL = document.querySelector('.back-btn');
const SETTINGS_CONTAINER_EL = document.querySelector('.settings__container');

function toggleSettingsMenu() {
	SETTINGS_CONTAINER_EL.classList.toggle('show');
}

OPEN_SETTINGS_BTN_EL.addEventListener('click', toggleSettingsMenu);
CLOSE_SETTINGS_BTN_EL.addEventListener('click', toggleSettingsMenu);