-- migrate:up
CREATE TABLE `theaters` (
  `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255),
  `description` varchar(255),
  `image_url` varchar(255)
);

-- migrate:down
DROP TABLE theaters;
