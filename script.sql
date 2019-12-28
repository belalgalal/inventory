CREATE DATABASE IF NOT EXISTS inventory;

use inventory;

CREATE TABLE IF NOT EXISTS product (
    id INT AUTO_INCREMENT PRIMARY KEY, 
    title VARCHAR(100), 
    description VARCHAR(300), 
    price DECIMAL(10,2), 
    quantity INT);

INSERT INTO product VALUES(null, 'First Product', 'First Product Description', 200.10, 1);
INSERT INTO product VALUES(null, 'Second Product', 'Second Product Description', 200.20, 2);
INSERT INTO product VALUES(null, 'Third Product', 'Third Product Description', 300.30, 3);

CREATE TABLE IF NOT EXISTS user (
    id INT AUTO_INCREMENT PRIMARY KEY, 
    username VARCHAR(30), 
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    password VARCHAR(20), 
    active BOOLEAN);

INSERT INTO user VALUES(null, 'belal', 'belal', 'galal', 'belal', TRUE);
INSERT INTO user VALUES(null, 'ahmed', 'ahmed', 'galal', 'ahmed', TRUE);
INSERT INTO user VALUES(null, 'amr', 'amr', 'hesham', 'amr', TRUE);

