<?php
    include '../source/database.php';
    $id = 1;
    $connection = database_connect();
    $sql = "SELECT * FROM library WHERE idLibrary=?";
    $statement = $connection->prepare($sql);
    $statement->bind_param("i", $id);
    $statement->execute();
    $results = $statement->get_result();
    $response = mysqli_fetch_assoc($results);
    $array[] = $response;

    $length = count($array);
    for($i = 0; $i < $length; $i++){
        echo '<link rel="stylesheet" href="assets/css/style.css">';
        echo '<div class="library">';
        echo '<img class="library__image" src="'.$response["cover"].'">';
        echo '<span class="library__wrapper">';
        echo '<p class="library__input">'.$response["title"].'</p>';
        echo '<p class="library__input">'.$response["artist"].'</p>';
        echo '</span>';
        echo '</div>';
    }
?>