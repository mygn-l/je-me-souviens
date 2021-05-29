export const button = function (inner, handler) {
  const button_element = document.createElement("button");
  button_element.innerHTML = inner;
  button_element.addEventListener("click", function () {
    handler();
  });
  return button_element;
};

export const input = function (handler) {
  const div_element = document.createElement("div");
  const input_element = document.createElement("input");
  input_element.addEventListener("keyup", function (e) {
    if (e.key === "Enter") {
      handler(input_element.value);
    }
  });
  const button_element = button("Valider", function () {
    handler(input_element.value);
  });
  div_element.appendChild(input_element);
  div_element.appendChild(button_element);
  return div_element;
};

export const p = function (inner) {
  const p = document.createElement("p");
  p.innerHTML = inner;
  return p;
};

export const menu = function () {
  return document.getElementById("menu");
};

export const title = function () {
  return document.getElementsByTagName("title")[0];
};

export const ui = function () {
  return document.getElementById("ui");
};

export const question_answer = function (question, answers, correct, handler) {
  const div_element = document.createElement("div");
  div_element.setAttribute("class", "question-answer");

  const p_element = p(question);
  div_element.appendChild(p_element);

  const alphabet = "ABCDEFG";

  for (let i = 0; i < answers.length; i++) {
    const answer_p_element = p(alphabet[i] + ". " + answers[i]);
    answer_p_element.setAttribute("class", "answer-p");
    div_element.appendChild(answer_p_element);
  }
  const input_element = input(function (value) {
    if (value.toLowerCase() === correct.toLowerCase()) {
      input_element.style.border = "10px solid green";
      handler();
    } else {
      input_element.style.border = "10px solid red";
    }
  });
  div_element.appendChild(input_element);
  div_element.appendChild(document.createElement("br"));
  return div_element;
};

export const quiz = function (quiz_config, handler) {
  const div_element = document.createElement("div");

  const completed = [];

  const check_complete = function () {
    let count = 0;
    for (let i = 0; i < completed.length; i++) {
      if (completed[i] === true) {
        count += 1;
      }
    }
    if (count >= completed.length) {
      handler();
    }
  };

  for (let i = 0; i < quiz_config.length; i++) {
    completed.push(false);

    const question_answer_element = question_answer(
      quiz_config[i].question,
      quiz_config[i].answers,
      quiz_config[i].correct,
      function () {
        completed[i] = true;
        check_complete();
      }
    );
    div_element.appendChild(question_answer_element);
  }

  return div_element;
};
