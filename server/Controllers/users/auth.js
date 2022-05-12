//Models
var User = require("../../models/user");

async function createUser(req, res) {
  try {
    var data = req.body;
    var findUser = await User.findOne({
      email: req.body.email,
    });
    if (findUser) {
    } else {
      var newUser = await User.create({
        email: data.email,
        password: data.password,
      });
      if (newUser) {
        res.status(200).json({
          msg: "User Created",
        });
      } else {
        res.status(400).json({
          msg: "failed User Creation",
        });
      }
    }
  } catch (err) {
    res.status(401).json({
      msg: "Internal Server Error",
      err: err,
    });
  }
}

module.exports.createUser = createUser;
