<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
header("Content-Type: application/json;");


include 'config.php';
$user = json_decode(file_get_contents('php://input')); // to make php read this as an object from react
        
        $db = crud::connect()->prepare("INSERT INTO users ( first_name, last_name, email, password, Created_at) VALUES (:first_name, :last_name ,:email, :password ,:created)");
        $created_at = date('Y-m-d');
        //$db->bindValue(':id' , $user->id); // to reach the name email and mobile from data 
        $db->bindValue(':first_name' , $user->first_name); // to reach the name email and mobile from data 
        $db->bindValue(':last_name' , $user->last_name); // to reach the name email and mobile from data 
        $db->bindValue(':email' , $user->email);
        $db->bindValue(':password' , $user->password);
        $db->bindValue(':created' , $created_at);
        if($db -> execute()) {
            $response = ['status' =>1, 'message'=>"Record updated succcesfully"];
        }else{
            $response = ['status' =>0, 'message'=>"Record Faild to update"];
        }
        echo json_encode($response); // to send this message as a Json (you can read it in inspect -- Newtwork)
?>