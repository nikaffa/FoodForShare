insert into users (name, email, password, location, phone ) values('ABC Restaurant', 'abc@restaurant.com', 'pwd', 'abc locations', '6476474677');
insert into users (name, email, password, location, phone ) values('XYZ Food Bank', 'xyz@foodbank.com', 'pwd', 'xyz locations', '6476474677');

insert into donations (user_id, donation_date, Status) values(1, '1-1-2022', 'Pick-Up');
insert into donations (user_id, donation_date, Status) values(1, '2-1-2022', 'Pick-Up');
insert into donations (user_id, donation_date, Status) values(1, '3-1-2022', 'Pick-Up');
insert into donations (user_id, donation_date, Status) values(1, '4-1-2022', 'Pick-Up');
insert into donations (user_id, donation_date, Status) values(2, '4-1-2022', 'Pick-Up');


insert into donation_Items (donation_id, name, food_type, description, image, freshness, quantity, leftover) 
                     values(1, 'Pizza', 'Cooked', 'A few slices of pizza', '/images', '04-04-2022', 5, 5);
                     
insert into donation_Items (donation_id, name, food_type, description, image, freshness, quantity, leftover) 
                     values(1, 'Pasta', 'Cooked', '10lbs of Pasta', '/images', '04-04-2022', 10, 10);