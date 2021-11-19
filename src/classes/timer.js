class Timer {
	constructor(value, target, questionNum, modal) {
		this.prop = Number(value);
		console.log(this.prop);
		target.innerHTML = this.prop;
		this.nextQuestionNum = questionNum;

		// this.timerId = setTimeout(this.tiktac.bind(this, [prop]), 1000);

		this.timerGlobal;
		// this.header = new Question_header(this.categoryType, this.categoryData, this.timerGlobal);
		// this.setHeader.bind(Question, []);

		if (this.prop >= 0) {
			this.timerId;
		}


	}

	start() {
		if (this.prop >= 0) {
			this.prop -= 1;
		}

		this.timerId = setTimeout(this.tiktac.bind(this, [prop]), 1000);

		if (this.prop >= 0) {
			this.timerId;
		}
		// this.timerGlobal = timerId;
	}

	stop() {
		clearTimeout(this.timerId);
	}

	fail() {
		if (this.prop === -1) {
			clearTimeout(this.timerId);
			this.nextQuestionNum += 1;
			modal;
		}
	}
}