-- migrate:up
ALTER TABLE `ticketings` DROP CONSTRAINT `ticketings_theater_seat_id_fk`;
ALTER TABLE `ticketings` DROP COLUMN `theater_seat_id`;
