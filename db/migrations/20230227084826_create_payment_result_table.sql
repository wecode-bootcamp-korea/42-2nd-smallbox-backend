-- migrate:up
CREATE TABLE `payment_result` (
  `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `order_id` int,
  `aid` varchar(255),
  `tid` varchar(255),
  `payment_method_type` varchar(255),
  `payment_amount` decimal(10,2),
  `tax_free` decimal(10,2),
  `vat` decimal(10,2),
  `point` int,
  `discount` decimal(10,2), 
  `card_info` varchar(255),
  `method` varchar(255),
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT `payment_result_order_id_fk` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`)
);

-- migrate:down
DROP TABLE payment_result;
