-- Drop and recreate Users table

DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(64) NOT NULL,
  email VARCHAR(64) NOT NULL,
  password VARCHAR(15) NOT NULL,
  location VARCHAR(150) NOT NULL,
  phone VARCHAR(15) NOT NULL
);
