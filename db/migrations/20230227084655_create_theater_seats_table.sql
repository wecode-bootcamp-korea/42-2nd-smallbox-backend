-- migrate:up
CREATE TABLE `theater_seats` (
  `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `theater_id` int,
  `seat_number` varchar(255),
  `row` varchar(255),
  `disabled_seat` boolean DEFAULT 0,
  `theater_seat_status_id` int,
  `updated_at` datetime,
  CONSTRAINT `theater_seats_theater_id_fk` FOREIGN KEY (`theater_id`) REFERENCES `theaters` (`id`),
  CONSTRAINT `theater_seats_theater_seat_status_id_fk` FOREIGN KEY (`theater_seat_status_id`) REFERENCES `theater_seat_status` (`id`)
);

-- migrate:down
DROP TABLE theater_seats;
