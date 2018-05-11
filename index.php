<?php
    require_once(__DIR__.'/ConnDB.php');
    $db = new ConnDB();
    
    $sql = "SELECT * FROM event";
    $stmt = $db->prepare($sql);
    $stmt->execute();
    $results = json_encode($stmt->fetchAll());
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <script>
        let events = <?=$results?>;
    </script>
    <script src="calendar.js"></script>
    <link rel="stylesheet" href="index.css">
</head>
<body>
    <button onclick="decreaseMonth()"><</button>
    <span id="title"></span>
    <button onClick="increaseMonth()">></button>
    <table id="calendar"></table>
    <form id="createEvent" action="createEvent.php" method="get" hidden>
        Criar evento no dia <span id="day"></span>/<span id="month"></span>/<span id="year"></span><br>
        <input id="inputyear" type="hidden" name="year">
        <input id="inputmonth" type="hidden" name="month">
        <input id="inputday" type="hidden" name="day">
        Descrição: <textarea name="info" id="info"></textarea>
        <button type="submit">Criar</button>
    </form>
</body>
</html>