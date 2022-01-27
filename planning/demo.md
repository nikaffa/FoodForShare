# Demo
### Each:
Anam: Hi everyone thank you for coming today. I am Anam.
Veronika: Hi everyone I am Veronika.
Kashif: Hi everyone I am Kashif.


### ANAM: 

Anam: Today we will be talking about our web development project FoodforShare. The idea behind our project is to resolve the food-wasting problem. Our app will work as a bridge between restuarants, food banks who have extra food to donate the food in our platform. Also, it will allow individuals or food donation charity to search food that is available locally within their area.


### ANAM (Donor behaviour):

Anam: For the purpose of the presentation we have created seperate users who are already logged in to demonstrate the features. User 1 will showcase the donor's who will donate food. User 2 will showcase the users when they want to search and reserve food. User 1 will on the home page click on donate food button. 
This lead them to donation form where they will enter the details such the name of the food, the description if application, there will be cooked food so we have added the freshness field to indicate how long they food is fresh to eat until expiry. The quantity and an image to allow a user who is searching for food to see how it will look like. Once you click on save donation, it will redirect you to the donations dashboard where the particular donor in our case user 1 can see the list of food they have donated. If by any chance the donor chooses to cancel an item from donation, they can simply click on the cancel button and it will eliminate the item from the list as well, it will give a twilio sms message to anyone who had reserved the item on the cancelation. 


### VERONIKA (User behaviour - searching):
And if you are the user who would like to search for food, you are logging in under your name, for the Demo purposes it’s User2. You will start from the home page and click on the search food button.
Here you have the opportunity to use the search bar by typing an address. 
If you type Vancouver, for instancee, you’ll see some places donating food in this city.
You also have the option of using geolocation by clicking on the compass and finding the places within your current location.
Great, we have several places that offer food nearby. 
And if you select one of them, you’ll see all the food items available by simply clicking on the right arrow. The item card is displaying the details: you can see the name, the picture, the quantity remaining and time till the item will be available to reserve. 

You can reserve the item you want and it will get added to your cart.


### KASHIF (User behaviour - continuing):

Once a user is finished reserving items they can go to my cart which will have all them items from the different locations that you wish to reserve. Here you have the chance to increase or decrease the quantity of each item. And if you change your mind you can also remove the item you previously selected. Once you are satisfied with your selection you can click save reservation. Now that a user has made a reservation they can come to my reservations page which will display all the reservations they have currently and made in the past. For whatever reason if a user after making a reservation changes their mind and wish to cancel a reservation. They can click on the cancel button and this will remove their reservation from the reservations page also it will update the quantity of item. So previously [item] had [x] quantity. Now that I cancel the reservation the quantity comes back to the original amount of [x]. At the same it will notify the donor with twilio sms message on the cancelled reservation.


### KASHIF (Wrap up):
That was our application for food sharing. For our tech stack we used Node, Express for backend, PostgreSQL in db and React for frontend. We also used Twilio and Google map apis. Some of the features we would like to expand on is allowing a pickup / drop-off location with drop-off time closer to individuals. Also, we would like to expand our donation feature to incorporate individuals who would like to share their food.

Thank you everyone for watching. If you have any questions feel free to join us in our breakout room.
 


