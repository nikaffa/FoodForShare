# Demo
### Each:
Anam: Hi everyone thank you for coming today. I am Anam.
Veronika: Hi everyone I am Veronika.
Kashif: Hi everyone I am Kashif.


### Person ANAM: 

Anam: Today we will be talking about our web development project FoodforShare. The idea behind our project is to resolve the food-wasting problem. Our app will work as a bridge between restuarants, food banks who have extra food to donate the food in our platform. Also, it will allow individuals or food donation charity to search food that is available locally within their area.


### Person …  - Donor behaviour - creating donation ANAM:

Anam: For the purpose of the presentation we have created seperate users who are already logged in to demonstrate the features. User 1 will showcase the donor's who will donate food. User 2 will showcase the users when they want to search and reserve food. User 1 will on the home page click on donate food button. 
This lead them to donation form where they will enter the details such the name of the food, the description if application, there will be cooked food so we have added the freshness field to indicate how long they food is fresh to eat until expiry. The quantity and an image to allow a user who is searching for food to see how it will look like. Once you click on save donation, it will redirect you to the donations dashboard where the particular donor in our case user 1 can see the list of food they have donated. If by any chance the donor chooses to cancel an item from donation, they can simply click on the cancel button and it will eliminate the item from the list as well, it will give a twilio sms message to anyone who had reserved the item on the cancelation. Next Veronika will show you the user experience for searching for food.


### Person … - User behaviour - searching VERONIKA :

Veronika: For a user who would like to search for food they will start from the home page and click on the search food button.
Here the user will have the opportunity to search food through the search bar by typing an address and finding nearby locations. The user also, has the option on clicking on the compass at the right-hand side of the map which will allow the user to access their current location and find nearby locations. For our purpose, we will choose the location currently on the map and as you can see there are two pins (a food bank and a resturant) nearby. If a user selects food bank for instance, they will see all the food items the food bank is currently donating by simply clicking on the right arrow. The item card is displaying the name, image, the quantity remaining and time till the item will be available to reserve. You can reserve the item you want and it will get added to a cart. Now I will hand over to Kashif who will lead the rest of the presentation.


### Person … -  User behaviour continuing - creating/modifying/completing the order KASHIF:

Kashif: Thanks Veronika. Once a user is finished reserving items they can go to my cart which will have all them items from the different locations that you wish to reserve. Here you have the chance to increase or decrease the quantity of each item. And if you change your mind you can also remove the item you previously selected. Once you are satisfied with your selection you can click save reservation. Now that a user has made a reservation they can come to my reservations page which will display all the reservations they have currently and made in the past. For whatever reason if a user after making a reservation changes their mind and wish to cancel a reservation. They can click on the cancel button and this will remove their reservation from the reservations page also it will update the quantity of item. So previously [item] had [x] quantity. Now that I cancel the reservation the quantity comes back to the original amount of [x]. At the same it will notify the donor with twilio message on the cancelled reservation.



### Person … - Wrap up (depending on time left) KASHIF:
Kashif: For our tech stack we used Node, Express from backend PostgreSQL in db and React for frontend. Some of the features we would like to expand on is allowing a pickup / drop-off location with drop-off time closer to individuals. Also, we would like to expand our donation feature to incorporate individuals who would like to share their food.

Kashif: This concludes our presentation. Thank you everyone for watching. If you have any questions regarding our app feel free to join in our breakout room.

