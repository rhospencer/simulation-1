CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(25),
    price INT,
    img TEXT
);

SELECT * FROM products;

INSERT INTO products (name, price, img)
VALUES
    ('Shoes', 60, 'img@url.com'),
    ('Shirt', 20, 'img@url.com');