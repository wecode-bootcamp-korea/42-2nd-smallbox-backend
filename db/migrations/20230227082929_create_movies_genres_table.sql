-- migrate:up
CREATE TABLE `movies_genres` (
  `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `movie_id` int,
  `genre_id` int,
  CONSTRAINT `movies_genres_movie_id_fk` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`id`),
  CONSTRAINT `movies_genres_genre_id_fk` FOREIGN KEY (`genre_id`) REFERENCES `genres` (`id`)
);

-- migrate:down
DROP TABLE movies_genres;
