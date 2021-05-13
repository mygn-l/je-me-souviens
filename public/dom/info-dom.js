export const title = function (inner = "") {
  let self = {};

  let title_div = document.createElement("div");
  title_div.setAttribute("class", "title-div");

  let title_h2 = document.createElement("h2");
  title_h2.innerHTML = inner;
  title_div.appendChild(title_h2);

  self.element = title_div;

  return self;
};

export const link = function (inner, href, description) {
  let self = {};

  let link_div = document.createElement("div");
  link_div.setAttribute("class", "link-div");

  let link_a = document.createElement("a");
  link_a.innerHTML = inner;
  link_a.href = href;
  link_div.appendChild(link_a);

  let link_p = document.createElement("p");
  link_p.innerHTML = description;
  link_div.appendChild(link_p);

  self.element = link_div;

  return self;
};

export const button = function (inner, description, handler) {
  let self = {};

  let button_div = document.createElement("div");
  button_div.setAttribute("class", "button-div");

  let button = document.createElement("button");
  button.innerHTML = inner;
  button.addEventListener("click", handler);
  button_div.appendChild(button);

  let button_p = document.createElement("p");
  button_p.innerHTML = description;
  button_div.appendChild(button_p);

  self.element = button_div;

  return self;
};

export const section = function (inner) {
  let self = {};

  let section_div = document.createElement("div");
  section_div.setAttribute("class", "section-div");

  let small = document.createElement("small");
  small.innerHTML = inner;
  section_div.appendChild(small);

  self.element = section_div;

  return self;
};
