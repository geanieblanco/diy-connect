const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");

app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

app.use(express.static('public'));

app.get("/", (req, res) => {
  res.render("home", {
    css: "style.css"
  });
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/create-account", (req, res) => {
  res.render("newuser");
});

app.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

app.listen(port);