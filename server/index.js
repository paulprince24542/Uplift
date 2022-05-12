var express = require("express");
var app = express();

// Postgres Confiiguration
var { sequelize } = require("./config/postgres");

//Models
var User = require("./models/user");

//Routes
var userRoutes = require("./Routes/users/routes");

// Json parsing
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

// Connecting Database
try {
  sequelize.authenticate();
  console.log("Connected established with database");
} catch (err) {
  console.error(err);
}

//Sub Routes
app.use("/api/user", userRoutes);

//Syncing Models
sequelize.sync({
  alter: true,
});

app.listen(8080, () => {
  console.log("Server Intialized");
});
