-- migrate:up
CREATE TABLE `theater_seat_status` (
  `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255)
);

-- migrate:down
DROP TABLE theater_seat_status;
