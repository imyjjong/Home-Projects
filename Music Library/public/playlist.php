<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Playlist</title>
    <link rel="stylesheet" href="src/css/style.css">
    <script src="src/js/846de9e07b.js"></script>
</head>
<body>
    <main class="main">
        <section class="playlist">
            <ul class="playlist__list">
                <li class="playlist__song playlist__names">
                        <span class="playlist__song--number">#</span>
                        <span class="playlist__song--title">
                            <p class="playlist__song--title-artist">Title</p>
                        </span>
                        <span class="playlist__song--year">Release</span>
                        <span class="playlist__song--duration">
                            <i class="fa-regular fa-clock"></i>
                        </span>
                    </li>
                <?php
                    include 'components/music.php';
                    createPlaylist($array);
                ?>
            </ul>
        </section>
    </main>
</body>
</html>