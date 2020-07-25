const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const volleyball = require("volleyball");
var cookieParser = require('cookie-parser')
const app = express();

//Sub Routes
const auth = require("./routes/api/auth");
const questions = require("./routes/api/questions");
const profile = require("./routes/api/profile");


//Middleware for bodyparser
app.use(cookieParser())
app.use(bodyparser.json());
app.use(
  bodyparser.urlencoded({
    extended: true,
  })
);
app.use(volleyball);

//MongoDB Configuration
const db = require("./connection/config");
const passport = require("passport");

//Connect to MongoDB
mongoose.connect(
  db.mongoURL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("MongoDB connected Successfully");
  }
);

app.use(passport.initialize());

require("./stratagies/jwtStrategy")(passport);

//Actual Routes
app.use("/api/auth", auth);
app.use("/api/auth", questions);
app.use("/api/profile", profile);

const PORT = 5000 || process.env.PORT

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
