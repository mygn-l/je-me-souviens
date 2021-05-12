import * as info_dom from "/public/dom/info-dom.js";

let main = document.getElementsByTagName("main")[0];

let intro_title = info_dom.title("LES PATRIOTES");
main.appendChild(intro_title.element);

let intro_link = info_dom.link("Introduction", "/intro", "Que va-t-on discuter?");
main.appendChild(intro_link.element);

let reformes_title = info_dom.title("REFORMES");
main.appendChild(reformes_title.element);

let reformes_link = info_dom.link("Partie Patriotes", "/reforms", "Qu'a ete la cause de cette rebellion?");
main.appendChild(reformes_link.element);
