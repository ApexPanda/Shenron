var connection = require("../config/connection.js");
var exports = module.exports = {};

/* eslint-disable prettier/prettier */

// register route
exports.register = function (req, res) {
  console.log("req", req.body);
  // shoul add date as current time 
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
<<<<<<< HEAD
=======
  // query to find that user
>>>>>>> bd76887431e77b3be072b90c89620bae53d74d2d
  connection.query("SELECT * FROM users WHERE email = ?", [email],
    function (error, results, fields) {
      // 400 if failed
      if (error) {
        console.log("Error ocurred", error);
        res.send({
          "code": 400,
          "failed": "Login error ocurred"
        });
      } else {
        console.log("The solution is: ", results);
<<<<<<< HEAD
        console.log("exports.login > req.body.email: " + email);
        console.log("password: " + password);
        if (results.password === password) {
=======
        // checks if password entered is equal to the password in the db
        if (results[0].password === password) {
          // 200 if successful
>>>>>>> bd76887431e77b3be072b90c89620bae53d74d2d
          res.send({
            "code": 200,
            "success": "Login Successful"
          });
        }
      }
      console.log("fields: " + fields);

    });
};
