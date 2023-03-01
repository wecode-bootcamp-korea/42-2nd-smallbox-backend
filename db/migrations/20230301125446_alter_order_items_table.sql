-- migrate:up
ALTER TABLE `order_items` DROP CONSTRAINT `order_items_theater_seat_id_fk`;
ALTER TABLE `order_items` DROP CONSTRAINT `order_items_time_table_id_fk`;
ALTER TABLE `order_items` DROP COLUMN `time_table_id`;
ALTER TABLE `order_items` DROP COLUMN `theater_seat_id`;
ALTER TABLE `order_items` ADD `time_table_theater_seat_id` int DEFAULT NULL AFTER `order_id`;
ALTER TABLE `order_items` ADD CONSTRAINT `order_items_time_table_theater_seat_id_fk` FOREIGN KEY (`time_table_theater_seat_id`) REFERENCES `time_tables_theater_seats` (`id`);