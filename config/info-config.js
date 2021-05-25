const fs = require("fs");

const menu_class = require("../models/menu-class");
const page_class = require("../models/page-class");

const info_config = {};

info_config.menu = new menu_class.menu();

info_config.menu.append(new menu_class.title("LES PATRIOTES"));
info_config.menu.append(new menu_class.link("Introduction", "Introduction"));

info_config.menu.append(new menu_class.title("LA REVOLUTION PATRIOTE"));
info_config.menu.append(new menu_class.intertitle("Causes"));
info_config.menu.append(new menu_class.link("Crise agricole", "Crise agricole"));
info_config.menu.append(new menu_class.link("Crise subside", "Crise subside"));
info_config.menu.append(new menu_class.intertitle("Batailles"));
info_config.menu.append(new menu_class.link("St-Denis", "St-Denis"));
info_config.menu.append(new menu_class.link("St-Charles", "St-Charles"));
info_config.menu.append(new menu_class.intertitle("Petites batailles"));
info_config.menu.append(new menu_class.link("Lacolle", "Lacolle"));
info_config.menu.append(new menu_class.link("Bakers farm", "Bakers farm"));
info_config.menu.append(new menu_class.link("Odeltown", "Odeltown"));
info_config.menu.append(new menu_class.link("Beauharnois", "Beauharnois"));
info_config.menu.append(new menu_class.link("Morres corner", "Morres corner"));
info_config.menu.append(
  new menu_class.link("Rebellion du Haut Canada", "Rebellion du Haut Canada")
);
info_config.menu.append(new menu_class.intertitle("Apres guerre"));
info_config.menu.append(new menu_class.link("Apres guerre", "Apres guerre"));
info_config.menu.append(new menu_class.link("Rapport durham", "Rapport durham"));

info_config.menu.append(new menu_class.title("LES POLITIQUES"));
info_config.menu.append(new menu_class.link("Acte d'union", "Acte d'union"));
info_config.menu.append(new menu_class.link("Acte constitutionnel", "Acte constitutionnel"));
info_config.menu.append(
  new menu_class.link("Mouvements revolutionnaires", "Mouvements revolutionnaires")
);

info_config.menu.append(new menu_class.link("Hommage aux morts", "Hommage aux morts"));

info_config.pages = new page_class.pages();

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
info_config.pages.append(introduction);

let crise_agricole = new page_class.doc("Crise agricole");
crise_agricole.append(new page_class.title("CRISE AGRICOLE"));
crise_agricole.append(
  new page_class.parag(fs.readFileSync(__dirname + "/txt/Crise-agricole.txt", "utf8"))
);
info_config.pages.append(crise_agricole);

let crise_subside = new page_class.doc("Crise subside");
crise_subside.append(new page_class.title("CRISE DES SUBSIDES"));
crise_subside.append(
  new page_class.parag(fs.readFileSync(__dirname + "/txt/Crise-Subside.txt", "utf8"))
);
info_config.pages.append(crise_subside);

let st_denis = new page_class.doc("St-Denis");
st_denis.append(new page_class.title("ST-DENIS"));
st_denis.append(new page_class.parag(fs.readFileSync(__dirname + "/txt/St-Denis.txt", "utf8")));
st_denis.append(new page_class.image("Carte", "/public/img/st-denis.png"));
info_config.pages.append(st_denis);

let st_charles = new page_class.doc("St-Charles");
st_charles.append(new page_class.title("ST-CHARLES"));
st_charles.append(new page_class.parag(fs.readFileSync(__dirname + "/txt/St-Charles.txt", "utf8")));
st_charles.append(new page_class.image("Carte", "/public/img/st-charles.png"));
info_config.pages.append(st_charles);

let lacolle = new page_class.doc("Lacolle");
lacolle.append(new page_class.title("LACOLLE"));
lacolle.append(new page_class.parag(fs.readFileSync(__dirname + "/txt/Lacolle.txt", "utf8")));
lacolle.append(new page_class.image("Memoire", "/public/img/lacolle.png"));
info_config.pages.append(lacolle);

