var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
<<<<<<< HEAD
  password: "password",
=======
  password: "root",
>>>>>>> f3ed998da0af91b822edf7e207c91c3837335003
  database: "fur_db"
});

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
