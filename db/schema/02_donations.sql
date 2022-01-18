-- Drop and recreate donations table

DROP TABLE IF EXISTS donations CASCADE;

CREATE TABLE donations (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  donation_date timestamp NOT NULL,
  Status VARCHAR(15) NOT NULL
);


insert into donations (user_id, donation_date, Status) values(1, '1-1-2022', 'Pick-Up');
insert into donations (user_id, donation_date, Status) values(1, '2-1-2022', 'Pick-Up');

