-- migrate:up
CREATE TABLE `film_ratings` (
  `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `rating` varchar(255)
);

-- migrate:down
DROP TABLE film_ratings;
