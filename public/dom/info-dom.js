export const title = function (inner = "") {
  let self = {};

  let div = document.createElement("div");
  div.setAttribute("class", "title-div");

  let h2 = document.createElement("h2");
  h2.innerHTML = inner;
  div.appendChild(h2);

  self.element = div;

  return self;
};

export const link = function (inner, handler) {
  let self = {};

  let div = document.createElement("div");
  div.setAttribute("class", "link-div");

  let a = document.createElement("a");
  a.innerHTML = inner;
  a.addEventListener("click", function (e) {
    e.preventDefault();
    handler();
  });
  div.appendChild(a);

  self.element = div;

  return self;
};

export const intertitle = function (inner) {
  let self = {};

  let div = document.createElement("div");
  div.setAttribute("class", "intertitle-div");

  let small = document.createElement("small");
  small.innerHTML = inner;
  div.appendChild(small);

  self.element = div;

  return self;
};

export const description = function (inner) {
  let self = {};

  let div = document.createElement("div");
  div.setAttribute("class", "description-div");

  let p = document.createElement("p");
  p.innerHTML = inner;
  div.appendChild(p);

  self.element = div;

  return self;
};

export const ui = function (menu) {
  let self = {};

  self.pages = menu.pages;

  self.menu_items = [];

  let div = document.createElement("div");
  div.setAttribute("class", "ui-div");

  let menu_div = document.createElement("div");
  menu_div.setAttribute("class", "menu-div");
  div.appendChild(menu_div);

  let page_div = document.createElement("div");
  page_div.setAttribute("class", "page-div");
  div.appendChild(page_div);

  for (let i = 0; i < menu.list.length; i++) {
    let item = menu.list[i];
    switch (item.type) {
      case "title":
        self.menu_items.push(title(item.inner));
        break;
      case "link":
        self.menu_items.push(
          link(item.inner, function () {
            page_div.textContent = self.pages[item.href];
          })
        );
        break;
      case "intertitle":
        self.menu_items.push(intertitle(item.inner));
        break;
      case "description":
        self.menu_items.push(description(item.inner));
        break;
    }
  }

  for (let i = 0; i < self.menu_items.length; i++) {
    let item = self.menu_items[i];

    menu_div.appendChild(item.element);
  }

  self.element = div;

  return self;
};
