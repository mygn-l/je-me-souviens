const express = require("express");

const app = express();

const fs = require("fs");

const https = require("https");

const server = https.createServer(
  {
    key: fs.readFileSync("server.key"),
    cert: fs.readFileSync("server.cert"),
  },
  app
);

const express_api = require("./api/express-api");

app.set("view engine", "ejs");

app.set("trust proxy", 1);

app.use("/public", express.static(__dirname + "/public"));

app.use(express_api);

server.listen(process.env.PORT || 80);
