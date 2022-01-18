function load(target, url) {
  const root = target;
  const img = new Image();
  img.src = url;
  img.onload = () => {
    root.style.backgroundImage = `url(${img.src})`;
    root.classList.add('fadein');
  };
}

export default load;
