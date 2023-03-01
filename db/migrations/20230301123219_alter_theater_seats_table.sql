-- migrate:up
ALTER TABLE `theater_seats` DROP CONSTRAINT `theater_seats_theater_seat_status_id_fk`;
ALTER TABLE `theater_seats` DROP COLUMN `theater_seat_status_id`;
ALTER TABLE `theater_seats` DROP COLUMN `updated_at`;
