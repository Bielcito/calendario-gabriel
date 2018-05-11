<?php
    class ConnDB extends PDO {
        function __construct() {
            $host = 'localhost';
            $database = 'calendar';
            $user = 'novam3';
            $password = '1234';

            parent::__construct("mysql:host=$host;dbname=$database", $user, $password);
        }
    }