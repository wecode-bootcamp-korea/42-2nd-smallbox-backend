-- migrate:up
CREATE TABLE `review_videos` (
  `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `video_url` varchar(255),
  `review_id` int,
  CONSTRAINT `review_videos_review_id_fk` FOREIGN KEY (`review_id`) REFERENCES `reviews` (`id`)
);

-- migrate:down
DROP TABLE review_videos;
