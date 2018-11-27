const express = require("express");
const config = require("./config");

const app = express();
app.set("view engine", "ejs");

app.get("/", (req, res) => res.render("index"));

app.listen(config.port, () =>
  console.log(`App is running at http://localhost:${config.port}`)
);
