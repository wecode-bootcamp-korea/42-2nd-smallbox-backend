-- migrate:up
SET FOREIGN_KEY_CHECKS = 0;
ALTER TABLE `orders` MODIFY `id` INT AUTO_INCREMENT;
SET FOREIGN_KEY_CHECKS = 1;