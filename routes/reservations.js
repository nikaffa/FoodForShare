/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  
  

  //(Adds a donations)
  router.post("/new", (request, response) => {
    if (process.env.TEST_ERROR) {
      setTimeout(() => response.status(500).json({}), 1000);
      return;
    }
    console.log(request.body)
    const { title, foodtype, freshness, description, quantity, address } = request.body;
    console.log(title, foodtype, description, freshness, quantity)
    db.query(
      `
      WITH inserted_id AS (INSERT INTO reservations (user_id, donation_date, status) values ($1, Now(), 'Pick-Up') RETURNING id)
                        INSERT INTO donation_items (donation_id, name, food_type, description, image, freshness, quantity, leftover)
                        VALUES ((select id from inserted_id), $2, $3, $4, $5, $6, $7, $7) RETURNING (select id from inserted_id)
    `,
      [2, title, foodtype, description, '/image', freshness, quantity]
    )
      .then(() => {
        setTimeout(() => {
          response.status(204).json('Record stored in DB.');
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
    db.query(`SELECT * FROM reservations where user_id=$1::integer`, [Number(request.params.id)]).then(({ rows: reservations }) => {
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
 