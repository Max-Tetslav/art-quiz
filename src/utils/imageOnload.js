function load(target, number) {
	let img = new Image();
	img.src = `../assets/img/${number}.jpg`;
	img.onload = () => target.style.backgroundImage = `url(${img.src})`;
}

export default load;