let left = document.querySelector('#leftBtn');
let right = document.querySelector('#rightBtn');
let photos = document.querySelectorAll('.photo');
let current = 0;


left.onclick = slider;
right.onclick = slider2;

function slider() {
	if (current === 0) {
		photos[current+1].style.transform = 'translateX(-231px) scale(0.89, 0.89)';
		photos[current+1].style.zIndex = 0;
		photos[current].style.transform = 'translateX(231px) scale(1, 1)';
		photos[current].style.zIndex = 1;	
	} else if (current <= -1) {
		current = 0;
	} else {
		photos[current+1].style.transform = 'translateX(0) scale(0.89, 0.89)';
		photos[current+1].style.zIndex = 0;
		photos[current].style.transform = 'translateX(0) scale(1, 1)';
		photos[current].style.zIndex = 1;
	}
	current--;
}

function slider2() {
	if (current === 0) {
		photos[current+1].style.transform = 'translateX(231px) scale(0.89, 0.89)';
		photos[current+1].style.zIndex = 0;
		photos[current+2].style.transform = 'translateX(-231.5px) scale(1, 1)';
		photos[current+2].style.zIndex = 1;
	} else if (current >= photos.length-2) {	
		current = photos.length-3;
	} else {
		photos[current+1].style.transform = 'translateX(0) scale(0.89, 0.89)';
		photos[current+1].style.zIndex = 0;
		photos[current+2].style.transform = 'translateX(0) scale(1, 1)';
		photos[current+2].style.zIndex = 1;
	}
	current++;
}