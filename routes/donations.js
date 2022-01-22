/*
 * All routes for Donations are defined here
 * Since this file is loaded in server.js into /donations,
 *   these routes are mounted onto /donations
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const { redirect } = require('express/lib/response');
const router  = express.Router();

module.exports = (db) => {

  //(shows all donations)
  router.get("/", (request, response) => {
    db.query(`SELECT * FROM donations`).then(({ rows: donations }) => {
      response.json(
        donations.reduce(
          (previous, current) => ({ ...previous, [current.id]: current }),
          {}
        )
      );
    });
  });

  //(shows user their own donations)
  router.get("/:id", (request, response) => {
    db.query(`SELECT * FROM donations inner join donation_items on donations.id=donation_id where user_id=$1::integer`, [Number(request.params.id)]).then(({ rows: donations }) => {
      response.json(
        donations.reduce(
          (previous, current) => ({ ...previous, [current.id]: current }),
          {}
        )
      );
    });
  });

  //(shows donations in a specific location)
  router.get("/search/:location", (request, response) => {
    db.query(`SELECT * FROM donations INNER JOIN users ON users.ID=user_id where location like $1::text`, ['%' + request.params.location + '%']).then(({ rows: donations }) => {
      response.json(
        donations.reduce(
          (previous, current) => ({ ...previous, [current.id]: current }),
          {}
        )
      );
    });
  });







  //(saves new donations)
  router.post("/:id/cancel", (request, response) => {
    if (process.env.TEST_ERROR) {
      setTimeout(() => response.status(500).json({}), 1000);
      return;
    }
    const { val1, val2 } = request.body.donations;
    db.query(
      `
      WITH inserted_id AS (INSERT INTO donations (user_id, donation_date, status) values ($1, Now(), 'Pick-Up', 0) RETURNING id)
                        INSERT INTO donation_items (donation_id, menu_item_id, quantity) VALUES ${val} RETURNING (select id from inserted_id)
    `,
      [val1, val2, Number(request.params.id)]
    )
      .then(() => {
        setTimeout(() => {
          response.status(204).json({});
          //updateAppointment(Number(request.params.id), request.body.donations);
        }, 1000);
      })
      .catch(error => console.log(error));
  });

  
  //(Adds a donations)
  router.post("/new", (request, response) => {
    if (process.env.TEST_ERROR) {
      setTimeout(() => response.status(500).json({}), 1000);
      return;
    }
    console.log(request.body);
    const { title, foodType, freshness, description, quantity } = request.body;
    //console.log(title, foodType, description, freshness, quantity);
    db.query(
      `
      WITH inserted_id AS (INSERT INTO donations (user_id, donation_date, status) values ($1, Now(), 'Pick-Up') RETURNING id)
                        INSERT INTO donation_items (donation_id, name, food_type, description, image, freshness, quantity, leftover)
                        VALUES ((select id from inserted_id), $2, $3, $4, $5, $6, $7, $7) RETURNING (select id from inserted_id)
    `,
      [2, title, foodType, description, '/image', freshness, quantity]
    )
      .then((result) => {
        console.log("DB RESULT", result);
        setTimeout(() => {
          response.status(204).json('Record stored in DB.');
        }, 1000);
      })
      .catch(error => console.log(error));
  });



  //(cancels a donations)
  router.post("/:id/cancel", (request, response) => {
    if (process.env.TEST_ERROR) {
      setTimeout(() => response.status(500).json({}), 1000);
      return;
    }
    db.query(
      `UPDATE donations SET status = 'Cancel' where id=$1)`,
      [Number(request.params.id)]
    )
      .then(() => {
        setTimeout(() => {
          response.status(204).json({});
        }, 1000);
      })
      .catch(error => console.log(error));
  });


  router.post("/:id/edit", (request, response) => {
    if (process.env.TEST_ERROR) {
      setTimeout(() => response.status(500).json({}), 1000);
      return;
    }
    const { val1, val2 } = request.body;
    db.query(
      `UPDATE donations (user_id, donation_date, status) values ($1, Now(), 'Pick-Up', 0) RETURNING id)
                        INSERT INTO donation_items (donation_id, menu_item_id, quantity) VALUES ${val} RETURNING (select id from inserted_id)
    `,
      [val1, val2, Number(request.params.id)]
    )
      .then(() => {
        setTimeout(() => {
          response.status(204).json({});
          //updateAppointment(Number(request.params.id), request.body.donations);
        }, 1000);
      })
      .catch(error => console.log(error));
  });

  return router;
};
 