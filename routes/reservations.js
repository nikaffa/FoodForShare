/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/new", (req, res) => {
    res.redirect("/")
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
 