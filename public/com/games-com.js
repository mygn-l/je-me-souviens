import { button, input, menu, title, ui, quiz } from "/public/dom/games-dom.js";
import { GET } from "/public/lib/com.js";

title().innerHTML = "Games";

let quiz_button = button("Quiz", function () {
  GET("/games/quiz", async function (res) {
    const quiz_config = await res.json();
    ui().appendChild(
      quiz(quiz_config, function (good) {
        alert("QUIZ COMPLÉTÉ \n NOTE: " + good + "/10");
      })
    );
  });
});
quiz_button.setAttribute("class", "menu-button");

menu().appendChild(quiz_button);
