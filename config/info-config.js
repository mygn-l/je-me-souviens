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

{
  let doc = new page_class.doc("Introduction");
  let col_1 = new page_class.column();
  col_1.append(new page_class.title("INTRODUCTION"));
  col_1.append(new page_class.parag(fs.readFileSync(__dirname + "/txt/Introduction.txt", "utf8")));
  col_1.append(
    new page_class.parag(fs.readFileSync(__dirname + "/txt/Introduction-2.txt", "utf8"))
  );
  col_1.append(
    new page_class.parag(fs.readFileSync(__dirname + "/txt/Introduction-3.txt", "utf8"))
  );
  col_1.append(
    new page_class.parag(fs.readFileSync(__dirname + "/txt/Introduction-4.txt", "utf8"))
  );
  doc.append(col_1);
  info_config.pages.append(doc);
}

{
  let doc = new page_class.doc("Crise agricole");
  let col_1 = new page_class.column();
  col_1.append(new page_class.title("CRISE AGRICOLE"));
  col_1.append(
    new page_class.parag(fs.readFileSync(__dirname + "/txt/Crise-agricole.txt", "utf8"))
  );
  doc.append(col_1);
  info_config.pages.append(doc);
}

{
  let doc = new page_class.doc("Crise subside");
  let col_1 = new page_class.column();
  col_1.append(new page_class.title("CRISE DES SUBSIDES"));
  col_1.append(new page_class.parag(fs.readFileSync(__dirname + "/txt/Crise-Subside.txt", "utf8")));
  doc.append(col_1);
  info_config.pages.append(doc);
}

{
  let doc = new page_class.doc("St-Denis");
  let col_1 = new page_class.column();
  col_1.append(new page_class.title("ST-DENIS"));
  col_1.append(new page_class.parag(fs.readFileSync(__dirname + "/txt/St-Denis.txt", "utf8")));
  let col_2 = new page_class.column();
  col_2.append(new page_class.image("Carte", "/public/img/st-denis.png"));
  doc.append(col_1);
  doc.append(col_2);
  info_config.pages.append(doc);
}

{
  let doc = new page_class.doc("St-Charles");
  let col_1 = new page_class.column();
  col_1.append(new page_class.title("ST-CHARLES"));
  col_1.append(new page_class.parag(fs.readFileSync(__dirname + "/txt/St-Charles.txt", "utf8")));
  let col_2 = new page_class.column();
  col_2.append(new page_class.image("Carte", "/public/img/st-charles.png"));
  doc.append(col_1);
  doc.append(col_2);
  info_config.pages.append(doc);
}

{
  let doc = new page_class.doc("Lacolle");
  let col_1 = new page_class.column();
  col_1.append(new page_class.title("LACOLLE"));
  col_1.append(new page_class.parag(fs.readFileSync(__dirname + "/txt/Lacolle.txt", "utf8")));
  let col_2 = new page_class.column();
  col_2.append(new page_class.image("Memoire", "/public/img/lacolle.png"));
  doc.append(col_1);
  doc.append(col_2);
  info_config.pages.append(doc);
}

{
  let doc = new page_class.doc("Bakers farm");
  let col_1 = new page_class.column();
  col_1.append(new page_class.title("BAKERS FARM"));
  col_1.append(new page_class.parag(fs.readFileSync(__dirname + "/txt/Bakers-Farm.txt", "utf8")));
  doc.append(col_1);
  info_config.pages.append(doc);
}

{
  let doc = new page_class.doc("Odeltown");
  let col_1 = new page_class.column();
  col_1.append(new page_class.title("ODELTOWN"));
  col_1.append(new page_class.parag(fs.readFileSync(__dirname + "/txt/Odeltown.txt", "utf8")));
  let col_2 = new page_class.column();
  col_2.append(new page_class.image("Image", "/public/img/odeltown.png"));
  doc.append(col_1);
  doc.append(col_2);
  info_config.pages.append(doc);
}

{
  let doc = new page_class.doc("Beauharnois");
  let col_1 = new page_class.column();
  col_1.append(new page_class.title("BEAUHARNOIS"));
  col_1.append(new page_class.parag(fs.readFileSync(__dirname + "/txt//Beauharnois.txt", "utf8")));
  doc.append(col_1);
  info_config.pages.append(doc);
}

{
  let doc = new page_class.doc("Morres corner");
  let col_1 = new page_class.column();
  col_1.append(new page_class.title("MORRES CORNER"));
  col_1.append(new page_class.parag(fs.readFileSync(__dirname + "/txt/Morres-Corner.txt", "utf8")));
  doc.append(col_1);
  info_config.pages.append(doc);
}

{
  let doc = new page_class.doc("Rebellion du Haut Canada");
  let col_1 = new page_class.column();
  col_1.append(new page_class.title("REBELLION DU HAUT CANADA"));
  col_1.append(
    new page_class.parag(fs.readFileSync(__dirname + "/txt/Rebellion-Haut-Canada.txt", "utf8"))
  );
  doc.append(col_1);
  info_config.pages.append(doc);
}

{
  let doc = new page_class.doc("Apres guerre");
  let col_1 = new page_class.column();
  col_1.append(new page_class.title("APRES GUERRE"));
  col_1.append(new page_class.parag(fs.readFileSync(__dirname + "/txt/Apres-Guerre.txt", "utf8")));
  doc.append(col_1);
  info_config.pages.append(doc);
}

{
  let doc = new page_class.doc("Rapport durham");
  let col_1 = new page_class.column();
  col_1.append(new page_class.title("RAPPORT DURHAM"));
  col_1.append(
    new page_class.parag(fs.readFileSync(__dirname + "/txt/Rapport-durham.txt", "utf8"))
  );
  doc.append(col_1);
  info_config.pages.append(doc);
}

{
  let doc = new page_class.doc("Mouvements revolutionnaires");
  let col_1 = new page_class.column();
  col_1.append(new page_class.title("MOUVEMENTS REVOLUTIONNAIRES"));
  col_1.append(
    new page_class.parag(
      fs.readFileSync(__dirname + "/txt/Mouvements-Revolutionnaires.txt", "utf8")
    )
  );
  doc.append(col_1);
  info_config.pages.append(doc);
}

{
  let doc = new page_class.doc("Acte d'union");
  let col_1 = new page_class.column();
  col_1.append(new page_class.title("ACTE D'UNION"));
  col_1.append(new page_class.parag(fs.readFileSync(__dirname + "/txt/Acte-union.txt", "utf8")));
  doc.append(col_1);
  info_config.pages.append(doc);
}

{
  let doc = new page_class.doc("Hommage aux morts");
  let col_1 = new page_class.column();
  col_1.append(new page_class.title("HOMMAGE AUX MORTS"));
  col_1.append(new page_class.parag(fs.readFileSync(__dirname + "/txt/Hommage.txt", "utf8")));
  doc.append(col_1);
  info_config.pages.append(doc);
}

{
  let doc = new page_class.doc("Acte constitutionnel");
  let col_1 = new page_class.column();
  col_1.append(new page_class.title("ACTE CONSTITUTIONNEL"));
  col_1.append(
    new page_class.parag(fs.readFileSync(__dirname + "/txt/Acte-constitutionnel.txt", "utf8"))
  );
  doc.append(col_1);
  info_config.pages.append(doc);
}

module.exports = info_config;
