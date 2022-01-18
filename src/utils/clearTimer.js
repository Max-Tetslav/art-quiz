function clearTimer() {
  for (let i = 0; i < 100000; i += 1) {
    clearTimeout(i);
  }
}

export default clearTimer;
