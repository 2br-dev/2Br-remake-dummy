(() => {
	particlesJS.load('particles-js', '/js/particles.json');

	let year = new Date().getFullYear().toString();
	let oldYear = document.querySelector('.old-year').innerHTML;

	if(oldYear != year){
		document.querySelector('.now-year').innerHTML = " – " + year;
	}

})()