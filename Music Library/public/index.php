<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Music</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="src/css/style.css">
    <script src="src/js/846de9e07b.js"></script>
    <script src="src/js/script.js" defer></script>
</head>
<body>
    <header class="header">
        header
    </header>
    <main class="main">
        <section class="songs">
            <?php 
                include 'components/music.php';
                createSongs($array);
            ?>
        </section>
    </main>
    <section class="playbar">
        <audio class="playbar__audio" id="js--playbar" src="" autoplay controls controlsList="nodownload noplaybackrate"></audio>
    </section>
</body>
</html>