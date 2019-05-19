/* eslint-disable prettier/prettier */
exports.register = function (req, res) {
  console.log("req", req.body);
  var today = new Date();
  var users = {
    "first_name": req.body.first_name,
    "last_name": req.body.last_name,
    "role": req.body.role,
    "email": req.body.email,
    "password": req.body.password,
    //HASHBYTES('SHA2_512', @pPassword)
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
        if (results[0].password === password) {
          res.send({
            "code": 200,
            "success": "Login Successful"
          });
        }
      }
      console.log(fields);
    });
};