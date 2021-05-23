import * as info_dom from "/public/dom/info-dom.js";
import * as com from "/public/lib/com.js";

com.GET("/info/menu", async function (res) {
  let info = await res.json();

  let main = document.getElementsByTagName("main")[0];

  let ui = info_dom.ui(info);
  main.appendChild(ui.element);
});

document.getElementsByTagName("title")[0].innerHTML = "Les Patriotes";
