const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const key = require("../../connection/config");

// Import User Model
const User = require("../../models/User");



// @type    POST
// @route   /api/auth/register
// @desc    Route for registeration of users
// @access  PUBLIC
router.post("/register", (req, res) => {
  User.findOne(
    {
      email: req.body.email,
    },
    (err, vaildEmail) => {
      if (err) {
        console.log(err);
      }
      if (vaildEmail) {
        res.status(400).json({
          msg: "Email is currently in use",
        });
      } else {
        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
          gender: req.body.gender,
        });

        if (req.body.gender == "Male") {
          newUser.profilepic =
            "https://cdn4.iconfinder.com/data/icons/avatar-circle-1-1/72/39-512.png";
        } else {
          newUser.profilepic =
            "https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png";
        }

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            console.log(hash);
            newUser.password = hash;
            newUser.save((err, user) => {
              if (err) {
                console.log(err);
              } else res.status(200).json(user);
            });
          });
        });
      }
    }
  );
});

// @type    POST
// @route   /api/auth/register
// @desc    Route for login of users
// @access  PUBLIC
router.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne(
    {
      email: email,
    },
    (err, ExistEmail) => {
      if (!ExistEmail) {
        return res.status(404).json({
          msg: "User not Found with this email",
        });
      } else {
        bcrypt.compare(password, ExistEmail.password, (err, isCorrect) => {
          if (isCorrect) {
            // res.json({
            //   msg: "User is Authenticated",
            // });
            const payload = {
              id: ExistEmail.id,
              name: ExistEmail.name,
              email: ExistEmail.email,
            };
            //User Payload adn create token for user
            jwt.sign(
              payload,
              key.tokenSecret,
              { expiresIn: 3600 },
              (err, token) => {
                if (err) throw err;
                // res.json({
                //   success: "true",
                //   token: "Bearer " + token
                // })
                res.cookie("jwt", token).json({
                  msg: "Authorization",
                });
              }
            );
          } else {
            res.status(400).json({
              msg: "Password is not corrected",
            });
            console.log(err);
          }
        });
      }
    }
  );
});

// @type    GET
// @route   /api/auth/lgout
// @desc    logout User
// @access  PRIVATE
router.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/")
});

// @type    GET
// @route   /api/auth/profile
// @desc    Route for user profile
// @access  PRIVATE

router.get(
  "/profile",
  passport.authenticate("jwt", {
    session: false,
  }),
  (req, res) => {
    console.log(req);
    res.json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email,
      profilepic: req.user.profilepic,
    });
  }
);

module.exports = router;