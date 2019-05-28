require("dotenv").config();
var express = require("express");
var app = express();
var helmet = require("helmet");
var exphbs = require("express-handlebars");
var session = require("express-session");

var PORT = process.env.PORT || 3000;
var db = require("./models");
var loginRouter = require("./routes/userLoginRoutes");

// var login = require("./routes/loginRoutes");

// Middleware
app.use(helmet());
app.use(express.urlencoded({
  extended: true
})
);
app.use(express.json());
app.use(express.static("public"));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(session({
  secret: "session secret",
  resave: false,
  saveUninitialized: false,
}));

app.use("/", loginRouter); // =========================== wont work if url is "/api/login"

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// var router = express.Router();

// test route
// router.get("/", function (req, res) {
//   res.json({
//     message: "Welcome to our upload module apis"
//   });
// });

// route to handle user registration
// router.post("/register", login.register);
// router.post("/login", login.login);
// app.use("/api", router);
// app.listen(5000);


// Routes
require("./routes/api-User-Routes")(app);
// require("./routes/api-Pet-Routes")(app);
require("./routes/htmlRoutes")(app);

var syncOptions = {
  force: false
};

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "development") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function () {
  app.listen(PORT, function () {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
