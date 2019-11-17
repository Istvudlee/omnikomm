<?php
/* Здесь проверяется существование переменных */
if (isset($_POST['name'])) {$name = $_POST['name'];}
if (isset($_POST['tel'])) {$phone = $_POST['tel'];}
 
/* Сюда впишите свою эл. почту */
$myaddres  = "sedoi787@yandex.ru"; // кому отправляем 
 
/* А здесь прописывается текст сообщения, \n - перенос строки */
$mes = "\nТелефон: $phone\nИмя: $name";
 
/* А эта функция как раз занимается отправкой письма на указанный вами email */
$sub='Заказ c сайта omnikomm-saransk.ru'; //сабж
$email='omnikomm-saransk.ru'; // от кого
$send = mail ($myaddres,$sub,$mes,"Content-type:text/plain; charset = utf-8\r\nFrom:$email");
 
ini_set('short_open_tag', 'On');
header('Refresh: 3; URL=index.html');
?>
