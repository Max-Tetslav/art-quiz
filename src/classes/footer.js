class Footer {
	constructor(target) {
		this.target = target;
		this.screen = `
		<div class="footer__container" id="footer">
			<a class="rss" href="" target="_blank"></a>
			<div class="developer__container">
				<p class="developer_text">Developer: </p>
				<a class="github" href="https://github.com/Max-Tetslav" target="_blank">Max-Tetslav</a>
			</div>
			<p class="year">© 2021</p>
		</div>`;
		this.target.innerHTML = this.screen;
	}
}

export default Footer;