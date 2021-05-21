const fs = require("fs");

const menu_title_class = require("../models/menu-title-class");
const menu_link_class = require("../models/menu-link-class");
const menu_description_class = require("../models/menu-description-class");
const menu_intertitle_class = require("../models/menu-intertitle-class");

const menu_config = {};

menu_config.list = [
  new menu_title_class("LES PATRIOTES"),
  new menu_link_class("Introduction", "les_patriotes_introduction"),
  new menu_intertitle_class("Introduction", "les_patriotes_introduction/Introduction"),
  new menu_title_class("REVOLUTION PATRIOTES"),
  new menu_link_class("Causes", "causes"),
  new menu_intertitle_class("Crise agricole", "causes/Crise agricole"),
  new menu_link_class("Batailles", "batailles"),
  new menu_intertitle_class("St-Denis", "batailles/St-Denis"),
  new menu_intertitle_class("St-Charles", "batailles/St-Charles"),
  new menu_link_class("Hommage aux morts", "causes_hommage_aux_morts"),
];

menu_config.pages = {
  les_patriotes_introduction: {
    Introduction: fs.readFileSync(__dirname + "/txt/Intro.txt", "utf8"),
  },
  causes: {
    "Crise agricole": fs.readFileSync(__dirname + "/txt/Crise-agricole.txt", "utf8"),
  },
  batailles: {
    "St-Denis": fs.readFileSync(__dirname + "/txt/St-Denis.txt", "utf8"),
    "St-Charles": fs.readFileSync(__dirname + "/txt/St-Charles.txt", "utf8"),
  },
};

module.exports = menu_config;
