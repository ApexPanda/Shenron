var express = require("express");
var router = express.Router();
var db = require("../models");

// login route
router.post("/api/login", function (req, res) {
  var email = req.body.email;
  var password = req.body.password;

  console.log("\nlogin details: " + email + ", " + password + "\n");

  if (!email || !password) {
    res.redirect("/");
  } else {

    db.User.findAll({
      where: {
        email: email
      }
    }).then(function (dbUser) {
      console.log("dbUserPassword :", dbUser[0].password);
      // if (dbUser[0].password === password) {
      //     req.sessions("userId", dbUser[0].id);
      // }
      res.send({
        "code": 200,
        "success": "Login Successful"
      });

    });
  }

});

module.exports = router;
