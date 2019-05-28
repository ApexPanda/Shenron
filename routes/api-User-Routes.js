/* eslint-disable camelcase */
var db = require("../models");
// var connection = require("../config/connection.js");

var bcrypt = require("bcrypt");
var saltRounds = 10;
var plainTextPassword1 = "DFGh5546*%^_90";

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
    console.log(req.params.id);
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
    console.log(req.body);
    bcrypt.hash(plainTextPassword1, saltRounds)
    .then(hash => {
      console.log(`Hash: ${hash}`);
    })
    db.User.create(req.body).then(function (dbUser) {
      res.json(dbUser);
      console.log(dbUser);
    });
  });


  
    

  // I don't think we need to delete an ID so commented this out 
  // // Delete a user by id
  // app.delete("/api/users/:id", function (req, res) {
  //   db.User.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function (dbUser) {
  //     res.json(dbUser);
  //   });
  // });
};