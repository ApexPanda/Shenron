var express = require("express");
var router = express.Router();
var db = require("../models");

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
        console.log("SESSION: ", req.session);
        res.send({
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
