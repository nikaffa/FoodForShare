# FoodForShare
- FoodForShare is a multi-page web application for restaurants and food banks to donate their extra meal and food items to the local community. 
- The idea behind the project is to resolve the food-wasting problem. This is a web platform that works as a bridge between food donors and local charities.
!["Main page"](https://github.com/nikaffa/FoodForShare/blob/main/docs/main_page.png)

## Demo
### User experience
- Users can search donation offers available near them using a map/search bar/geolocation
- By clicking on a place users can see all the offer’s details, reserve the item they want.
!["Search_donation"](https://github.com/nikaffa/FoodForShare/blob/main/docs/search_food.gif)

### Donor/restaurant experience
- Users can donate food by filling out the form that creates the donation offer.
!["Donate_food"](https://github.com/nikaffa/FoodForShare/blob/main/docs/donations.gif)


## Tech Stack
### Back-end
- Node.js
- Express.js
- PostgreSQL

### Front-end
- React.js
- Axios
- Bootstrap
- SASS
- Google map API
- Twilio API

## Setup

1. Install back-end dependencies, reset database and run the server: 
```bash
npm i
npm run db:reset
npm start
```
 - The back-end will be served at `http://localhost:8080/`
2. Install front-end dependencies and run the web server: 
```bash
cd /client
npm i
npm start
```


