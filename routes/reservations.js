/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require("express");
const router = express.Router();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

module.exports = (db) => {
  //(Adds a reservations)
  router.post("/new", (request, response) => {
    if (process.env.TEST_ERROR) {
      setTimeout(() => response.status(500).json({}), 1000);
      return;
    }
    const { user, cart } = request.body;
    console.log(request.body);
    let val = "";
    let don = "";
    for (const key in cart) {
      const { id, qty } = cart[key];
      console.log(id, qty);
      val += `((select id from inserted_id), ${cart[key].id}, ${cart[key].qty}), `;
      don += `update donation_Items set leftover=leftover-${qty} where donation_id=${cart[key].donation_id}; `;
    }
    val = val.substring(0, val.length - 2);
    const queryString = `WITH inserted_id AS (INSERT INTO reservations (user_id, reservation_date, status) values (${user}, Now(), 'Waiting') RETURNING id)
                         INSERT INTO reservation_items (reservation_id, donation_item_id, quantity)
                         VALUES ${val} RETURNING (select id from inserted_id); ${don}`;
                         console.log(queryString)
    db.query(queryString)
      .then(() => {
        setTimeout(() => {
          response.status(222).json("Donation stored in DB.");
        }, 1000);
      })
      .catch((error) => console.log(error));
  });

  //(shows user their own reservations)
  router.get("/user/:id", (request, response) => {
    db.query(
      `SELECT reservation_date, name, food_type, description, image, freshness, status, reservation_id, reservation_items.quantity, i_status FROM reservations
              INNER JOIN reservation_items ON reservations.id=reservation_id
              INNER JOIN donation_Items ON donation_Items.id=donation_item_id
              where user_id=$1::integer`,
      [request.params.id]
    ).then(({ rows: reservations }) => {
      response.json(
        reservations.reduce(
          (groups, item) => ({
            ...groups,
            [item.reservation_id]: [
              ...(groups[item.reservation_id] || []),
              item,
            ],
          }),
          {}
        )
      );
    });
  });

  //(shows user their own reservations)
  router.get("/:id", (request, response) => {
    db.query(
      `SELECT reservations.*, reservation_id, donation_item_id, quantity FROM reservations right JOIN reservation_items ON reservations.id=reservation_id where reservations.id=$1::integer`,
      [Number(request.params.id)]
    ).then(({ rows: reservations }) => {
      response.json(
        reservations.map(
          (previous, current) => ({ ...previous, [current.id]: current }),
          {}
        )
      );
    });
  });


  //(shows user their own reservations)
  router.post("/cancel", (request, response) => {
    const {reservation_item_id} = request.body
    console.log(request.body)
    
    console.log(reservation_item_id)
    db.query(
      `update reservation_items set i_status='Cancelled' where id=${reservation_item_id}::integer; 
       update donation_items set leftover=leftover+(select quantity from reservation_items where id=${reservation_item_id}) where id=(select donation_item_id from reservation_items where id=${reservation_item_id})`
    ).then(() => {
      client.messages
        .create({
          body: `Reservations # ${reservation_item_id} cancelled.`,
          from: "+18022558617", //valid Twilio number
          to: "+16478741655",
        })
        .then((message) => console.log(message.sid));
      setTimeout(() => {
        response.status(224).json("Reservation cancelled.");
      }, 1000);
    })
    .catch((error) => console.log(error));
  });


  //(shows user their own reservations)
  router.post("/completed", (request, response) => {
    const {reservation_item_id} = request.body
    console.log(request.body)
    console.log(reservation_item_id)
    db.query(
      `update reservation_items set i_status='Completed' where id=${reservation_item_id}::integer`
    ).then(() => {
      setTimeout(() => {
        response.status(224).json("Reservation cancelled.");
      }, 1000);
    })
    .catch((error) => console.log(error));
  });

  return router;
};
