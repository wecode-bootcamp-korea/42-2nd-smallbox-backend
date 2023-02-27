-- migrate:up
CREATE TABLE `ticketings` (
  `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `user_id` int,
  `time_table_id` int,
  `theater_seat_id` int,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT `ticketings_user_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `ticketings_time_table_id_fk` FOREIGN KEY (`time_table_id`) REFERENCES `time_tables` (`id`),
  CONSTRAINT `ticketings_theater_seat_id_fk` FOREIGN KEY (`theater_seat_id`) REFERENCES `theater_seats` (`id`)
);

-- migrate:down
DROP TABLE ticketings;
