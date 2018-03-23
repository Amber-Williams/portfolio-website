<?php
$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$from = "<" . $email . ">";
$to = 'ambercwilliams91@gmail.com, amber@amberbydesign.com';
$subject = "ABD Contact Mail";
$body =
"First name: {$firstName}
Last name: {$lastName}
From: {$email}
Phone: {$phone}
Message: {$message}";
mail($to, "ABD Contact Mail", $body);
header('Location: http://amberbydesign.com/grape');
?>
