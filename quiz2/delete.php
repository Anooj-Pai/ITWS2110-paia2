<?php
    // Connect to db and if archive is pressed store all the data
    // Or if delete is pressed get rid of all the data in the tables

    $username = 'phpmyadmin';
    $password = 'Asdf5588';
    $database = 'quiz2';
    $servername='localhost';

    $conn;

    try {
        $conn = new PDO("mysql:host=$servername;dbname=$database", $username, $password);
        // set the PDO error mode to exception
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } catch (PDOException $e) {
        echo "Connection failed: " . $e->getMessage();
    }

    $connectToDB2 = $conn->prepare("DELETE FROM MBE");
    $connectToDB2->execute();

    header('Location: home.php');    
    ?>


