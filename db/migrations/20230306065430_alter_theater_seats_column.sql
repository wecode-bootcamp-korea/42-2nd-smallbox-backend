-- migrate:up
ALTER TABLE theater_seats RENAME COLUMN `row` TO seat_row;
ALTER TABLE time_tables RENAME COLUMN `date` TO table_date;
ALTER TABLE time_tables RENAME COLUMN `time` TO table_time;