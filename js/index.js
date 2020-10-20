const switchTheme = () => {
	document.body.classList.toggle('darkTheme');
	document.getElementById("brand").classList.toggle('nav-item-dark');
	document.getElementById("portfolio").classList.toggle('nav-item-dark');
	document.getElementById("networks-controller").classList.toggle('nav-icon-dark');
	document.getElementById("language-controller").classList.toggle('nav-icon-dark');
	document.getElementById("theme-controller").classList.toggle('nav-icon-dark');
	document.getElementById("h1").classList.toggle('nav-item-dark');
}
