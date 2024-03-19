var express = require("express");

var router = express.Router();

var passport = require("passport");
var GoogleStrategy = require("passport-google-oidc");
var db = require("../db");

router.get("/login", function (req, res, next) {
  res.render("login");
});
router.get("/login/federated/google", passport.authenticate("google"));
module.exports = router;
