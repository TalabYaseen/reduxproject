<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
header("Content-Type: application/json;");
    
    include 'config.php';
    if ($_FILES){
    $pic = $_FILES["bookpic"] ;
    $targetDir = "../frontend/src/images/book_pics/";
    $fileName = ($pic["name"]);
    $targetPath = $targetDir . $fileName;
    move_uploaded_file($pic["tmp_name"], $targetPath);
    $db = crud::connect()->prepare("UPDATE `books` SET `book_name`='$_POST[book_name]',`book_auther`='$_POST[book_auther]',`book_disc`='$_POST[book_disc]',`bookpic`='$fileName' WHERE `book_id` = '$_POST[book_id]'");
    }
    else
     {
    $db = crud::connect()->prepare("UPDATE `books` SET `book_name`='$_POST[book_name]',`book_auther`='$_POST[book_auther]',`book_disc`='$_POST[book_disc]' WHERE`book_id` = '$_POST[book_id]'");

    }
    $db->execute();


    ?>
