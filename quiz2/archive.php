<?php
    // Connect to db and if archive is pressed store all the data
    // Or if delete is pressed get rid of all the data in the table

    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);
    
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

    $jsondata = file_get_contents('./resources/MBE.json');
    $data = json_decode($jsondata, true);

    foreach($data as $key => $value) {
        foreach($value as $key2 => $value2) {
            foreach($value2 as $key3 => $value3) {
                foreach($value3 as $key4 => $value4) {
                    if($key4 == "title") {
                        $title = $value4;
                    }
                    if($key4 == "description") {
                        $description = $value4;
                    }
                    if($key4 == "link") {
                        $link = $value4;
                    }
                }
                $checkLec = $conn->prepare("SELECT COUNT(id) FROM MBE WHERE title = :title");
                $connectToDB = $conn->prepare("INSERT INTO MBE (title, description, link) VALUES (:title, :description, :link)");
                $connectToDB2 = $conn->prepare("DELETE FROM MBE WHERE title = :title");
                $connectToDB->execute(['title' => $title, 'description' => $description, 'link' => $link]);
            }
        }
    }
    header('Location: home.php');
    ?>