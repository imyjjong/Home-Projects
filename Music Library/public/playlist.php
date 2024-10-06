<?php include 'components/music.php';?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Playlist</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="src/css/style.css">
    <script src="src/js/846de9e07b.js"></script>
</head>
<body>
    <main class="main">
        <section class="playlist">
            <div class="playlist__banner">
            <?php
                    createBanner($array);
                ?>
            </div>
            <ul class="playlist__list">
                <li class="playlist__song playlist__names">
                        <span class="playlist__song--number">#</span>
                        <span class="playlist__song--title">
                            <p class="playlist__song--title-artist">Title</p>
                        </span>
                        <span class="playlist__song--album">Album</span>
                        <span class="playlist__song--duration">
                            <i class="fa-regular fa-clock"></i>
                        </span>
                    </li>
                <?php
                    createPlaylist($array);
                ?>
            </ul>
        </section>
    </main>
</body>
</html>