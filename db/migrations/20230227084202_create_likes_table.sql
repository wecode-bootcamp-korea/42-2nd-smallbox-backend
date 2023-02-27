-- migrate:up
CREATE TABLE `likes` (
  `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `user_id` int,
  `movie_id` int,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT `likes_user_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `likes_movie_id_fk` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`id`)
);

-- migrate:down
DROP TABLE likes;
