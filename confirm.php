<?php
session_start();

if (!isset($_SESSION["form_data"])) {
    header("Location: contato.html");
    exit;
}

$form_data = $_SESSION["form_data"];
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Confirmação</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="sobre.html">Sobre</a></li>
                <li><a href="produtos.html">Produtos/Serviços</a></li>
                <li><a href="contato.html">Contato</a></li>
            </ul>
        </nav>
    </header>

    <section id="confirmation">
        <h2>Dados Enviados</h2>
        <p><strong>Nome:</strong> <?php echo $form_data["name"]; ?></p>
        <p><strong>Email:</strong> <?php echo $form_data["email"]; ?></p>
        <p><strong>Mensagem:</strong> <?php echo $form_data["message"]; ?></p>
        <a href="contato.html">Voltar ao formulário</a>
    </section>

    <footer>
        <
