var db = require("../models");

module.exports = function (app) {
  // Get all users
  app.get("/api/users", function (req, res) {
    db.users_table.findAll({}).then(function (dbUsers) {
      res.json(dbUsers);
    });
  });

  // Get service users
  app.get("/api/users", function (req, res) {
    db.users_table.findAll({
      where: {
        ex: 1
      }
    }).then(function (dbUsers) {
      res.json(dbUsers);
    });
  });

  // Get pet owners users
  app.get("/api/users", function (req, res) {
    db.users_table.findAll({
      where: {
        ex: 1
      }
    }).then(function (dbUsers) {
      res.json(dbUsers);
    });
  });

  // Create a new user
  app.post("/api/users", function (req, res) {
    db.users_table.create(req.body).then(function (dbUser) {
      res.json(dbUser);
    });
  });

  // Delete a user by id
  app.delete("/api/users/:id", function (req, res) {
    db.users_table.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbUser) {
      res.json(dbUser);
    });
  });
};