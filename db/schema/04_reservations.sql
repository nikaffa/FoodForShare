-- Drop and recreate reservations table

DROP TABLE IF EXISTS reservations CASCADE;

CREATE TABLE reservations (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  reservation_date timestamp NOT NULL,
  status VARCHAR(15) NOT NULL
);
