-- migrate:up
CREATE TABLE `order_items` (
  `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `order_id` int,
  `time_table_id` int,
  `theater_seat_id` int,
  CONSTRAINT `order_items_order_id_fk` FOREIGN KEY (`order_id`) REFERENCES `orders`(`id`),
  CONSTRAINT `order_items_time_table_id_fk` FOREIGN KEY (`time_table_id`) REFERENCES `time_tables` (`id`),
  CONSTRAINT `order_items_theater_seat_id_fk` FOREIGN KEY (`theater_seat_id`) REFERENCES `theater_seats` (`id`)
);


-- migrate:down
DROP TABLE order_items;
