-- migrate:up
CREATE TABLE `time_tables` (
  `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `movie_id` int,
  `theater_id` int,
  `date` date,
  `time` time,
  `datetime_discount_id` int,
  `price` decimal(10,2),
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT `time_tables_movie_id_fk` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`id`),
  CONSTRAINT `time_tables_theater_id_fk` FOREIGN KEY (`theater_id`) REFERENCES `theaters` (`id`),
  CONSTRAINT `time_tables_datetime_discount_id_fk` FOREIGN KEY (`datetime_discount_id`) REFERENCES `datetime_discounts` (`id`)
);

-- migrate:down
DROP TABLE time_tables;
