let btna = document.querySelector("a[href*='#head']");
let headerForm = document.querySelector('#headerForm');

btna.onclick = (e) => {
	e.preventDefault();
	headerForm.scrollIntoView({block: 'center', behavior: 'smooth'});
	document.querySelector('#headerName').focus();
}