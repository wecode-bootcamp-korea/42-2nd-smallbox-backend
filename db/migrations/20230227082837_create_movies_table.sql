-- migrate:up
CREATE TABLE `movies` (
  `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255),
  `english_name` varchar(255),
  `simple_description` varchar(255),
  `detail_description` varchar(255),
  `thumbnail_image_url` varchar(255),
  `director_id` int,
  `opening_date` date,
  `film_rating_id` int,
  `running_time` varchar(255),
  `country` varchar(255),
  `score_card` int,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT `movies_director_id_fk` FOREIGN KEY (`director_id`) REFERENCES `directors` (`id`),
  CONSTRAINT `movies_film_rating_id_fk` FOREIGN KEY (`film_rating_id`) REFERENCES `film_ratings` (`id`)
);

-- migrate:down
DROP TABLE movies;
