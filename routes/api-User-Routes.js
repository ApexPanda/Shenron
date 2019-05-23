var db = require("../models");
// var connection = require("../config/connection.js");

module.exports = function (app) {
  // Get all users
  app.get("/api/users", function (req, res) {
    db.User.findAll({}).then(function (dbUser) {
      res.json(dbUser);
    });
  });

  // Get service users
  app.get("/api/users", function (req, res) {
    db.User.findAll({
      where: {
        ex: 1
      }
    }).then(function (dbUser) {
      res.json(dbUser);
    });
  });

  // Get pet owners users
  app.get("/api/users", function (req, res) {
    db.User.findAll({
      where: {
        ex: 1
      }
    }).then(function (dbUser) {
      res.json(dbUser);
    });
  });

  // Get one user
  app.get("/api/users:id", function (req, res) {
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
    db.User.create(req.body).then(function (dbUser) {
      res.json(dbUser);
    });
  });

  // Delete a user by id
  app.delete("/api/users/:id", function (req, res) {
    db.User.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbUser) {
      res.json(dbUser);
    });
  });
};