var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.users_table.findAll({}).then(function(dbUsers) {
      res.render("index", {
        msg: "Welcome!",
        user: dbUsers
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.users_table.findOne({ where: { id: req.params.id } }).then(function(
      dbUser
    ) {
      res.render("user", {
        user: dbUser
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
