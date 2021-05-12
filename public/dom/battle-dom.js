const battle_parser = function (script) {
  let lines = [];

  let temp_line = "";
  for (let i = 0; i < script.length; i++) {
    if (script[i] === "\n") {
      lines.push(temp_line);
      temp_line = "";
    } else {
      temp_line += script[i];
    }
  }

  let groups = [];

  for (let i = 0; i < lines.length; i++) {
    switch (lines[i][0]) {
      case "g":
        let v = [];

        let temp = "";
        for (let c = 2; c < lines[i].length; c++) {
          if (lines[i][c] === " ") {
            v.push()
          }
        }
    }
  }
};

export const battle = function (script) {
  let self = {};

  let capsule_div = document.createElement("div");

  let canvas = document.createElement("canvas");

  self.script = script;

  self.cursor = 0;

  self.restart = function () {
    self.cursor = 0;
  };

  self.next = function () {
    self.cursor += 1;
  };

  self.before = function () {
    self.cursor -= 1;
  };

  self.element = capsule_div;

  return self;
};
