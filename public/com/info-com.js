import * as info_dom from "/public/dom/info-dom.js";
import * as com from "/public/lib/com.js";

com.GET("/info/menu", async function (res) {
  let menu = await res.json();

  let ui = info_dom.ui(menu);

  let main = document.getElementsByTagName("main")[0];

  main.appendChild(ui.element);
});

document.getElementsByTagName("title")[0].innerHTML = "Les Patriotes";
