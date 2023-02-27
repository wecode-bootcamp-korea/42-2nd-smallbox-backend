-- migrate:up
CREATE TABLE `users_movie_keywords` (
  `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `user_id` int,
  `movie_keyword_id` int,
  CONSTRAINT `users_movie_keywords_user_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `users_movie_keywords_movie_keyword_id_fk` FOREIGN KEY (`movie_keyword_id`) REFERENCES `movie_keywords` (`id`),
  CONSTRAINT `users_movie_keywords_user_id_movie_keyword_id_uk` UNIQUE (`user_id`, `movie_keyword_id`)
);

-- migrate:down
DROP TABLE users_movie_keywords;
