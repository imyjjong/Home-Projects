<?php
    include '../source/database.php';
    $connection = database_connect();
    $sql = "SELECT * FROM music";
    $statement = $connection->prepare($sql);
    $statement->execute();
    $results = $statement->get_result();
    $array = [];
    while($response = mysqli_fetch_assoc($results)){
        $array[] = $response;
    };

    function createSongs($array){
        $length = count($array);
        for($i = 0; $i < $length; $i++){
            echo '<article class="song">';
            echo '<figure class="song__figure">';
            echo '<img class="song__figure--image" src="'.$array[$i]["cover"].'" alt="'.$array[$i]['title'].' album cover">';
            echo '</figure>';
            echo '<div class="song__wrapper">';
            echo '<h2 class="song__wrapper--title">'.$array[$i]['title'].'</h2>';
            echo '<h3 class="song__wrapper--artist">'.$array[$i]['artist'].'</h3>';
            echo '</div>';
            echo '<audio class="song__audio" controls controlsList="nodownload noplaybackrate">';
            echo '<source src="'.$array[$i]['audio'].'" type="audio/mp3">';
            echo '</audio>';
            echo '</article>';
        }
    }

    function createPlaylist($array){
        $length = count($array);
        for($i = 0; $i < $length; $i++){
            echo '<li class="playlist__song">';
            echo '<span class="playlist__song--number">'.$array[$i]['idMusic'].'</span>';
            echo '<span class="playlist__song--title">';
            echo '<p class="playlist__song--title-text">'.$array[$i]['title'].'</p>';
            echo '<p class="playlist__song--title-artist">'.$array[$i]['artist'].'</p>';
            echo '</span>';
            echo '<span class="playlist__song--year">'.$array[$i]['year'].'</span>';
            echo '<span class="playlist__song--duration">'.$array[$i]['duration'].'</span';
            echo '</span>';
            echo '</li>';
        }
    }

    $connection->close();
?>