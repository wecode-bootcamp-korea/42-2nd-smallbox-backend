-- migrate:up
CREATE TABLE `order_status` (
  `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `status` varchar(255)
);

-- migrate:down
DROP TABLE order_status;
