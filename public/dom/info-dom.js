const doc = function (p) {
  let self = {};

  self.name = p.name;

  let div = document.createElement("div");

  for (let i = 0; i < p.d.length; i++) {
    switch (p.d[i].type) {
      case "title":
        let h2 = document.createElement("h2");
        h2.innerHTML = p.d[i].inner;
        div.appendChild(h2);
        break;
      case "parag":
        let pa = document.createElement("p");
        pa.innerHTML = p.d[i].inner;
        div.appendChild(pa);
        break;
      case "image":
        let image_div = document.createElement("div");
        let img = document.createElement("img");
        img.src = p.d[i].src;
        image_div.appendChild(img);
        let small = document.createElement("small");
        small.innerHTML = p.d[i].inner;
        image_div.appendChild(small);
        div.appendChild(image_div);
        break;
    }
  }

  self.element = div;

  return self;
};

const menu = function (m, pages, menu_div, page_div) {
  let self = {};

  let div = document.createElement("div");

  for (let i = 0; i < m.length; i++) {
    switch (m[i].type) {
      case "title":
        let h2 = document.createElement("h2");
        h2.innerHTML = m[i].inner;
        div.appendChild(h2);
        h2.setAttribute("class", "title");
        break;
      case "intertitle":
        let h3 = document.createElement("h3");
        h3.innerHTML = m[i].inner;
        div.appendChild(h3);
        h3.setAttribute("class", "intertitle");
        break;
      case "link":
        let a = document.createElement("a");
        a.innerHTML = m[i].inner;
        a.addEventListener("click", function (e) {
          e.preventDefault();
          for (let j = 0; j < pages.length; j++) {
            if (pages[j].name == m[i].href) {
              menu_div.style.width = "20%";
              menu_div.style.textAlign = "left";

              page_div.style.display = "inline-block";
              page_div.style.width = "80%";
              page_div.innerHTML = "";
              page_div.appendChild(pages[j].element);

              let button = document.createElement("button");
              button.innerHTML = "FERMER LA PAGE X";
              button.addEventListener("click", function () {
                page_div.style.display = "none";
                menu_div.style.width = "100%";
                menu_div.style.textAlign = "center";
                button.remove();
              });
              button.setAttribute("class", "close-button");
              page_div.appendChild(button);
            }
          }
        });
        a.setAttribute("class", "link");
        div.appendChild(a);
        div.appendChild(document.createElement("br"));
        break;
    }
  }

  self.element = div;

  return self;
};

export const ui = function (info) {
  let self = {};

  self.menu = info.menu;
  self.pages = info.pages;

  self.menu_items = undefined;
  self.pages_items = [];

  let div = document.createElement("div");
  div.setAttribute("class", "ui-div");

  let menu_div = document.createElement("div");
  menu_div.setAttribute("class", "menu-div");
  div.appendChild(menu_div);

  let page_div = document.createElement("div");
  page_div.setAttribute("class", "page-div");
  div.appendChild(page_div);

  for (let i = 0; i < self.pages.p.length; i++) {
    self.pages_items.push(doc(self.pages.p[i]));
  }

  self.menu_items = menu(self.menu.m, self.pages_items, menu_div, page_div);

  menu_div.appendChild(self.menu_items.element);

  self.element = div;

  return self;
};
