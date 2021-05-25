const doc = function (p) {
  let self = {};

  self.name = p.name;

  let div = document.createElement("div");

  for (let i = 0; i < p.d.length; i++) {
    let col_div = document.createElement("div");
    col_div.style.width = Math.floor((1 / p.d.length) * 100) + "%";
    col_div.setAttribute("class", "col-div");
    for (let j = 0; j < p.d[i].c.length; j++) {
      switch (p.d[i].c[j].type) {
        case "title":
          let h2 = document.createElement("h2");
          h2.innerHTML = p.d[i].c[j].inner;
          h2.setAttribute("class", "page-title");
          col_div.appendChild(h2);
          break;
        case "parag":
          let pa = document.createElement("p");
          pa.innerHTML = p.d[i].c[j].inner;
          pa.setAttribute("class", "page-parag");
          let br = document.createElement("br");
          col_div.appendChild(br);
          col_div.appendChild(pa);
          break;
        case "image":
          let image_div = document.createElement("div");
          image_div.setAttribute("class", "page-image");
          let img = document.createElement("img");
          img.src = p.d[i].c[j].src;
          image_div.appendChild(img);
          let small = document.createElement("small");
          small.innerHTML = p.d[i].c[j].inner;
          image_div.appendChild(small);
          col_div.appendChild(image_div);
          break;
      }
    }
    div.appendChild(col_div);
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
        h2.setAttribute("class", "menu-title");
        break;
      case "intertitle":
        let h3 = document.createElement("h3");
        h3.innerHTML = m[i].inner;
        div.appendChild(h3);
        h3.setAttribute("class", "menu-intertitle");
        break;
      case "link":
        let a = document.createElement("a");
        a.innerHTML = m[i].inner;
        a.addEventListener("click", function (e) {
          e.preventDefault();
          for (let j = 0; j < pages.length; j++) {
            if (pages[j].name == m[i].href) {
              menu_div.style.display = "none";

              page_div.style.display = "inline-block";
              page_div.innerHTML = "";
              page_div.appendChild(pages[j].element);

              let button = document.createElement("button");
              button.innerHTML = "FERMER LA PAGE X";
              button.addEventListener("click", function () {
                menu_div.style.display = "inline-block";

                page_div.style.display = "none";

                button.remove();
              });
              button.setAttribute("class", "close-button");
              page_div.appendChild(button);
            }
          }
        });
        a.setAttribute("class", "menu-link");
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
