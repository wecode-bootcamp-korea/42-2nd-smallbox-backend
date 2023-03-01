-- migrate:up
ALTER TABLE `ticketings` DROP CONSTRAINT `ticketings_time_table_id_fk`;
ALTER TABLE `ticketings` DROP COLUMN `time_table_id`;
ALTER TABLE `ticketings` ADD `time_tables_theater_seat_id` INT AFTER `user_id`;
ALTER TABLE `ticketings` ADD CONSTRAINT `ticketings_time_tables_theater_seat_id_fk` FOREIGN KEY (`time_tables_theater_seat_id`) REFERENCES `time_tables_theater_seats` (`id`);
