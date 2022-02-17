-- Drop and recreate donations table

DROP TABLE IF EXISTS donations CASCADE;

CREATE TABLE donations (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  donation_date timestamp NOT NULL,
  Status VARCHAR(55) NOT NULL
);
