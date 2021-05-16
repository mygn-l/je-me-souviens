const express = require("express");

const router = express.Router();

const menu_config = require("../config/menu-config");

const battle_config = require("../config/battle-config");

router.get("/", function (req, res) {
  res.render("pages/index.ejs");
});

router.get("/info", function (req, res) {
  res.render("pages/info.ejs");
});

router.get("/info/menu", function (req, res) {
  res.send(JSON.stringify(menu_config));
});

router.get("/info/battle/:name", function (req, res) {
  if (battle_config[req.params.name] !== undefined) {
    res.send(JSON.stringify(battle_config[req.params.name]));
  }
});

router.use(function (req, res) {
  res.render("pages/default.ejs");
});

module.exports = router;
