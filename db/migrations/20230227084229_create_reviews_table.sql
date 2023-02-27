-- migrate:up
CREATE TABLE `reviews` (
  `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `user_id` int,
  `comment` varchar(255),
  `movie_id` int,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT `reviews_user_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `reviews_movie_id_fk` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`id`)
);

-- migrate:down
DROP TABLE reviews;
