const fs = require("fs");

const readline = require("readline");

const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

interface.question("FILE NAME:", function (res) {
  const file = fs.readFileSync(__dirname + res);
});
