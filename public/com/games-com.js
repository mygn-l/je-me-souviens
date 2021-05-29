import { button, input, menu, title, ui, quiz } from "/public/dom/games-dom.js";
import { GET } from "/public/lib/com.js";

title().innerHTML = "Games";

menu().appendChild(
  button("Quiz", function () {
    GET("/games/quiz", async function (res) {
      const quiz_config = await res.json();
      ui().appendChild(
        quiz(quiz_config, function () {
          alert("QUIZ COMPLÉTÉ");
        })
      );
    });
  })
);
