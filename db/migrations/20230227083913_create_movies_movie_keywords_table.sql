-- migrate:up
CREATE TABLE `movies_movie_keywords` (
  `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `movie_id` int,
  `movie_keyword_id` int,
  CONSTRAINT `movies_movie_keywords_movie_id_fk` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`id`),
  CONSTRAINT `movies_movie_keywords_movie_keyword_id_fk` FOREIGN KEY (`movie_keyword_id`) REFERENCES `movie_keywords` (`id`)
);

-- migrate:down
DROP TABLE movies_movie_keywords;
