DROP DATABASE IF EXISTS Shmetsy;
CREATE DATABASE Shmetsy;
USE Shmetsy;


DROP TABLE IF EXISTS `Products`;
CREATE TABLE `Products` (
  `id` INTEGER AUTO_INCREMENT,
  `name` TEXT,
  `shop_id` INTEGER,
  `description` TEXT,
  `price` DECIMAL,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `Shops`;
CREATE TABLE `Shops` (
  `id` INTEGER AUTO_INCREMENT,
  `shop_name` TEXT,
  `owner_name` TEXT,
  `location` TEXT,
  `total_sales` DECIMAL,
  `founded_date` TEXT,
  `owner_url` TEXT,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `Colors`;
CREATE TABLE `Colors` (
  `id` INTEGER AUTO_INCREMENT,
  `color_name` TEXT,
  `price_modifier` DECIMAL,
  `product_id` INTEGER,
  PRIMARY KEY (`id`)
);


INSERT INTO Products (name, shop_id, description, price) VALUES ("High quality face mask", 1, "Face mask / face cover
Unisex face masks handcrafted.
Made from TWO layers of breathable tightly woven cotton which allows the mask to be breathable yet soft to touch.

PRODUCT DETAILS:
- Reusable
- Hand Wash and Air Dry Only.
- 100% Cotton
- Size approx. 8,5 X 5

*NOTE: Shipping may be delayed if preferred color goes out of stock and due to fluctuations in demand to support our local healthcare and law enforcement.

PLEASE READ THE FOLLOWING:
*Please note that due to an overwhelming amount of orders we are currently producing more masks. Production time might take up to 7 to 10 business days. Ship dates are our best guess, but no guarantee. We are working as fast as we can to get your orders shipped.
Customer service is extremely important me and I want to get these to you as fast as I can and I will ship as fast as I can, that being said, Please do not message me and ask when you will get your mask.
If you can not wait until May, I recommend not ordering. Thank you!

No returns or exchanges accepted due to personal character of this item, unless wrong size or color was shipped to you.

LEGAL DISCLAIMER:
The mask is not intended to act as a medical device or other medical product, and should not be used as a replacement for conventional and approved personal protective equipment. No warranties, either express or implied, are hereby given that the mask will prevent infection or the transmission of viruses or diseases. The mask is not a substitute for professional medical advice, diagnosis or treatment. If you have any specific questions about any medical matter, you should always consult a doctor or other healthcare provider", 12.00);


INSERT INTO Shops (shop_name, owner_name, location, total_sales, founded_date, owner_url) VALUES ("Masks-R-Us", "Masky Maskerson", "San Fransisco, United States", "2020", "https://i.etsystatic.com/iusa/4e4617/74743775/iusa_75x75.74743775_j7yl.jpg?version=0");

INSERT INTO Colors (color_name, price_modifier, product_id) VALUES ("Black", 2.00, 1);

INSERT INTO Colors (color_name, price_modifier, product_id) VALUES ("White", 6.99, 1);

INSERT INTO Colors (color_name, price_modifier, product_id) VALUES ("Caribbean Blue", 3.00, 1);

INSERT INTO Colors (color_name, price_modifier, product_id) VALUES ("Royal", 18.49, 1);

INSERT INTO Colors (color_name, price_modifier, product_id) VALUES ("Safety Green", 5.99, 1);

INSERT INTO Colors (color_name, price_modifier, product_id) VALUES ("Charcoal", 31.00, 1);

INSERT INTO Colors (color_name, price_modifier, product_id) VALUES ("Pink", 5.00, 1);

INSERT INTO Colors (color_name, price_modifier, product_id) VALUES ("Orange", 9.00, 1);

INSERT INTO Colors (color_name, price_modifier, product_id) VALUES ("Black/White", 16.00, 1);

INSERT INTO Colors (color_name, price_modifier, product_id) VALUES ("USA", 99.99, 1);

--    mysql -u mta630 < schema.sql
