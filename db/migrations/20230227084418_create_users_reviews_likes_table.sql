-- migrate:up
CREATE TABLE `users_reviews_likes` (
  `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `user_id` int,
  `review_id` int,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT `users_reviews_likes_user_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `users_reviews_likes_review_id_fk` FOREIGN KEY (`review_id`) REFERENCES `reviews` (`id`)
);

-- migrate:down
DROP TABLE users_reviews_likes;
