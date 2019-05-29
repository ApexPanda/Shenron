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

  // app.get("/test2", function (req, res) {
  //   db.User.findAll({
  //     where: {
  //       role: "Sitter"
  //     }
  //   })
  //     .then(users => {
  //       res.render("test", {
  //         users
  //       });
  //     })
  //     .catch(err => console.log(err))
  // });

  // example of proper url for this query: http://localhost:3000/profiles?id=4
  app.get("/userProfile", function (req, res) {
    console.log(req.query);
    console.log(req.query.id);
    var users = db.User.findAll({
      where: {
        id: req.query.id
      }
    });

    var pets = db.Pet.findAll({
      where: {
        // eslint-disable-next-line camelcase
        owner_id: req.query.id
      }
    });

    var reviews = db.Review.findAll({
      where: {
        // eslint-disable-next-line camelcase
        owner_id: req.query.id
      }
    });

    Promise
      .all([users, pets, reviews])
      .then(function (responses) {
        console.log("**********COMPLETE RESULTS****************");
        console.log(responses[0]); // user profile
        console.log(responses[1]); // all reports
        console.log(responses[2]); // report details
        res.render("userProfile", {
          users: responses[0],
          pets: responses[1],
          reviews: responses[2],
        });

      })
      .catch(function (err) {
        console.log("**********ERROR RESULT****************");
        console.log(err);
      });


  });

  app.get("/profileResults", function (req, res) {
    console.log(req.query);
    console.log(req.query.role);
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
      .then(function (users) {
        res.render("results", { users: users });
      })
      .catch(function (err) {
        console.log(err);
      });
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