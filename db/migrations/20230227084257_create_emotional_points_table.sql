-- migrate:up
CREATE TABLE `emotional_points` (
  `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255)
);

-- migrate:down
DROP TABLE emotional_points;
