<?php
    require_once(__DIR__.'/ConnDB.php');
    $year = $_GET['year'];
    $month = $_GET['month'];
    $day = $_GET['day'];

    $db = new ConnDB();
    $sql = "SELECT * FROM event WHERE year = $year AND month = $month AND day = $day";
    $stmt = $db->prepare($sql);
    $stmt->execute();
    $info = $stmt->fetch()['info'];
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    A descrição para o dia <?=$year?>/<?=$month?>/<?=$day?> é: <br>
    <?=$info?><br>
    <a href="./">Voltar</a>
</body>
</html>