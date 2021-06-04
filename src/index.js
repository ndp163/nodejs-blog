const { urlencoded, json } = require("express");
const express = require("express");
const morgan = require("morgan");
const methodOverride = require("method-override");

const route = require("./routes");
const db = require("./config/db");

db.connect();

const PORT = 3000;
const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/resources/");

app.use(morgan("combined"));
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));

// middleware for body in post method
app.use(urlencoded({ extended: true }));
app.use(json());

route(app);

app.listen(PORT, () => {
    console.log(`App is listening at http://localhost:${PORT}`);
});
