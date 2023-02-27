-- migrate:up
CREATE TABLE `movies_actors` (
  `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `movie_id` int,
  `actor_id` int,
  CONSTRAINT `movies_actors_movie_id_fk` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`id`),
  CONSTRAINT `movies_actors_actor_id_fk` FOREIGN KEY (`actor_id`) REFERENCES `actors` (`id`)
);

-- migrate:down
DROP TABLE movies_actors;
