var db = require("../models");

module.exports = function (app) {
  // Load index page

  app.get("/", function (req, res) {
    db.Example.findAll({}).then(function (dbExamples) {
      // This will load title and description for each page separately=================================
      res.locals.metaTags = {
        title: "Fur Butlr",
        description: "A place where pet owners can find all thier needs in one place!",
        keywords: "pet grooming, pet sitting, pet walking"
      };
      res.render("index", {
        layout: "main",
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function (req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function (
      dbExample
    ) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
