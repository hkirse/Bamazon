DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NULL,
  department_name VARCHAR(45) NULL,
  price DECIMAL(10,2),
  stock_quantity INT(10) NOT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Pit Boss Ceramic BBQ Grill", "Outdoors", 749.99, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Yeti Roadie 20 Cooler", "Outdoors", 199.99, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Levi Jeans", "Retail", 40.00, 200);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Monopoly", "Entertainment", 9.99, 350);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Star Wars Complete Blu Ray set", "Entertainment", 99.99, 250);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Reebok CrossFit Nano 7", "Retail", 70.00, 150);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Pisgah Pale Ale 6 Pack", "Grocery", 8.99, 1000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Mizuno baseball glove", "Sports", 49.99, 200);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Counter Culture Coffee 12 oz bag", "Grocery", 14.99, 500);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Adult Louisville Slugger bat", "Sports", 69.99, 200);