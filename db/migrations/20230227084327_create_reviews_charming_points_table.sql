-- migrate:up
CREATE TABLE `reviews_charming_points` (
  `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `review_id` int,
  `charming_point_id` int,
  `evaluation` boolean,
  CONSTRAINT `reviews_charming_points_review_id_fk` FOREIGN KEY (`review_id`) REFERENCES `reviews` (`id`),
  CONSTRAINT `reviews_charming_points_charming_point_id_fk` FOREIGN KEY (`charming_point_id`) REFERENCES `charming_points` (`id`)
);

-- migrate:down
DROP TABLE reviews_charming_points;
