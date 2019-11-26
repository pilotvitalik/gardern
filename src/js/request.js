$(document).ready(function() {
$('#headerForm').submit(function(event) {
	if($('#headerName')[0].value === ''){
		event.preventDefault();
		alert('Введите имя');
	} else {
		if($('#headerPhone')[0].value === ''){
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
			$('#headerName')[0].value = '';
			$('#headerPhone')[0].value = '';
			return false;
		}
	}
	})
})