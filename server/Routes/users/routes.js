var Router = require("express").Router();

var { createUser } = require("../../Controllers/users/auth");

Router.post("/signup", (req, res) => {
  createUser(req, res);
});

module.exports = Router;
