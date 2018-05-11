<?php
    require_once(__DIR__.'/ConnDB.php');
    try {
        $db = new ConnDB();
        $sql = "INSERT INTO event (id, day, month, year, info) VALUES (default, :day, :month, :year, :info);";
        $stmt = $db->prepare($sql);
        var_dump($stmt);
        $stmt->bindValue('year', $_GET['year']);
        $stmt->bindValue('month', $_GET['month']);
        $stmt->bindValue('day', $_GET['day']);
        $stmt->bindValue('info', $_GET['info']);
        $stmt->execute();
        header('Location: ./');
        die();
    } catch (PDOException $e) {
        echo $e->getMessage();
    }