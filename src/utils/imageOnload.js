function load(target, url) {
	let img = new Image();
	img.src = url;
	img.onload = () => {
		target.style.backgroundImage = `url(${img.src})`;
		target.classList.add('fadein');
	};
}

export default load;