-- migrate:up
ALTER TABLE orders ADD order_number varchar(255) AFTER tid;
