-- migrate:up
ALTER TABLE payment_result ADD quantity int AFTER payment_method_type;
ALTER TABLE orders ADD quantity int AFTER tid;