let bakers_farm = new page_class.doc("Bakers farm");
bakers_farm.append(new page_class.title("BAKERS FARM"));
bakers_farm.append(
  new page_class.parag(fs.readFileSync(__dirname + "/txt/Bakers-Farm.txt", "utf8"))
);
info_config.pages.append(bakers_farm);

let odeltown = new page_class.doc("Odeltown");
odeltown.append(new page_class.title("ODELTOWN"));
odeltown.append(new page_class.parag(fs.readFileSync(__dirname + "/txt/Odeltown.txt", "utf8")));
odeltown.append(new page_class.image("Image", "/public/img/odeltown.png"));
info_config.pages.append(odeltown);

let beauharnois = new page_class.doc("Beauharnois");
beauharnois.append(new page_class.title("BEAUHARNOIS"));
beauharnois.append(
  new page_class.parag(fs.readFileSync(__dirname + "/txt//Beauharnois.txt", "utf8"))
);
info_config.pages.append(beauharnois);

let morres_corner = new page_class.doc("Morres corner");
morres_corner.append(new page_class.title("MORRES CORNER"));
morres_corner.append(
  new page_class.parag(fs.readFileSync(__dirname + "/txt/Morres-Corner.txt", "utf8"))
);
info_config.pages.append(morres_corner);

let rebellion_haut_canada = new page_class.doc("Rebellion du Haut Canada");
rebellion_haut_canada.append(new page_class.title("REBELLION DU HAUT CANADA"));
rebellion_haut_canada.append(
  new page_class.parag(fs.readFileSync(__dirname + "/txt/Rebellion-Haut-Canada.txt", "utf8"))
);
info_config.pages.append(rebellion_haut_canada);

let apres_guerre = new page_class.doc("Apres guerre");
apres_guerre.append(new page_class.title("APRES GUERRE"));
apres_guerre.append(
  new page_class.parag(fs.readFileSync(__dirname + "/txt/Apres-Guerre.txt", "utf8"))
);
info_config.pages.append(apres_guerre);

let rapport_durham = new page_class.doc("Rapport durham");
rapport_durham.append(new page_class.title("RAPPORT DURHAM"));
rapport_durham.append(
  new page_class.parag(fs.readFileSync(__dirname + "/txt/Rapport-durham.txt", "utf8"))
);
info_config.pages.append(rapport_durham);

let mouvement_revolutionnaire = new page_class.doc("Mouvements revolutionnaires");
mouvement_revolutionnaire.append(new page_class.title("MOUVEMENTS REVOLUTIONNAIRES"));
mouvement_revolutionnaire.append(
  new page_class.parag(fs.readFileSync(__dirname + "/txt/Mouvements-Revolutionnaires.txt", "utf8"))
);
info_config.pages.append(mouvement_revolutionnaire);

let acte_union = new page_class.doc("Acte d'union");
acte_union.append(new page_class.title("ACTE D'UNION"));
acte_union.append(new page_class.parag(fs.readFileSync(__dirname + "/txt/Acte-union.txt", "utf8")));
info_config.pages.append(acte_union);

let hommage = new page_class.doc("Hommage aux morts");
hommage.append(new page_class.title("HOMMAGE AUX MORTS"));
hommage.append(new page_class.parag(fs.readFileSync(__dirname + "/txt/Hommage.txt", "utf8")));
info_config.pages.append(hommage);

let acte_constitutionnel = new page_class.doc("Acte constitutionnel");
acte_constitutionnel.append(new page_class.title("ACTE CONSTITUTIONNEL"));
acte_constitutionnel.append(
  new page_class.parag(fs.readFileSync(__dirname + "/txt/Acte-constitutionnel.txt", "utf8"))
);
info_config.pages.append(acte_constitutionnel);

module.exports = info_config;
