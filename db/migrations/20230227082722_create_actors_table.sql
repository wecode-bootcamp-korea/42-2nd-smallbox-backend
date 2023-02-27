-- migrate:up
CREATE TABLE `actors` (
  `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255)
);

-- migrate:down
DROP TABLE actors;
