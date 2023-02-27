-- migrate:up
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `social_id` varchar(255),
  `social_type_id` int,
  `profile_nickname` varchar(255),
  `profile_image` varchar(255),
  `account_email` varchar(255),
  `birthday` varchar(255),
  `age_range` varchar(255),
  `gender` varchar(255),
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT `users_social_type_id_fk` FOREIGN KEY (`social_type_id`) REFERENCES `social_types` (`id`)
);

-- migrate:down
DROP TABLE users;
