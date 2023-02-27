-- migrate:up
CREATE TABLE `social_types` (
  `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `type` varchar(255)
);

-- migrate:down
DROP TABLE social_types;
