/* eslint-disable camelcase */
var db = require("../models");
// var connection = require("../config/connection.js");

module.exports = function (app) {
  // Get all pets
  app.get("/api/pets", function (req, res) {
    db.Pet.findAll({}).then(function (dbPet) {
      res.json(dbPet);
    });
  });

  // Get pets based on owner id
  app.get("/api/pets/:owner_id", function (req, res) {
    console.log(req.params.ownerid);
    db.Pet.findAll({
      where: {
        owner_id: req.params.owner_id
      }
    }).then(function (dbPet) {
      res.json(dbPet);
    });
  });

  // Create a new pet
  app.post("/api/pets", function (req, res) {
    db.Pet.create(req.body).then(function (dbPet) {
      res.json(dbPet);
    });
  });
};