-- migrate:up
CREATE TABLE `movie_videos` (
  `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `video_url` varchar(255),
  `movie_id` int,
  CONSTRAINT `movie_videos_movie_id_fk` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`id`)
);

-- migrate:down
DROP TABLE movie_videos;
