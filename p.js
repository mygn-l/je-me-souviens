const fs = require("fs");

const readline = require("readline");

const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const handler = function (res) {
  try {
    let text = fs.readFileSync(__dirname + "/" + res, "utf8");

    text = text.replace(/\s{2,}/g, " ");

    text = text.replace(/\s/g, " ");

    let from_left = 0;
    for (let i = 0; i < text.length; i++) {
      if (from_left > 50 && text[i] === " ") {
        text = text.slice(0, i) + "\n" + text.slice(i + 1, text.length);
        from_left = 0;
      }
      from_left++;
    }

    text = text.slice(0, -1);
    text += "\n";

    fs.writeFileSync(__dirname + "/" + res, text, "utf8");
  } catch {
    console.log("\x1b[31m%s\x1b[0m", "FILE NOT FOUND");
  }

  interface.question("FILE NAME:", handler);
};

interface.question("FILE NAME:", handler);
