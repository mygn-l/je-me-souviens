const item = class {
  constructor(type, inner, href) {
    this.type = type;
    this.inner = inner;
    this.href = href;
  }
};

module.exports.title = class extends item {
  constructor(inner) {
    super("title", inner, "");
  }
};

module.exports.intertitle = class extends item {
  constructor(inner) {
    super("intertitle", inner, "");
  }
};

module.exports.link = class extends item {
  constructor(inner, href) {
    super("link", inner, href);
  }
};

module.exports.menu = class {
  constructor() {
    this.m = [];
  }
  append(item) {
    this.m.push(item);
  }
};
