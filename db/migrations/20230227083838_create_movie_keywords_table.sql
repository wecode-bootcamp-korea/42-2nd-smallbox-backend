-- migrate:up
CREATE TABLE `movie_keywords` (
  `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `keyword` varchar(255)
);

-- migrate:down
DROP TABLE movie_keywords;
