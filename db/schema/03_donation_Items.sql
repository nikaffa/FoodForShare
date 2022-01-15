-- Drop and recreate donation_Items table

DROP TABLE IF EXISTS donation_Items CASCADE;

CREATE TABLE donation_Items (
  id SERIAL PRIMARY KEY NOT NULL,
  donation_id INTEGER REFERENCES donations(id) ON DELETE CASCADE,
  name VARCHAR(64) NOT NULL,
  food_type VARCHAR(15) NOT NULL,
  Description VARCHAR(255) NOT NULL,
  Image VARCHAR(164) NOT NULL,
  Freshness timestamp NOT NULL,
  ready_time_seconds INTEGER,
  Quantity SMALLINT NOT NULL,
  Leftover SMALLINT NOT NULL
);
