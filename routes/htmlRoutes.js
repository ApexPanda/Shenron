var db = require("../models");

module.exports = function (app) {
  // Load index page

  app.get("/", function (req, res) {
    // This will load title and description for each page separately=================================
    res.locals.metaTags = {
      title: "Fur Butlr",
      description: "A place where pet owners can find all their needs in one place!",
      keywords: "pet grooming, pet sitting, pet walking, veterinarian services, kennel services, pet trainers, pet friendly parks",
      bg: "index"
    };
    res.render("index", {
      layout: "main"
    });
  });

  app.get("/signUp", function (req, res) {
    // This will load title and description for each page separately=================================
    res.locals.metaTags = {
      title: "Sign Up for Fur Butlr",
      description: "A place where pet owners can find all their needs in one place!",
      keywords: "pet grooming, pet sitting, pet walking, veterinarian services, kennel services, pet trainers, pet friendly parks",
      bg: "sign-up"
    };
    res.render("signUp", {
      layout: "main"
    });
  });

  // app.get("/test", (req, res) =>
  //   db.User.findAll({})
  //     .then(users => {
  //       res.render("test", {
  //         users
  //       });
  //     })
  //     .catch(err => console.log(err)));

  app.get("/test2", function (req, res) {
    db.User.findAll({
      where: {
        role: "Sitter"
      }
    })
      .then(users => {
        res.render("test", {
          users
        });
      })
      .catch(err => console.log(err))
  });

  // example of proper url for this query: http://localhost:3000/profiles?id=4
  app.get("/userProfile", function (req, res) {
    res.locals.metaTags = {
      title: "Your Profile",
      description: "A place where pet owners can find all their needs in one place!",
      keywords: "pet grooming, pet sitting, pet walking, veterinarian services, kennel services, pet trainers, pet friendly parks",
      bg: "user-profile"
    };
    console.log(req.query)
    console.log(req.query.id)
    db.User.findAll({
      where: {
        id: req.query.id
      }
    })
      .then(users => {
        res.render("userProfile", {
          users
        });
      })
      .catch(err => console.log(err))
  });

  app.get("/profileResults", function (req, res) {
    console.log(req.query)
    console.log(req.query.role)
    res.locals.metaTags = {
      title: "Matches for you!",
      description: "A place where pet owners can find all their needs in one place!",
      keywords: "pet grooming, pet sitting, pet walking, veterinarian services, kennel services, pet trainers, pet friendly parks",
      bg: "results"
    };
    db.User.findAll({
      where: {
        role: req.query.role
      }
    })
      .then(users => {
        res.render("results", {
          users
        });
      })
      .catch(err => console.log(err))
  });



  app.get("/results", function (req, res) {
    // This will load title and description for each page separately=================================
    res.locals.metaTags = {
      title: "Matches for you!",
      description: "A place where pet owners can find all their needs in one place!",
      keywords: "pet grooming, pet sitting, pet walking, veterinarian services, kennel services, pet trainers, pet friendly parks",
      bg: "results"
    };
    res.render("results", {
      layout: "main"

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

  app.get("/signup", function (req, res) {
    res.render("signUp", {});
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};