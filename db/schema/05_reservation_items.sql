-- Drop and recreate reservation_items table

DROP TABLE IF EXISTS reservation_items CASCADE;

CREATE TABLE reservation_items (
  id SERIAL PRIMARY KEY NOT NULL,
  reservation_id INTEGER REFERENCES reservations(id),
  donation_item_id INTEGER REFERENCES donation_items(id),
  quantity SMALLINT NOT NULL
);
