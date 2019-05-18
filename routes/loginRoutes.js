/* eslint-disable prettier/prettier */
exports.register = function (req, res) {
  // console.log("req", req.body);
  var today = new Date();
  var users = {
    "first_name": req.body.first_name,
    "last_name": req.body.last_name,
    "email": req.body.email,
    "password": req.body.password,
    "created": today,
    "modified": today
  };
  RTCPeerConnection.query("INSERT INTO users SET ?", users, function (err, res, fields) {
    if (err) {
      console.log("error ocurred", err);
      res.send({
        "code": 400,
        "failed": "login error occured"
      });
    } else {
      console.log("The solution is: ", results);
      res.send({
        "code": 200,
        "success": "user registered successfully"
      });
    }
  });
};