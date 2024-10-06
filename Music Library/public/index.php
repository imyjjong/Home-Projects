<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Music</title>
    <link rel="stylesheet" href="src/css/style.css">
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
</body>
</html>