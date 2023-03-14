<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
header("Content-Type: application/json;");


include 'config.php';
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        $user = json_decode(file_get_contents('php://input')); // to make php read this as an object from react
        // print_r($user);
        $pass = $user->password;
        $email = $user->email;
        $db = crud::connect()->prepare("SELECT * FROM `users` WHERE email = '$email' AND password = '$pass'");
        // $created_at = date('Y-m-d');
        // //$db->bindValue(':id' , $user->id); // to reach the name email and mobile from data 
        // $db->bindValue(':first_name' , $user->first_name); // to reach the name email and mobile from data 
        // $db->bindValue(':last_name' , $user->last_name); // to reach the name email and mobile from data 
        // $db->bindValue(':email' , $user->email);
        // $db->bindValue(':password' , $user->password);
        // $db->bindValue(':created' , $created_at);
        if($db -> execute()) {
            $response = ['status' =>1, 'message'=>"Record created succcesfully"];
        }else{
            $response = ['status' =>0, 'message'=>"Record Faild to create"];
        }
        // echo json_encode($response); // to send this message as a Json (you can read it in inspect -- Newtwork)


        // $db = crud::connect()->prepare("Select * from users WHERE email = :email AND password = :password");
        // $db->bindValue(':email' , $user->email);
        // $db->bindValue(':password' , $user->password);

        // if($db -> execute()) {
        //     $response ['userinfo'] = $db->fetch(PDO::FETCH_ASSOC);
        // }else{
        //     $response ['userinfo']="Record Faild to find";
        // }
        $response = $db->fetch(PDO::FETCH_ASSOC);
        echo json_encode($response); // to send this message as a Json (you can read it in inspect -- Newtwork)
    }

?>