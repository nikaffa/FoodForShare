-- Drop and recreate donation_Items table

DROP TABLE IF EXISTS donation_Items CASCADE;

CREATE TABLE donation_Items (
  id SERIAL PRIMARY KEY NOT NULL,
  donation_id INTEGER REFERENCES donations(id) ON DELETE CASCADE,
  name VARCHAR(64) NOT NULL,
  food_type VARCHAR(25) NOT NULL,
  description VARCHAR(255) NOT NULL,
  image VARCHAR(2048),
  freshness SMALLINT NOT NULL,
  quantity SMALLINT NOT NULL,
  leftover SMALLINT NOT NULL
);
