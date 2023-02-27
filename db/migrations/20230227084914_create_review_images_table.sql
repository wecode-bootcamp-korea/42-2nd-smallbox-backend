-- migrate:up
CREATE TABLE `review_images` (
  `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `image_url` varchar(255),
  `review_id` int,
  CONSTRAINT `review_images_review_id_fk` FOREIGN KEY (`review_id`) REFERENCES `reviews` (`id`)
);

-- migrate:down
DROP TABLE review_images;
