-- migrate:up
CREATE TABLE `reviews_emotional_points` (
  `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `review_id` int,
  `emotional_point_id` int,
  `evaluation` boolean,
  CONSTRAINT `reviews_emotional_points_review_id_fk` FOREIGN KEY (`review_id`) REFERENCES `reviews` (`id`),
  CONSTRAINT `reviews_emotional_points_emotional_point_id_fk` FOREIGN KEY (`emotional_point_id`) REFERENCES `emotional_points` (`id`)
);

-- migrate:down
DROP TABLE reviews_emotional_points;
