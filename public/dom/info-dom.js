const title = function (inner = "") {
  let self = {};

  let title_div = document.createElement("div");

  let title_h2 = document.createElement("h2");
  title_h2.innerHTML = inner;

  self.element = title_div;

  return self;
};

const link = function (inner, href, description) {
  let self = {};

  let link_div = document.createElement("div");

  let link_a = document.createElement("a");
  link_a.innerHTML = inner;
  link_a.href = href;
  link_div.appendChild(link_a);

  let link_p = document.createElement("p");
  link_p.innerHTML = description;
  link_div.appendChild(link_a);

  self.element = link_div;

  return self;
};

export default info_dom = {
  title: title,
};
