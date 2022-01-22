insert into users (id, name, email, password, address, location, phone ) 
            values(1, 'ABC Restaurant', 'abc@restaurant.com', 'pwd', '21499 Queen St W, Toronto, ON M6R 1A3', '(43.645580, -79.412040)', '6476474677');
insert into users (id, name, email, password, address, location, phone ) 
            values(2, 'XYZ Food Bank', 'xyz@foodbank.com', 'pwd', '6650 Meadowvale Town Centre Cir, Mississauga, ON L5N 4B7', '(43.581501, -79.759941)', '6476474677');

insert into donations (user_id, donation_date, Status) values(1, '1-1-2022', 'Pick-Up');
insert into donations (user_id, donation_date, Status) values(1, '2-1-2022', 'Pick-Up');
insert into donations (user_id, donation_date, Status) values(1, '3-1-2022', 'Pick-Up');
insert into donations (user_id, donation_date, Status) values(1, '4-1-2022', 'Pick-Up');
insert into donations (user_id, donation_date, Status) values(2, '4-1-2022', 'Pick-Up');


insert into donation_Items (donation_id, name, food_type, description, image, freshness, quantity, leftover) 
                     values(1, 'Pizza', 'Cooked', 'A few slices of pizza', '/images', '2 hours', 5, 3);
                     
insert into donation_Items (donation_id, name, food_type, description, image, freshness, quantity, leftover) 
                     values(1, 'Pasta', 'Cooked', '10lbs of Pasta', '/images', '8 hours', 10, 8);

insert into donation_Items (donation_id, name, food_type, description, image, freshness, quantity, leftover) 
                     values(2, 'Canned beans', 'Canned', '10 cans of black beans', '/images', '12 months', 10, 10);

insert into donation_Items (donation_id, name, food_type, description, image, freshness, quantity, leftover) 
                     values(2, 'Gala apples', 'Raw', '5lbs of local apples', '/images', '8 days', 5, 2);


insert into reservations (user_id, reservation_date, status) values (2, '2-1-2022', 'Waiting');
insert into reservations (user_id, reservation_date, status) values (2, '2-1-2022', 'Waiting');

insert into reservation_items (reservation_id, donation_item_id , quantity) values (1, 1, 2);
insert into reservation_items (reservation_id, donation_item_id , quantity) values (1, 2, 2);


