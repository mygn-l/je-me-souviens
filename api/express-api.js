const express = require("express");

const router = express.Router();

const battle_config = require("../config/battle-config");

router.get("/", function (req, res) {
  res.render("pages/index.ejs");
});

router.get("/info", function (req, res) {
  res.render("pages/info.ejs");
});

router.get("/info/intro", function (req, res) {
  res.render("pages/info/intro.ejs");
});

router.get("/info/reforms", function (req, res) {
  res.render("pages/info/reforms.ejs");
});

router.get("/info/battle/:name", function (req, res) {
  if (battle_config[req.body.name] !== undefined) {
    res.send(JSON.stringify(battle_config[req.body.name]));
  }
});

router.get("/about", function (req, res) {
  res.render("pages/about.ejs");
});

router.get(function (req, res) {
  res.render("pages/default.ejs");
});

module.exports = router;
