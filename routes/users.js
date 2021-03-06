/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  //Route for
  router.get("/", (req, res) => {
  
    const places = [];
    let loc = {};

    db.query(`SELECT * FROM users`)
      .then(data => {
        const users = data.rows;
        users.forEach(element => {
          loc = {
            "properties": {
              "ID": element.id,
              "NAME": element.name,
              "ADDRESS": element.address,
            },
            "geometry": {
              "type": "Point",
              "coordinates": [element.location.y, element.location.x]
            }
          };
          places.push(loc);
        });
        res.json(places);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });

      
  });

  router.get("/:id", (req, res) => {
    db.query(`SELECT * FROM users where id = ${req.params.id};`)
      .then(data => {
        const users = data.rows;
        res.json({ users });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.get("/login/:id", (req, res) => {
    db.query(`SELECT * FROM users where id = ${req.params.id};`)
      .then(data => {
        const users = data.rows;
        res.json({ users });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });



  return router;
};
