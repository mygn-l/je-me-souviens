const link = class {
  constructor(inner, href) {
    this.type = "link";
    this.inner = inner;
    this.href = href;
  }
};

module.exports = link;
