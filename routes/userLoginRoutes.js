var express = require("express");
var router = express.Router();
var db = require("../models");


//=======================================================================================

var redirectLogin = function (req, res, next) {
  console.log("REDIRECT SESSION: ", req.session);
  if (!req.session.userId) {
    res.redirect("/signUp");
  } else {
    next();
  }
};

router.get("/", function (req, res) {
  console.log("\n\nROUTER.GET SESSION: ", req.session);
  console.log("ROUTER.GET SESSION ID: ", req.session.id);
  console.log("ROUTER.GET userId: ", req.session.userId); 

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

router.get("/signUp", function (req, res) {
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

router.get("/userProfile", function (req, res) {
  // This will load title and description for each page separately=================================
  res.locals.metaTags = {
    title: "Your Profile",
    description: "A place where pet owners can find all their needs in one place!",
    keywords: "pet grooming, pet sitting, pet walking, veterinarian services, kennel services, pet trainers, pet friendly parks",
    bg: "user-profile"
  };
  res.render("userProfile", {
    layout: "main"
  });
});

// router.get("/profileResults", function (req, res) {
//   console.log(req.query);
//   console.log(req.query.role);
//   res.locals.metaTags = {
//     title: "Matches for you!",
//     description: "A place where pet owners can find all their needs in one place!",
//     keywords: "pet grooming, pet sitting, pet walking, veterinarian services, kennel services, pet trainers, pet friendly parks",
//     bg: "results"
//   };
//   db.User.findAll({
//     where: {
//       role: req.query.role
//     }
//   })
//     .then(function (users) {
//       res.render("results", { users: users });
//     })
//     .catch(function (err) {
//       console.log(err);
//     });
// });

router.get("/results", function (req, res) {
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

router.get("/dashboard", redirectLogin, function (req, res) {
  // This will load title and description for each page separately=================================
  res.locals.metaTags = {
    title: "Your profile",
    description: "A place where pet owners can find all their needs in one place!",
    keywords: "pet grooming, pet sitting, pet walking, veterinarian services, kennel services, pet trainers, pet friendly parks",
    bg: "dashboard"
  };
  res.render("dashboard", {
    layout: "main"
  });
  console.log("DASHBOARD SESSION: ", req.session);
  console.log("DASHBOARD userId: ", req.session.userId);
// Here is where to push info to front-end=================================================
// or may have to make a post route for dashboard=========================================
});

// Render 404 page for any unmatched routes
router.get("*", function (req, res) {
  res.render("404");
});





//========================================================================================

// login route
router.post("/api/login", function (req, res) {
  var email = req.body.email;
  var password = req.body.password;

  console.log("\nlogin details: " + email + ", " + password + "\n");

  if (!email || !password) {
    console.log("No email/Pass");
    res.end();
  } else {
    db.User.findAll({
      where: {
        email: email
      }
      // Somewhere in here is where we need to perform encryption =========================
    }).then(function (dbUser) {
      if (dbUser && dbUser[0].password === password) {
        console.log("dbUserPassword :", dbUser[0].password);
        console.log("PASSWORD MATCHES");
        req.session.userId = dbUser[0].id;
        console.log("SESSION Id: ", req.session.userId);
        res.send({ // Need to send message with userId to plug into handlebars and change login button/ hide sign-up button
          "code": 200,
          "success": "Login Successful"
        });
      } else {
        console.log("PASSWORD DOES NOT MATCH");
        res.end();
      }

    });
  }

});

// Logout route
router.post("/api/logout", function (req, res) {
  req.session.destroy(function (err) {
    if (err) {
      return res.redirect("/dashboard");
    }
    res.clearCookie("connect.sid");
    res.redirect("/");
  });
  console.log("LOGGED OUT");
});

module.exports = router;