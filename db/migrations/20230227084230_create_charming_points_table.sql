-- migrate:up
CREATE TABLE `charming_points` (
  `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255)
);

-- migrate:down
DROP TABLE charming_points;
