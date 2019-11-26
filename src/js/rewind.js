let btna = document.querySelector("a[href*='#head']");
let headerForm = document.querySelector('#headerForm');

btna.addEventListener('click', function(e) {
	rewind(e);
	setTimeout(focus, 1100);
});

function rewind(e) {
	e.preventDefault();
	headerForm.scrollIntoView({block: 'center', behavior: 'smooth'});
	document.querySelector('body').style.overflowX = 'hidden';
}

function focus() {
	document.querySelector('#headerName').focus();
}
