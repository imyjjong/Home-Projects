USE `music`;
CREATE TABLE `music`
(
    `idMusic` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(100) NOT NULL,
    `artist` VARCHAR(100) NOT NULL,
    `cover` VARCHAR(255) NOT NULL,
    `audio` VARCHAR(100) NOT NULL,
    `year` INT UNSIGNED NOT NULL,
    `duration` VARCHAR(6) NOT NULL,
    `album` VARCHAR(100) NOT NULL,
    `artistimage` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`idMusic`),
    UNIQUE INDEX `idMusic_UNIQUE` (`idMusic` ASC) VISIBLE
);