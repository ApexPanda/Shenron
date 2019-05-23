var connection = require("../config/connection.js");
var exports = module.exports = {};

/* eslint-disable prettier/prettier */
exports.register = function (req, res) {
  console.log("req", req.body);
  var today = new Date();
  var users = {
    "first_name": req.body.first_name,
    "last_name": req.body.last_name,
    "email": req.body.email,
    "password": req.body.password,
    "created": today,
    "modified": today
  };
  RTCPeerConnection.query("INSERT INTO users_table SET ?", users, function (error, results, fields) {
    if (error) {
      console.log("Error ocurred", error);
      res.send({
        "code": 400,
        "failed": "Registration error occured"
      });
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

exports.login = function (req, res) {
  var email = req.body.email;
  var password = req.body.password;
  connection.query("SELECT * FROM users_table WHERE email = ?", [email],
    function (error, results, fields) {
      if (error) {
        console.log("Error ocurred", error);
        res.send({
          "code": 400,
          "failed": "Login error ocurred"
        });
      } else {
        console.log("The solution is: ", results);
        console.log("exports.login > req.body.email: " + email);
        console.log("password: " + password);
        if (results.password === password) {
          res.send({
            "code": 200,
            "success": "Login Successful"
          });
        }
      }
      console.log("fields: " + fields);

    });
};