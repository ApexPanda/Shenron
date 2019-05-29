var connection = require("../config/connection.js");

var db = require("../models");
// var exports = module.exports = {};

/* eslint-disable prettier/prettier */

// register route
exports.register = function (req, res) {
  console.log("req", req.body);
  // should add date as current time 
  var today = new Date();
  // object for the user 
  var users = {
    "first_name": req.body.first_name,
    "last_name": req.body.last_name,
    "service_provider": req.body.service_provider,
    "pet_owner": req.body.pet_owner,
    "role": req.body.role,
    "email": req.body.email,
    "password": req.body.password,
    "image": req.body.image,
    "about_me": req.body.about_me,
    "location": req.body.location,
    "created": today,
    "modified": today
  };
  // query to insert the new user into the table 
  RTCPeerConnection.query("INSERT INTO users SET ?", users, function (error, results, fields) {
    // 400 if failed
    if (error) {
      console.log("Error ocurred", error);
      res.send({
        "code": 400,
        "failed": "Registration error occured"
      });
      // 200 if successful
    } else {
      console.log("The solution is: ", results);
      res.send({
        "code": 200,
        "success": "User registered successfully"
      });
    }
    console.log(fields);
  });
};

// login route 
exports.login = function (req, res) {
  // stores email and password to login
  var email = req.body.email;
  var password = req.body.password;
  console.log("\n\nlogin details: " + email + ", " + password);
  
  // query to find that user
  connection.query("SELECT * FROM users WHERE email = ?", [email],
    function (error, results) {
      // 400 if failed
      if (error) {
        console.log("Error ocurred", error);
        res.send({
          "code": 400,
          "failed": "Login error ocurred"
        });
      } else {
        console.log("The solution is: ", results);
        // checks if password entered is equal to the password in the db
        if (results.password === password) {
          console.log("\npassword: " + password + "\n");
          // 200 if successful
          res.send({
            "code": 200,
            "success": "Login Successful"
          });
        }
      }

    });

};