<?php

$recepient = "sergey.martynuk@gmail.com";
$sitename = "Яхт Клуб";

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$message = trim($_POST["message"]);
$message = "Имя: $name \nEmail: $email \nСообщение: $message";

$pagetitle = "Новое сообщение с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
