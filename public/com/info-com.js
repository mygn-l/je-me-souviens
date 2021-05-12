import * as info_dom from "/public/dom/info-dom.js";

let main = document.getElementsByTagName("main")[0];

let intro_title = info_dom.title("LES PATRIOTES");
main.appendChild(intro_title.element);

let intro_link = info_dom.link("Introduction", "/info/intro", "Que va-t-on discuter?");
main.appendChild(intro_link.element);

let reformes_title = info_dom.title("REFORMES");
main.appendChild(reformes_title.element);

let les_patriotes_link = info_dom.link("Partie Patriotes", "/info/reforms", "Qu'a ete la cause de cette rebellion?");
main.appendChild(les_patriotes_link.element);

let st_denis_button = info_dom.button("Bataille de St-Denis", "November 23, 1837", function () {
  GET("/info/battle/st-denis", function () {});
});
main.appendChild(st_denis_button.element);
