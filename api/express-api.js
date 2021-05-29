const express = require("express");

const router = express.Router();

const info_config = require("../config/info-config");

const quiz_config = require("../config/quiz-config");

const battle_config = require("../config/battle-config");

router.get("/", function (req, res) {
  res.render("pages/index.ejs");
});

router.get("/info", function (req, res) {
  res.render("pages/patriotes.ejs");
});

router.get("/info/menu", function (req, res) {
  res.send(JSON.stringify(info_config));
});

router.get("/info/battle/:name", function (req, res) {
  if (battle_config[req.params.name] !== undefined) {
    res.send(JSON.stringify(battle_config[req.params.name]));
  }
});

router.get("/games", function (req, res) {
  res.render("pages/games.ejs");
});

router.get("/games/quiz", function (req, res) {
  res.send(JSON.stringify(quiz_config));
});

router.use(function (req, res) {
  res.render("pages/default.ejs");
});

module.exports = router;
