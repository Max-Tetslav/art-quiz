function clearTimer() {
	for (let i = 0;i < 100000;i++) {
		clearTimeout(i);
	}
}

export default clearTimer;