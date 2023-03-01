-- migrate:up
CREATE TABLE `time_tables_theater_seats` (
  `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `time_table_id` int DEFAULT NULL,
  `theater_seat_id` int DEFAULT NULL,
  `theater_seat_status_id` int DEFAULT NULL,
  CONSTRAINT `time_tables_theater_seats_time_table_id_fk` FOREIGN KEY (`time_table_id`) REFERENCES `time_tables` (`id`),
  CONSTRAINT `time_tables_theater_seats_theater_seat_id_fk` FOREIGN KEY  (`theater_seat_id`) REFERENCES `theater_seats` (`id`),
  CONSTRAINT `time_tables_theater_seats_theater_seat_status_id_fk` FOREIGN KEY (`theater_seat_status_id`) REFERENCES `theater_seat_status` (`id`)
);

-- migrate:down
DROP TABLE `time_tables_theater_seats`;
