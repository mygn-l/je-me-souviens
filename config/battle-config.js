const fs = require("fs");

const battle_config = {};

battle_config.st_denis = {
  script: fs.readFileSync("./st-denis.battle"),
};

module.exports = battle_config;
