-- migrate:up
CREATE TABLE `orders` (
  `id` int PRIMARY KEY,
  `user_id` int,
  `order_status_id` int,
  `tid` varchar(255),
  `total_amount` decimal(10,2),
  `tax_free_amount` decimal(10,2),
  `vat_amount` decimal(10,2),
  `coupon_discount_id` int,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT `orders_user_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `orders_order_status_id_fk` FOREIGN KEY (`order_status_id`) REFERENCES `order_status` (`id`),
  CONSTRAINT `orders_coupon_discount_id_fk` FOREIGN KEY (`coupon_discount_id`) REFERENCES `coupon_discounts` (`id`)
);

-- migrate:down
DROP TABLE orders;
