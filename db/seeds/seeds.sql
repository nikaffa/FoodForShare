insert into users (name, email, password, address, location, phone ) 
            values('ABC Restaurant', 'abc@restaurant.com', 'pwd', '21499 Queen St W, Toronto, ON M6R 1A3', '(43.645580, -79.412040)', '6476474677');
insert into users (name, email, password, address, location, phone ) 
            values('XYZ Food Bank', 'xyz@foodbank.com', 'pwd', '6650 Meadowvale Town Centre Cir, Mississauga, ON L5N 4B7', '(43.581501, -79.759941)', '6476474677');

insert into donations (user_id, donation_date, Status) values(1, '1-1-2022', 'Pick-Up');
insert into donations (user_id, donation_date, Status) values(1, '2-1-2022', 'Pick-Up');
insert into donations (user_id, donation_date, Status) values(1, '3-1-2022', 'Pick-Up');
insert into donations (user_id, donation_date, Status) values(1, '4-1-2022', 'Pick-Up');
insert into donations (user_id, donation_date, Status) values(2, '4-1-2022', 'Pick-Up');


insert into donation_Items (donation_id, name, food_type, description, image, freshness, quantity, leftover) 
                     values(1, 'Pizza', 'Cooked', 'A few slices of pizza', '/images', '04-04-2022', 5, 3);
                     
insert into donation_Items (donation_id, name, food_type, description, image, freshness, quantity, leftover) 
                     values(1, 'Pasta', 'Cooked', '10lbs of Pasta', '/images', '04-04-2022', 10, 8);





insert into reservations (user_id, reservation_date, status) values (2, '2-1-2022', 'Waiting');
insert into reservations (user_id, reservation_date, status) values (2, '2-1-2022', 'Waiting');

insert into reservation_items (reservation_id, donation_item_id , quantity) values (1, 1, 2);
insert into reservation_items (reservation_id, donation_item_id , quantity) values (1, 2, 2);


