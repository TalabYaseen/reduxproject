<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
header("Content-Type: application/json;");
    
    include 'config.php';
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $db = crud::connect()->prepare("INSERT INTO books ( book_name, book_auther, book_disc, bookpic, book_user_id) VALUES (:book_name, :book_auther ,:book_disc, :bookpic ,:book_user_id)");
    $pic = $_FILES["bookpic"] ;
    print_r ($_POST);
    $targetDir = "../frontend/src/images/book_pics/";
    $fileName = ($pic["name"]);
    $targetPath = $targetDir . $fileName;
    move_uploaded_file($pic["tmp_name"], $targetPath);
    $db->bindValue(':book_name' , $_POST['book_name']); // to reach the name email and mobile from data 
    $db->bindValue(':book_auther' , $_POST['book_auther']); // to reach the name email and mobile from data 
    $db->bindValue(':book_disc' , $_POST["book_disc"]);
    $db->bindValue(':book_user_id' , $_POST["userid"]);
    $db->bindValue(':bookpic' , $fileName);
    $db->execute();
    }
    // for my books
    $path = explode('?' , $_SERVER['REQUEST_URI']);
    if (count($path)==2){
    if ($_SERVER['REQUEST_METHOD'] == 'GET' && is_numeric($path[1])){
    $db = crud::connect()->prepare("Select * from books WHERE book_user_id = $path[1]");
    $db->execute();
    echo json_encode( $db->fetchAll(PDO::FETCH_ASSOC));
}}
// for all books
    if ($_SERVER['REQUEST_METHOD'] == 'GET' && (count($path)==1)){
        $db = crud::connect()->prepare("Select * from books");
        $db->execute();
        echo json_encode( $db->fetchAll(PDO::FETCH_ASSOC));
    }

    if ($_SERVER['REQUEST_METHOD'] == 'DELETE'){
        $db = crud::connect()->prepare("DELETE FROM `books` WHERE book_id = $path[1]");
        $db->execute();
    }
    if ($_SERVER['REQUEST_METHOD'] == 'PUT'){
        print_r($_REQUEST);
        // $db = crud::connect()->prepare("DELETE FROM `books` WHERE book_id = $path[1]");
        // $db->execute();
    }

    ?>
