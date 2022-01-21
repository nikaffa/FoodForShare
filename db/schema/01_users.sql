-- Drop and recreate Users table

DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(64) NOT NULL,
  email VARCHAR(64) NOT NULL,
  password VARCHAR(15) NOT NULL,
  address VARCHAR(150) NOT NULL,
  location point NOT NULL,
  phone VARCHAR(15) NOT NULL
);

CREATE INDEX ON users USING GIST(location);