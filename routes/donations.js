/*
 * All routes for Donations are defined here
 * Since this file is loaded in server.js into /donations,
 *   these routes are mounted onto /donations
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

module.exports = (db) => {

  //(shows user their own donations)
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

  router.get("/:id", (request, response) => {
    db.query(`SELECT * FROM donations where user_id=$1::integer`, [Number(request.params.id)]).then(({ rows: donations }) => {
      response.json(
        donations.reduce(
          (previous, current) => ({ ...previous, [current.id]: current }),
          {}
        )
      );
    });
  });


  router.get("/search/:location", (request, response) => {
    db.query(`SELECT * FROM donations INNER JOIN users ON users.ID=user_id where location=$1::text`, [request.params.location]).then(({ rows: donations }) => {
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
    const { val1, val2 } = req.body.donations;
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
          updateAppointment(Number(request.params.id), request.body.donations);
        }, 1000);
      })
      .catch(error => console.log(error));
  });


  router.post("/:id/edit", (request, response) => {
    if (process.env.TEST_ERROR) {
      setTimeout(() => response.status(500).json({}), 1000);
      return;
    }
    const { val1, val2 } = req.body.donations;
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
          updateAppointment(Number(request.params.id), request.body.donations);
        }, 1000);
      })
      .catch(error => console.log(error));
  });





  router.get("/:id/don", (req, res) => {
    let data = {
      "abc restaurant": [
      {
        "name": "Pasta",
        "food_type": "food_type",
        "Description": "Description",
        "any": 1,
        "productId": 86,
        "Freshness": 1,
        "ready_time_seconds": 86,
        "quantity": 1,
        "Leftover": 1
      },
      {
        "name": "Pizza",
        "food_type": "food_type",
        "Description": "Description",
        "any": 1,
        "productId": 86,
        "Freshness": 1,
        "ready_time_seconds": 86,
        "quantity": 1,
        "Leftover": 1
      }
    ]};
    res.send(data)
      //res.json(data);
      
      

  });



  return router;
};
 