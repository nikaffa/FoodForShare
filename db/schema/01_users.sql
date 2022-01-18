-- Drop and recreate Users table

DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(64) NOT NULL,
  email VARCHAR(64) NOT NULL,
  password VARCHAR(15) NOT NULL,
  location VARCHAR(15) NOT NULL,
  phone VARCHAR(15) NOT NULL
);

insert into users (name, email, password, location, phone ) values('ABC Restaurant', 'abc@restaurant.com', 'pwd', 'abc locations', '6476474677');
insert into users (name, email, password, location, phone ) values('XYZ Food Bank', 'xyz@foodbank.com', 'pwd', 'xyz locations', '6476474677');
