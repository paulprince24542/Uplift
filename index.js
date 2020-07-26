const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const volleyball = require("volleyball");
const cookieParser = require("cookie-parser");
const path = require("path");
const app = express();

//Sub Routes
const auth = require("./routes/api/auth");
const questions = require("./routes/api/questions");
const profile = require("./routes/api/profile");

//Middleware for bodyparser
app.use(cookieParser());
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
const Profile = require("./models/Profile");

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

//Set the view engine to ejs
app.set("view engine", "ejs");

//Actual Routes
// app.use(csrfProtection);
app.use("/api/auth", auth);
app.use("/api/auth", questions);
app.use("/api/profile", profile);

//Serving Static Files
app.use("/public", express.static(path.join(__dirname, "public")));

//Page Routes
app.get("/", (req, res) => {
  res.render("pages/home");
});

app.get("/login", (req, res) => {
  res.render("pages/login");
});

app.get("/register", (req, res) => {
  res.render("pages/register");
});

app.get("/profiles", (req, res) => {
  res.render("pages/profiles");
});

app.get(
  "/dashboard",
  passport.authenticate("jwt", {
    session: false,
  }),
  (req, res) => {
    Profile.findOne(
      {
        user: req.user.id,
      },
      (err, profile) => {
        console.log(profile);
        const company = profile; //For company in profile
        const profileLength = profile; //for length of workrole array in profile
        const title = profile; //Title or role in profile
        const school = profile
        const degree = profile
        res.render("pages/dashboard", {
          profileAvatar: req.user.profilepic,
          userName: req.user.name,
          company: company,
          title: title,
          profileLength: profileLength,
          school: school,
          degree:degree
        });
      }
    );
  }
);

app.get(
  "/create-profile",
  passport.authenticate("jwt", {
    session: false,
  }),
  (req, res) => { }
);

app.get(
  "/edit-profile",
  passport.authenticate("jwt", {
    session: false,
  }),
  (req, res) => {
    Profile.findOne(
      {
        user: req.user.id,
      },
      (err, editprofile) => {
        res.render("pages/edit-profile", {
          profileAvatar: req.user.profilepic,
          username: editprofile.username,
          company:editprofile.workrole[0].company,
          website:editprofile.website,
          details:editprofile.workrole[0].details,
          facebook:editprofile.social.facebook,
          youtube:editprofile.social.youtube,
          instagram:editprofile.social.instagram,
        });
      }
    );
  }
);

const PORT = 5000 || process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
