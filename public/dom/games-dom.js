export const button = function (inner, handler) {
  const button_element = document.createElement("button");
  button_element.innerHTML = inner;
  button_element.addEventListener("click", function () {
    handler();
  });
  return button_element;
};

export const input = function () {
  const div_element = document.createElement("div");
  const input_element = document.createElement("input");
  div_element.appendChild(input_element);
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

export const question_answer = function (index, question, answers) {
  const div_element = document.createElement("div");
  div_element.setAttribute("class", "question-answer");

  const p_index = p(index + ".");
  div_element.appendChild(p_index);

  const p_element = p(question);
  div_element.appendChild(p_element);

  const alphabet = "ABCDEFG";

  for (let i = 0; i < answers.length; i++) {
    const answer_p_element = p(alphabet[i] + ". " + answers[i]);
    answer_p_element.setAttribute("class", "answer-p");
    div_element.appendChild(answer_p_element);
  }
  const input_element = input();
  div_element.appendChild(input_element);
  div_element.appendChild(document.createElement("br"));
  return div_element;
};

export const quiz = function (quiz_config, handler) {
  const div_element = document.createElement("div");

  const question_answers = [];

  const check_complete = function () {
    let good = 0;
    for (let i = 0; i < question_answers.length; i++) {
      if (question_answers[i].value.toLowerCase() === quiz_config[i].correct.toLowerCase()) {
        question_answers[i].style.border = "10px solid green";
        good += 1;
      } else {
        question_answers[i].style.border = "10px solid red";
        let correct = p("CORRECT ANSWER : " + quiz_config[i].correct);
        question_answers[i].parentNode.appendChild(correct);
      }
    }
    handler(good);
  };

  for (let i = 0; i < quiz_config.length; i++) {
    const question_answer_element = question_answer(
      i + 1,
      quiz_config[i].question,
      quiz_config[i].answers
    );
    div_element.appendChild(question_answer_element);
    question_answers.push(question_answer_element.querySelector("input"));
  }

  const button_element = button("VALIDER", function () {
    check_complete();
  });
  button_element.style.padding = "20px";
  button_element.style.border = "2px solid white";
  button_element.style.margin = "10px";
  button_element.style.borderRadius = "10px";
  div_element.appendChild(button_element);

  return div_element;
};
