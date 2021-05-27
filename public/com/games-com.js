document.getElementsByTagName("title")[0].innerHTML = "Games";

import { button } from "/public/dom/games-dom.js";

document.getElementById("menu").appendChild(
  button("Quiz", function () {
    document.getElementById("ui").innerHTML = "HELLO";
  })
);
