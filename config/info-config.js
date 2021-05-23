const fs = require("fs");

const menu_class = require("../models/menu-class");
const page_class = require("../models/page-class");

const menu_config = {};

menu_config.menu = new menu_class.menu();

menu_config.menu.append(new menu_class.title("LES PATRIOTES"));
menu_config.menu.append(new menu_class.link("Introduction", "Introduction"));

menu_config.menu.append(new menu_class.title("LA REVOLUTION PATRIOTE"));
menu_config.menu.append(new menu_class.intertitle("Causes"));
menu_config.menu.append(new menu_class.link("Crise agricole", "Crise agricole"));
menu_config.menu.append(new menu_class.intertitle("Batailles"));
menu_config.menu.append(new menu_class.link("St-Denis", "St-Denis"));
menu_config.menu.append(new menu_class.link("St-Charles", "St-Charles"));
menu_config.menu.append(new menu_class.intertitle("Petites batailles"));
menu_config.menu.append(new menu_class.link("Lacolle", "Lacolle"));
menu_config.menu.append(new menu_class.link("Bakers farm", "Bakers farm"));
menu_config.menu.append(new menu_class.link("Odeltown", "Odeltown"));
menu_config.menu.append(new menu_class.link("Beauharnois", "Beauharnois"));
menu_config.menu.append(new menu_class.link("Morres corner", "Morres corner"));
menu_config.menu.append(new menu_class.intertitle("Hommages aux morts"));

menu_config.pages = new page_class.pages();

let introduction = new page_class.doc("Introduction");
introduction.append(new page_class.title("INTRODUCTION"));
introduction.append(
  new page_class.parag(fs.readFileSync(__dirname + "/txt/Introduction.txt", "utf8"))
);
introduction.append(
  new page_class.parag(fs.readFileSync(__dirname + "/txt/Introduction-2.txt", "utf8"))
);
introduction.append(
  new page_class.parag(fs.readFileSync(__dirname + "/txt/Introduction-3.txt", "utf8"))
);
introduction.append(
  new page_class.parag(fs.readFileSync(__dirname + "/txt/Introduction-4.txt", "utf8"))
);
menu_config.pages.append(introduction);

let causes = new page_class.doc("Crise agricole");
causes.append(new page_class.title("CRISE AGRICOLE"));
causes.append(new page_class.parag(fs.readFileSync(__dirname + "/txt/Crise-agricole.txt", "utf8")));
menu_config.pages.append(causes);

let st_denis = new page_class.doc("St-Denis");
st_denis.append(new page_class.title("ST-DENIS"));
st_denis.append(new page_class.parag(fs.readFileSync(__dirname + "/txt/St-Denis.txt", "utf8")));
st_denis.append(new page_class.image("Carte", "/public/img/st-denis.png"));
menu_config.pages.append(st_denis);

let st_charles = new page_class.doc("St-Charles");
st_charles.append(new page_class.title("ST-CHARLES"));
st_charles.append(new page_class.parag(fs.readFileSync(__dirname + "/txt/St-Charles.txt", "utf8")));
st_charles.append(new page_class.image("Carte", "/public/img/st-charles.png"));
menu_config.pages.append(st_charles);

let lacolle = new page_class.doc("Lacolle");
lacolle.append(new page_class.title("LACOLLE"));
lacolle.append(new page_class.parag(fs.readFileSync(__dirname + "/txt/Lacolle.txt", "utf8")));
lacolle.append(new page_class.image("Memoire", "/public/img/lacolle.png"));
menu_config.pages.append(lacolle);

let bakers_farm = new page_class.doc("Bakers farm");
bakers_farm.append(new page_class.title("BAKERS FARM"));
bakers_farm.append(new page_class.parag(fs.readFileSync(__dirname + "/txt/Bakers-Farm.txt", "utf8")));
menu_config.pages.append(bakers_farm);

let odeltown = new page_class.doc("Odeltown");
odeltown.append(new page_class.title("ODELTOWN"));
odeltown.append(new page_class.parag(fs.readFileSync(__dirname + "/txt/Odeltown.txt", "utf8")));
odeltown.append(new page_class.image("Image", "/public/img/odeltown.png"));
menu_config.pages.append(odeltown);

let beauharnois = new page_class.doc("Beauharnois");
beauharnois.append(new page_class.title("BEAUHARNOIS"));
beauharnois.append(new page_class.parag(fs.readFileSync(__dirname + "/txt//Beauharnois.txt", "utf8")));
menu_config.pages.append(beauharnois);

let morres_corner = new page_class.doc("Morres corner");
morres_corner.append(new page_class.title("MORRES CORNER"));
morres_corner.append(new page_class.parag(fs.readFileSync(__dirname + "/txt/Morres-Corner.txt", "utf8")));
menu_config.pages.append(morres_corner);

module.exports = menu_config;
