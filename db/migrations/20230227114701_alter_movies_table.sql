-- migrate:up
ALTER TABLE movies MODIFY COLUMN detail_description varchar(10000);

