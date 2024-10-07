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
            echo '<form class="audioForm" action="components/playaudio.php" method="GET">';
            echo '<input type="hidden" name="audio" value="'.$array[$i]['audio'].'">';
            echo '<button class="song__figure--play" type="submit"><i class="fa-solid fa-play song__figure--play-icon"></i></button>';
            echo '</form>';
            echo '</figure>';
            echo '<div class="song__wrapper">';
            echo '<h2 class="song__wrapper--title">'.$array[$i]['title'].'</h2>';
            echo '<h3 class="song__wrapper--artist">'.$array[$i]['artist'].'</h3>';
            echo '</div>';
            echo '</article>';
        }
    };

    function createBanner($array){
        $id = 0;
        echo '<img class="playlist__banner--image" src="'.$array[$id]['cover'].'">';
        echo '<div class="playlist__banner--wrapper">';
        echo '<h2 class="playlist__banner--wrapper-title">'.$array[$id]['album'].'</h2>';
        echo '<p class="playlist__banner--wrapper-year">'.$array[$id]['year'].'</p>';
        echo '</div>';
        
    };

    function createPlaylist($array){
        $length = count($array);
        for($i = 0; $i < $length; $i++){
            echo '<li class="playlist__song">';
            echo '<span class="playlist__song--number">';
            echo '<p class="playlist__song--number-text">'.$array[$i]['idMusic'].'</p>';
            echo '<form class="playlistForm" action="components/playaudio.php" method="GET">';
            echo '<input type="hidden" name="audio" value="'.$array[$i]['audio'].'">';
            echo '<button class="playlist__play" type="submit"><i class="fa-solid fa-play song__play--icon"></i></button>';
            echo '</form>';
            echo '</span>';
            echo '<span class="playlist__song--title">';
            echo '<p class="playlist__song--title-text">'.$array[$i]['title'].'</p>';
            echo '<p class="playlist__song--title-artist">'.$array[$i]['artist'].'</p>';
            echo '</span>';
            echo '<span class="playlist__song--album"><p class="playlist__song--album-text">'.$array[$i]['album'].'</p></span>';
            echo '<span class="playlist__song--duration">'.$array[$i]['duration'].'</span';
            echo '</span>';
            echo '</li>';
        }
    };

    $connection->close();
?>