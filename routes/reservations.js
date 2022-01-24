/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

module.exports = (db) => {

  //(Adds a reservations)
  router.post("/new", (request, response) => {
    if (process.env.TEST_ERROR) {
      setTimeout(() => response.status(500).json({}), 1000);
      return;
    }
    const cart = request.body;
    let val = "";
    let user_id = "2";
    for (const key in cart) {
      const { id, qty } = cart[key];
      console.log(id, qty)
      val += `((select id from inserted_id), ${cart[key].id}, ${cart[key].qty}), `;
    }
    val = val.substring(0, val.length - 2);
    const queryString = `WITH inserted_id AS (INSERT INTO reservations (user_id, reservation_date, status) values (${user_id}, Now(), 'Waiting') RETURNING id)
                         INSERT INTO reservation_items (reservation_id, donation_item_id, quantity)
                         VALUES ${val} RETURNING (select id from inserted_id)`;
    db.query(queryString)
      .then(() => {
        setTimeout(() => {
          response.status(222).json('Record stored in DB.');
        }, 1000);
      })
      .catch(error => console.log(error));
  });

  //(shows user their own reservations)
  router.get("/", (request, response) => {
    db.query(`SELECT * FROM reservations`).then(({ rows: donations }) => {
      response.json(
        donations.reduce(
          (previous, current) => ({ ...previous, [current.id]: current }),
          {}
        )
      );
    });
  });

  //(shows user their own reservations)
  router.get("/:id", (request, response) => {
    db.query(`SELECT *, reservation_id FROM reservations INNER JOIN reservation_items ON reservations.id=reservation_id where reservations.id=$1::integer`, [Number(request.params.id)]).then(({ rows: reservations }) => {
      response.json(
        reservations.reduce(
          (previous, current) => ({ ...previous, [current.id]: current }),
          {}
        )
      );
    });
  });


  return router;
};
 