const express = require("express");

const app = express();

const express_api = require("./api/express-api");

app.set("view engine", "ejs");

app.set("trust proxy", 1);

app.use("/public", express.static(__dirname + "/public"));

app.use(express_api);

app.listen(process.env.PORT || 80);
