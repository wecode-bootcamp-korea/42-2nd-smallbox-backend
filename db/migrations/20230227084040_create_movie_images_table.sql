-- migrate:up
CREATE TABLE `movie_images` (
  `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `image_url` varchar(255),
  `movie_id` int,
  CONSTRAINT `movie_images_movie_id_fk` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`id`)
);

-- migrate:down
DROP TABLE movie_images;
