-- migrate:up
ALTER TABLE `time_tables` DROP CONSTRAINT `time_tables_theater_id_fk`;
ALTER TABLE `time_tables` DROP COLUMN `theater_id`;


