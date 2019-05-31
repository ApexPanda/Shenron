/* eslint-disable camelcase */
var db = require("../models");
// var connection = require("../config/connection.js");

var bcrypt = require("bcrypt");
var saltRounds = 10;


module.exports = function (app) {
  // Get all users
  app.get("/api/users", function (req, res) {
    db.User.findAll({}).then(function (dbUser) {
      res.json(dbUser);
    });
  });

  // Get service users
  app.get("/api/users/service", function (req, res) {
    db.User.findAll({
      where: {
        service_provider: 1
      }
    }).then(function (dbUser) {
      res.json(dbUser);
    });
  });

  // Get pet owners users
  app.get("/api/users/owners", function (req, res) {
    db.User.findAll({
      where: {
        pet_owner: 1
      }
    }).then(function (dbUser) {
      res.json(dbUser);
    });
  });

  // Get one user
  app.get("/api/users/:id", function (req, res) {
    db.User.findAll({
      where: {
        id: req.params.id
      }
    }).then(function (dbUser) {
      res.json(dbUser);
    });
  });

  // Create a new user
  app.post("/api/users", function (req, res) {
    var password = req.body.password;
    bcrypt.hash(password, saltRounds)
      .then(function (hash) {
        req.body.password = hash;
        db.User.create(req.body).then(function (dbUser) {
          res.json(dbUser);
        });

      });
    // db.User.create(req.body).then(function (dbUser) {
    //   res.json(dbUser);
    // });
  });

  // update user stats
  app.put("api/users/update/stats/:id", function (req, res) {
    console.log(res);
    console.log(req);
    db.User.update({
      first_name: req.body.first_name
    }, {
        where: {
          id: req.params.id
        },
        returning: true,
        plain: true
      })
      .then(function (dbUser) {
        res.json(dbUser);
      });
  });

};
