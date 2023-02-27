-- migrate:up
CREATE TABLE `coupon_discounts` (
  `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `type` varchar(255),
  `discount_rate` float,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- migrate:down
DROP TABLE coupon_discounts;
