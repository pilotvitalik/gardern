let btn = document.querySelectorAll('.callback');
let modalWindow = document.querySelector('.modal');
let body = document.querySelector('body');
let closeBtn = document.querySelector('#closeBtn');
let closeImgPlane = document.querySelector('#closeImgPlane');
let modalImg = document.querySelector('.modalImg');
let showImgPlane = document.querySelector('#showImgPlane');


outScrollBar();

$( window ).resize(function() {
    outScrollBar();
});

function outScrollBar() {
	let outScroll = window.innerWidth;
	body.style.width = outScroll + 'px';
	body.style.overflowX = 'hidden';
}

for(let i = 0; i < btn.length; i++){
		btn[i].onclick = () => {
		modalWindow.classList.toggle('active');
		body.style.pointerEvents = 'none';
		body.style.overflow = 'hidden';
		// send data to email
		$('#modalForm').submit(function(event) {
			if($('#modalName')[0].value === ''){
				event.preventDefault();
				alert('Введите имя');
			} else {
				if($('#modalPhone')[0].value === ''){
					event.preventDefault();
					alert('Введите номер телефона')
				} else {
					$.ajax({
						type: 'POST',
						url: 'mail.php',
						data: $(this).serialize()
					}).done(() => {
						alert('Спасибо за заявку! Скоро мы с Вами свяжемся.')
					})
					$('#modalName')[0].value = '';
					$('#modalPhone')[0].value = '';
					modalWindow.classList.toggle('active');
					body.style.pointerEvents = 'auto';
					body.style.overflow = 'auto';
					return false;
				}
			}
			})
	}
}
	
closeBtn.onclick = () => {
	modalWindow.classList.toggle('active');
	body.style.pointerEvents = 'auto';
	body.style.overflow = 'auto';
}

showImgPlane.onclick = () => {
	modalImg.classList.toggle('active');
	body.style.pointerEvents = 'none';
	body.style.overflow = 'hidden';
}

closeImgPlane.onclick = () => {
	modalImg.classList.toggle('active');
	body.style.pointerEvents = 'auto';
	body.style.overflow = 'auto';
}

