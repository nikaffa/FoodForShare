insert into users (id, name, email, password, address, location, phone ) 
            values(1, 'Trattoria Restaurant', 'abc@restaurant.com', 'pwd', '21499 Queen St W, Toronto, ON M6R 1A3', '(43.645580, -79.412040)', '6476474677');
insert into users (id, name, email, password, address, location, phone ) 
            values(2, 'Sheppard Restaurant', 'xyz@foodbank.com', 'pwd', '2452 Sheppard Ave E Toronto, ON M2J 4W6', '(43.774910, -79.326157)', '6476474677');
insert into users (id, name, email, password, address, location, phone ) 
            values(3, 'City Centre Food Bank', 'xyz@foodbank.com', 'pwd', '100 City Centre Dr, Mississauga, ON L5B 2C9', '(43.593079, -79.642494)', '6476474677');
insert into users (id, name, email, password, address, location, phone ) 
            values(4, 'Meadowvale Food Bank', 'xyz@foodbank.com', 'pwd', '6650 Meadowvale Town Centre Cir, Mississauga, ON L5N 4B7', '(43.581501, -79.759941)', '6476474677');
insert into users (id, name, email, password, address, location, phone ) 
            values(5, 'Richmond Hill Community Food Bank', 'xyz@foodbank.com', 'pwd', '55 Newkirk Rd, Richmond Hill, ON L4C 3G4', '(43.89710068939737, -79.42752060878529)', '6476474677');
insert into users (id, name, email, password, address, location, phone ) 
            values(6, 'Romanos Restaurant', 'abc@restaurant.com', 'pwd', '830 Rowntree Dairy Rd, Woodbridge, ON L4L 5V3', '(43.80084868155111, -79.47637363835412)', '6476474677');
insert into users (id, name, email, password, address, location, phone ) 
            values(7, 'Subway', 'abc@restaurant.com', 'pwd', '267 Queen St W Ground Fl, Toronto, ON M5V 1Z4', '(43.65646891134814, -79.3862201486041)', '6476474677');

insert into donations (user_id, donation_date, Status) values(1, '2-15-2022', 'Pick-Up');
insert into donations (user_id, donation_date, Status) values(2, '2-15-2022', 'Pick-Up');
insert into donations (user_id, donation_date, Status) values(3, '2-15-2022', 'Pick-Up');
insert into donations (user_id, donation_date, Status) values(3, '2-15-2022', 'Pick-Up');
insert into donations (user_id, donation_date, Status) values(4, '2-15-2022', 'Pick-Up');
insert into donations (user_id, donation_date, Status) values(5, '2-15-2022', 'Pick-Up');
insert into donations (user_id, donation_date, Status) values(6, '2-15-2022', 'Pick-Up');
insert into donations (user_id, donation_date, Status) values(7, '2-15-2022', 'Pick-Up');

insert into donation_Items (donation_id, name, food_type, description, image, freshness, quantity, leftover) 
                     values(1, 'Pizza', 'Cooked', 'A few slices of pizza', 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg', '72', 5, 3);
insert into donation_Items (donation_id, name, food_type, description, image, freshness, quantity, leftover) 
                     values(1, 'Pasta', 'Cooked', '10lbs of Pasta', 'https://upload.wikimedia.org/wikipedia/commons/d/dc/The_Only_Original_Alfredo_Sauce_with_Butter_and_Parmesano-Reggiano_Cheese.png', '72', 10, 8);

insert into donation_Items (donation_id, name, food_type, description, image, freshness, quantity, leftover) 
                     values(2, 'Sandwiches', 'Cooked', 'Vegetarian sandwiches', 'https://simply-delicious-food.com/wp-content/uploads/2020/07/Easy-salad-sandwiches-with-herb-mayo-5.jpg', '72', 15, 13);
insert into donation_Items (donation_id, name, food_type, description, image, freshness, quantity, leftover) 
                     values(2, 'Fried chicken', 'Cooked', 'Fried chicken drumsticks', 'https://thestayathomechef.com/wp-content/uploads/2016/06/Fried-Chicken-4-1.jpg', '72', 18, 5);

insert into donation_Items (donation_id, name, food_type, description, image, freshness, quantity, leftover) 
                     values(3, 'Baked beans', 'Canned', '10 cans of beans in sause', 'https://media.zenfs.com/en/insider_articles_922/d08341acf94c0784230abbb57a87fd01', '72', 10, 10);
insert into donation_Items (donation_id, name, food_type, description, image, freshness, quantity, leftover) 
                     values(4, 'Gala apples', 'Raw', '5lbs of local apples', 'https://images.heb.com/is/image/HEBGrocery/000320644', '72', 5, 2);

insert into donation_Items (donation_id, name, food_type, description, image, freshness, quantity, leftover) 
                     values(5, 'Bananas', 'Raw', 'Ripe bananas, 3lbs', 'https://foodandnutrition.org/wp-content/uploads/SavorBananas.jpg', '72', 18, 18);
insert into donation_Items (donation_id, name, food_type, description, image, freshness, quantity, leftover) 
                     values(5, 'Organic pasta', 'Raw', 'Organic pasta, variety pack', 'https://richmedia.ca-richimage.com/ImageDelivery/imageService?profileId=12026540&id=1006728&recipeId=728', '72', 5, 4);

insert into donation_Items (donation_id, name, food_type, description, image, freshness, quantity, leftover) 
                     values(6, 'Canned soup', 'Canned', 'Classic soups, variety pack', 'https://www.campbellsfoodservice.com/wp-content/uploads/2019/03/campbells-classic-cans.png', '72', 5, 3);
insert into donation_Items (donation_id, name, food_type, description, image, freshness, quantity, leftover) 
                     values(6, 'White rice', 'Canned', 'Ready-to-use rice', 'https://anniechun.com/wp-content/uploads/2019/07/AnnieChuns-StickyWhite-Rice-948x948.png', '72', 8, 6);
insert into donation_Items (donation_id, name, food_type, description, image, freshness, quantity, leftover) 
                     values(6, 'Pasta', 'Raw', 'Barilla pasta, variety pack of 3', 'https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&itemId=119754-847&recipeName=680', '72', 9, 6);

insert into donation_Items (donation_id, name, food_type, description, image, freshness, quantity, leftover) 
                     values(7, 'Lasagna', 'Cooked', '2lbs of meat lasagna', 'https://www.cookingclassy.com/wp-content/uploads/2013/03/lasagna15.jpg', '72', 2, 2);

insert into donation_Items (donation_id, name, food_type, description, image, freshness, quantity, leftover) 
                     values(8, 'Sub of the day', 'Cooked', 'Tuna sub', 'https://www.subway.com/ns/images/menu/CAN/ENG/Subway_6in_Tuna_594x334_72_RGB.jpg', '72', 4, 3);


insert into reservations (user_id, reservation_date, status) values (2, '2-15-2022', 'Waiting');

insert into reservation_items (reservation_id, donation_item_id , quantity) values (1, 1, 2);
insert into reservation_items (reservation_id, donation_item_id , quantity) values (1, 2, 2);


