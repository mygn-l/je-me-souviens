const express = require("express");

const router = express.Router();

router.get("/", function (req, res) {
  res.render("pages/index.ejs");
});

router.get("/info", function (req, res) {
  res.render("pages/info.ejs");
});

router.get("/about", function (req, res) {
  res.render("pages/about.ejs");
});

router.get(function (req, res) {
  res.render("pages/default.ejs");
});

module.exports = router;
