-- migrate:up
ALTER TABLE movies ADD reservation_rate decimal(4,2) NULL;