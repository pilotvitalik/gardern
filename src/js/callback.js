import {stopWheel, stopTouch} from './stopScroll';

let btn = document.querySelectorAll('.callback');
let modalWindow = document.querySelector('.modal');
let body = document.querySelector('body');
let closeBtn = document.querySelector('.closeBtn');
let closeImgPlane = document.querySelector('.closeImgPlane');
let modalImg = document.querySelector('.modalImg');
let showImgPlane = document.querySelector('.showImgPlane');

for(let i = 0; i < btn.length; i++){
		btn[i].onclick = () => {
		modalWindow.classList.toggle('active');
		stopWheel(modalWindow, function(e) {
		  e.preventDefault();
		});
		body.addEventListener('touchmove', stopTouch)
	}
}

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
			return false;
		}
		}
})
	
closeBtn.onclick = () => {
	modalWindow.classList.toggle('active');
	body.removeEventListener('touchmove', stopTouch)
}

showImgPlane.onclick = () => {
	modalImg.classList.toggle('active');
	stopWheel(modalImg, function(e) {
	  e.preventDefault();
	});
	body.addEventListener('touchmove', stopTouch)
}

closeImgPlane.onclick = () => {
	modalImg.classList.toggle('active');
	body.removeEventListener('touchmove', stopTouch)
}

