const item = class {
  constructor(type, inner, src) {
    this.type = type;
    this.inner = inner;
    this.src = src;
  }
};

module.exports.title = class extends item {
  constructor(inner) {
    super("title", inner, "");
  }
};

module.exports.image = class extends item {
  constructor(caption, src) {
    super("image", caption, src);
  }
};

module.exports.parag = class extends item {
  constructor(inner) {
    super("parag", inner, "");
  }
};

module.exports.column = class {
  constructor() {
    this.c = [];
  }
  append(item) {
    this.c.push(item);
  }
};

module.exports.doc = class {
  constructor(name) {
    this.name = name;
    this.d = [];
  }
  append(item) {
    this.d.push(item);
  }
};

module.exports.pages = class {
  constructor() {
    this.p = [];
  }
  append(item) {
    this.p.push(item);
  }
};
