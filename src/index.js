const express = require("express");
const morgan = require("morgan");

const PORT = 3000;
const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/resources/");

app.use(morgan("combined"));
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.render("index");
});
app.get("/news", (req, res) => {
    res.render("news");
});

app.listen(PORT, () => {
    console.log(`App is listening at http://localhost:${PORT}`);
});
