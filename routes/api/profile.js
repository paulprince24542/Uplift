const router = require("express").Router();
const mongoose = require("mongoose");
const passport = require("passport");

// Import Profile Model
const Profile = require("../../models/Profile");

// Import User Model
const User = require("../../models/User");

// @type    POST
// @route   /api/profile/checProfile
// @desc    Route for user profile check
// @access  PRIVATE
router.get("/checkProfile", passport.authenticate("jwt", {
  session: false
}), (req, res) => {
  Profile.findOne({
    user: req.user.id
  }, (err, profile) => {
    if(profile){
      res.json("true")
    }else{
      res.json("false")
    }
  })
})

// @type    POST
// @route   /api/profile
// @desc    Route for personal user profile
// @access  PRIVATE
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne(
      {
        user: req.user.id,
      },
      (err, profile) => {
        if (err) throw err;
        if (!profile) {
          return res.json({
            profilenotfound: "No profile Found",
          });
        } else {
          res.json(profile);
        }
      }
    );
  }
);

// @type    POST
// @route   /api/profile
// @desc    Route for updating and saving personal user profile
// @access  PRIVATE

router.post(
  "/",
  passport.authenticate("jwt", {
    session: false,
  }),
  (req, res) => {
    const profileValues = {};
    profileValues.user = req.user.id;
    if (req.body.username) profileValues.username = req.body.username;
    if (req.body.website) profileValues.website = req.body.website;
    if (req.body.country) profileValues.country = req.body.country;
    if (req.body.portfolio) profileValues.portfolio = req.body.portfolio;
    if (typeof req.body.languages !== undefined) {
      profileValues.languages = req.body.languages.split(",");
    }
    //Get social links
    profileValues.social = {};
    if (req.body.youtube) profileValues.social.youtube = req.body.youtube;
    if (req.body.facebook) profileValues.social.facebook = req.body.facebook;
    if (req.body.instagram) profileValues.social.instagram = req.body.instagram;

    console.log(profileValues);

    //Database Stuff
    Profile.findOne({ user: req.user.id })
      .then((profile) => {
        if (profile) {
          Profile.findOneAndUpdate(
            { user: req.user.id },
            { $set: profileValues },
            { new: true }
          )
            .then((profile) => res.json(profile))
            .catch((err) => console.log("problem in update" + err));
        } else {
          Profile.findOne({ username: profileValues.username })
            .then((profile) => {
              //Username already exists
              if (profile) {
                res.status(400).json({ username: "Username already exists" });
              }
              //save user
              new Profile(profileValues)
                .save()
                .then((profile) => res.json(profile))
                .catch((err) => console.log(err));
            })
            .catch((err) => console.log(err));
        }
      })
      .catch((err) => console.log("Problem in fetching profile" + err));
  }
);

// @type    POST
// @route   /api/profile
// @desc    Route for getting user based on USERNAME
// @access  PUBLIC
router.get("/:username", (req, res) => {
  Profile.findOne(
    {
      username: req.params.username,
    },
    (err, profile) => {
      if (!profile) {
        res.status(404).json({
          usernotfound: "User not Found",
        });
      }
      res.json(profile);
    }
  ).populate("user", ["name", "profilepic"]);
});

// // @type    POST
// // @route   /api/profile
// // @desc    Route for getting user based on Id
// // @access  PUBLIC
// router.get("/:id", (req, res) => {
//   Profile.findOne({
//     _id: req.params.id
//   }).populate('user', ['name', 'profilepic'])
//     .then(profile => {
//       if (profile) {
//         res.json(profile)
//       } else {
//         res.status(404).json({
//           usernofound: "User Not Found"
//         })
//       }
//     }).catch(err => {
//       console.log("Error in Fetching Profile")
//     })
// });


// @type    POST
// @route   /api/profile/find/everyone
// @desc    Route for getting user profile of  EVERYONE
// @access  PUBLIC
router.get("/find/everyone", (req, res) => {
  Profile.find(
    (err, profiles) => {
      if (!profiles) {
        res.status(404).json({
          usernotfound: "No profile was found",
        });
      }
      res.json(profiles);
    }
  ).populate("user", ["name", "profilepic"]);
});

// @type    DELETE
// @route   /api/profile/
// @desc    Route for deleting user based on ID
// @access  PRIVATE
router.delete('/', passport.authenticate("jwt", {
  session: false
}), (req, res) => {
  Profile.findOne({
    user: req.user.id
  })
  Profile.findOneAndRemove({
    user: req.user.id
  }).then(() => {
    User.findOneAndRemove({
      _id: req.user.id
    }).then(() => {
      res.json({
        success: "delete was a success"
      })
    }).catch(err => {
      console.log(err)
    })
  }).catch(err => {
    console.log(err)
  })
})

// @type    POST
// @route   /api/profile/mywork
// @desc    Route for adding work profile of a person
// @access  PRIVATE

router.post("/workrole", passport.authenticate('jwt', {
  session: false
}), (req, res) => {
  Profile.findOne({
    user: req.user.id
  }).then(profile => {
    if (profile) {
      //assignment
      const newWork = {
        role: req.body.role,
        company: req.body.company,
        country: req.body.country,
        from: req.body.from,
        to: req.body.to,
        current: req.body.current,
        details: req.body.details,
      }
      // profile.workrole.push(newWork);
      profile.workrole.unshift(newWork);
      profile.save().then(profile => {
        res.json(profile)
      }).catch(err => console.log(err))
    } else {

    }
  })
    .catch(err => console.log(err))
})

router.post("/education", passport.authenticate('jwt', {
  session: false
}), (req, res) => {
  Profile.findOne({
    user: req.user.id
  }).then(profile => {
    if (profile) {
      //assignment
      const newWork = {
        school: req.body.school,
        degree: req.body.degree,
        from: req.body.from,
        to: req.body.to,
        current: req.body.current,
      }
      // profile.workrole.push(newWork);
      profile.education.unshift(newWork);
      profile.save().then(profile => {
        res.json(profile)
      }).catch(err => console.log(err))
    } else {

    }
  })
    .catch(err => console.log(err))
})



module.exports = router;
