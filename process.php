<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);

    if (empty($name) || empty($email)) {
        echo "Todos os campos são obrigatórios!";
        exit;
    }

    
    $_SESSION["form_data"] = [
        "name" => $name,
        "email" => $email,
        "message" => $message
    ];

    
    header("Location: confirmation.php");
    exit;
}
?>
