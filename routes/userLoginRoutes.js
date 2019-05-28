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
  } else {
    db.User.findAll({
      where: {
        email: email
      }
      // Somewhere in here is where we need to perform encryption =========================
    }).then(function (dbUser) {
      if (dbUser === true && dbUser[0].password === password) {
        console.log("dbUserPassword :", dbUser[0].password);
        console.log("PASSWORD MATCHES");
        // req.session("userId", dbUser[0].id); // "req.session is not a function" ===============

        // Need to change out login button to user name/image with dropdown for logout, go to profile page, etc.
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

module.exports = router;
