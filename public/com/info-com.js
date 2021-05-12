import * as info_dom from "/public/dom/info-dom.js";
import * as battle_dom from "/public/dom/battle-dom.js";

const GET = async function (path, handler = function (res) {}) {
  let response = await fetch(path, {
    method: "GET",
    credentials: "same-origin",
  });
  return handler(response);
};

const POST = async function (path, data = JSON.stringify({}), handler = function (res) {}) {
  let response = await fetch(path, {
    method: "POST",
    mode: "same-origin",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: data,
  });
  return handler(response);
};

let main = document.getElementsByTagName("main")[0];

let intro_title = info_dom.title("LES PATRIOTES");
main.appendChild(intro_title.element);

let intro_link = info_dom.link("Introduction", "/info/intro", "Que va-t-on discuter?");
main.appendChild(intro_link.element);

let reformes_title = info_dom.title("REFORMES");
main.appendChild(reformes_title.element);

let les_patriotes_link = info_dom.link("Partie Patriotes", "/info/reforms", "Qu'a ete la cause de cette rebellion?");
main.appendChild(les_patriotes_link.element);

let rebellion_title = info_dom.title("REBELLION");
main.appendChild(rebellion_title.element);

let st_denis_button = info_dom.button("Bataille de St-Denis", "November 23, 1837", function () {
  GET("/info/battle/st_denis", async function (res) {
    let st_denis = await res.json();

    battle_dom.battle(st_denis.script);

    main.appendChild(battle_dom);

    battle_dom.next();
    battle_dom.next();
  });
});
main.appendChild(st_denis_button.element);
