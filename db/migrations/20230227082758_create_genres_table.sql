-- migrate:up
CREATE TABLE `genres` (
  `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `genre` varchar(255)
);

-- migrate:down
DROP TABLE genres;
