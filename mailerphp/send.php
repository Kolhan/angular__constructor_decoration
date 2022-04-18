<?php
// Файлы phpmailer
require 'class.phpmailer.php';
require 'class.smtp.php';

//ПЕРЕМЕННЫЕ
//обязательные ползовательские
$name =  $_REQUEST['name'];
$phone = $_REQUEST['phone'];

//if($name!='' || $phone!='') {
//    if($name!='') echo "Не заполнено обязательное поля 'Имя'";
//    if($phone!='') echo "Не заполнено обязательное поля 'Телефон'";
//    exit();
//}

//не обязательные пользовательские
$email = $_REQUEST['email'];

//обязательные заполненные в фоне
$title          = $_REQUEST['title'];
$title_toCopy   = $_REQUEST['title_toCopy'];
$email_toCopy   = $_REQUEST['email_toCopy'];
$urlMain        = $_REQUEST['urlMain'];
$phoneMain      = $_REQUEST['phoneMain'];
$attach_html    = urldecode($_REQUEST['attach_html']);


//ПЕРЕМЕННЫЕ СЕРВЕРА
$mail_server = '@ya.ru';
$mail_login = 'login';
$mail_password = 'password';
$mail_host = 'smtp.yandex.ru'; 
$name_mailFrom = 'Конструктор отделки';

//НАСТРОЙКИ СЕРВЕРА
$mail = new PHPMailer;
$mail_toCopy = new PHPMailer;


//клиент
$mail->isSMTP(); 
$mail->Host = $mail_host;  
$mail->SMTPAuth = true;                      
$mail->Username = $mail_login; // Ваш логин в Яндексе. Именно логин, без @yandex.ru
$mail->Password = $mail_password; // Ваш пароль
$mail->SMTPSecure = 'ssl';                            
$mail->Port = 465;
$mail->setFrom($mail_login.$mail_server, $name_mailFrom); // Ваш Email

//организация
$mail_toCopy->isSMTP(); 
$mail_toCopy->Host = $mail_host;  
$mail_toCopy->SMTPAuth = true;                      
$mail_toCopy->Username = $mail_login; // Ваш логин в Яндексе. Именно логин, без @yandex.ru
$mail_toCopy->Password = $mail_password; // Ваш пароль
$mail_toCopy->SMTPSecure = 'ssl';                            
$mail_toCopy->Port = 465;
$mail_toCopy->setFrom($mail_login.$mail_server, $name_mailFrom); // Ваш Email



//$mail->addAddress('example@gmail.com'); // Еще один email, если нужно.

// Прикрепление файлов
for ($ct = 0; $ct < count($_FILES['userfile']['tmp_name']); $ct++) {
        $uploadfile = tempnam(sys_get_temp_dir(), sha1($_FILES['userfile']['name'][$ct]));
        $filename = $_FILES['userfile']['name'][$ct];
        if (move_uploaded_file($_FILES['userfile']['tmp_name'][$ct], $uploadfile)) {
            $mail->addAttachment($uploadfile, $filename);            
            $mail_toCopy->addAttachment($uploadfile, $filename);            
        } else {
            $msg .= 'Failed to move file to ' . $uploadfile;
        }
    }   
       

// Письмо клиенту
if($email!='') {
    $mail->isHTML(true); 
    $mail->Subject = $title; // Заголовок письма
    $mail->addAddress($email); // Email получателя
    $mail->Body    = "<h3>Файл с расчётами</h3><br>$attach_html"; // Текст письма
    
    // Результат клиента
    if(!$mail->send()) {
        echo 'Письмо не было отправлено. ';
        echo 'Mailer Error: ' . $mail->ErrorInfo;
    } else {
        echo 'ok';
    }
}
    
// Письмо на почту фирмы
if($mail_toCopy!='') {
    $mail_toCopy->isHTML(true); 
    $mail_toCopy->Subject = $title_toCopy; // Заголовок письма
    $mail_toCopy->addAddress($email_toCopy); // Email получателя
    //$mail_toCopy->addAddress($email); // Email получателя
    
    //$html_email = '';
    //if($email!='') $html_email = "<p>Почта $email</p>"
    $mail_toCopy->Body    = "<h3>Контактные данные клиента</h3> <p>Имя: $name</p><p/>Телефон: $phone</p><p>$email</p><br>$attach_html"; // Текст письма
    
    // Результат организации
    if(!$mail_toCopy->send()) {
        echo 'Письмо не было отправлено. ';
        echo 'Mailer Error: ' . $mail_toCopy->ErrorInfo;
    } else {
        echo 'ok';
    }
}



?>