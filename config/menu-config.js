const fs = require("fs");

const menu_title_class = require("../models/menu-title-class");
const menu_link_class = require("../models/menu-link-class");
const menu_description_class = require("../models/menu-description-class");
const menu_intertitle_class = require("../models/menu-intertitle-class");

const menu_config = {};

menu_config.list = [new menu_title_class("LES PATRIOTES"), new menu_link_class("Introduction", "les_patriotes_introduction"), new menu_title_class("CAUSES"), new menu_link_class("Des rebellions", "causes_des_rebellions"), new menu_intertitle_class("Cause de la bataille"), new menu_intertitle_class("Crise agricole"), new menu_link_class("Hommage aux morts", "causes_hommage_aux_morts")];
menu_config.pages = {};

menu_config.pages = {
  les_patriotes_introduction: fs.readFileSync(__dirname + "/txt/Les-Patriotes-Introduction.txt","utf8"),
  causes_des_rebellions: fs.readFileSync(__dirname + "/txt/Causes-Des-Rebellions.txt", "utf-8"),
};

module.exports = menu_config;
