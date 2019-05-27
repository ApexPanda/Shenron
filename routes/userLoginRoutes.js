var express = require("express");
var router = express.Router();
var db = require("../models");

// login route
router.post("/api/login", function (req, res) {
  var email = req.body.email;
  var password = req.body.password;

  console.log("\nlogin details: " + email + ", " + password + "\n");

  db.User.findAll({
    where: {
      email: email
    }
  }).then(function (dbUser) {
    console.log("dbUserPassword :", dbUser[0].password);
    if (dbUser[0].password === password) {
      req.sessions("userId", dbUser.id);
    }
    res.send({
      "code": 200,
      "success": "Login Successful"
    });
  });


  // .then(function (error, results, fields) {
  //   if (error) {
  //     console.log("Error Ocurred: ", error);
  //     res.send({
  //       "code": 400,
  //       "failed": "Login error ocurred"
  //     });
  //   } else {
  //     console.log("The solution is: ", results);
  //     // checks if password entered is equal to the password in the db
  //     if (results.password === password) {
  //       // 200 if successful
  //       res.send({
  //         "code": 200,
  //         "success": "Login Successful"
  //       });
  //     }
  //   }
  // console.log("fields: ", fields);
  // });

});

module.exports = router;
