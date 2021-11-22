function load(target, url) {
	let img = new Image();
	img.src = url;
	img.onload = () => {
		console.log(typeof target);
		if (Array.isArray(target)) {
			target.map(target => {
				target.style.backgroundImage = `url(${img.src})`;
				target.classList.add('fadein');
			});
		};
		target.style.backgroundImage = `url(${img.src})`;
		target.classList.add('fadein');
	};
}

export default load;