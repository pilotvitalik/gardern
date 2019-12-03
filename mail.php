<?php
header('Content-Type: text/html; charset=utf-8');
	$name = $_POST['name'];
	$phone = $_POST['phone'];

	$subject = "=?utf-8?B?".base64_encode('Сообщение с сайта  "Своя дача"')."?=";
    $message1 .='Name: '.$name."\r\n";
    $message1 .='Phone: '.$phone."\r\n";


	mail('itvkip@yandex.ru',$subject,$message1);

	header("Location: /");
?>