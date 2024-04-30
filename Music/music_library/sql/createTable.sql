CREATE TABLE `library` 
(
    `idLibrary` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NOT NULL,
    `artist` VARCHAR(255) NOT NULL,
    `cover` VARCHAR(255) NOT NULL,
    `release` YEAR NOT NULL,
    `profile` VARCHAR(255) NOT NULL,
    `duration` VARCHAR(5) NOT NULL,
    `audio` VARCHAR(255) NOT NULL,
    `genre` VARCHAR(255) NOT NULL,
    PRIMARY KEY(`idLibrary`),
    UNIQUE INDEX `idLibrary_UNIQUE` (`idLibrary` ASC) VISIBLE
);