insert into users (id, name, email, password, address, location, phone ) 
            values(1, 'Trattoria Restaurant', 'abc@restaurant.com', 'pwd', '21499 Queen St W, Toronto, ON M6R 1A3', '(43.645580, -79.412040)', '6476474677');
insert into users (id, name, email, password, address, location, phone ) 
            values(2, 'Meadowvale Food Bank', 'xyz@foodbank.com', 'pwd', '6650 Meadowvale Town Centre Cir, Mississauga, ON L5N 4B7', '(43.581501, -79.759941)', '6476474677');

insert into donations (user_id, donation_date, Status) values(1, '1-26-2022', 'Pick-Up');
insert into donations (user_id, donation_date, Status) values(2, '1-26-2022', 'Pick-Up');


insert into donation_Items (donation_id, name, food_type, description, image, freshness, quantity, leftover) 
                     values(1, 'Pizza', 'Cooked', 'A few slices of pizza', 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg', '24', 5, 3);
                     
insert into donation_Items (donation_id, name, food_type, description, image, freshness, quantity, leftover) 
                     values(1, 'Pasta', 'Cooked', '10lbs of Pasta', 'https://upload.wikimedia.org/wikipedia/commons/d/dc/The_Only_Original_Alfredo_Sauce_with_Butter_and_Parmesano-Reggiano_Cheese.png', '24', 10, 8);

insert into donation_Items (donation_id, name, food_type, description, image, freshness, quantity, leftover) 
                     values(2, 'Baked beans', 'Canned', '10 cans of beans in tomato sause', 'https://s.yimg.com/ny/api/res/1.2/dDeMASPU1_X9K9zgnIn7Bw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTcxOQ--/https://s.yimg.com/uu/api/res/1.2/dZ0ujj4OsojD4sznYGTIPw--~B/aD02ODI7dz05MTA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/insider_articles_922/d08341acf94c0784230abbb57a87fd01', '72', 10, 10);

insert into donation_Items (donation_id, name, food_type, description, image, freshness, quantity, leftover) 
                     values(2, 'Gala apples', 'Raw', '5lbs of local apples', 'https://images.heb.com/is/image/HEBGrocery/000320644', '72', 5, 2);


insert into reservations (user_id, reservation_date, status) values (2, '1-26-2022', 'Waiting');
insert into reservations (user_id, reservation_date, status) values (2, '1-26-2022', 'Waiting');

insert into reservation_items (reservation_id, donation_item_id , quantity) values (1, 1, 2);
insert into reservation_items (reservation_id, donation_item_id , quantity) values (1, 2, 2);


