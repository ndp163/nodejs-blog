const { urlencoded, json } = require("express");
const express = require("express");
const morgan = require("morgan");
const route = require("./routes");

const PORT = 3000;
const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/resources/");

app.use(morgan("combined"));
app.use(express.static(__dirname + "/public"));

// middleware for body in post method
app.use(urlencoded({ extended: true }));
app.use(json());

route(app);

app.listen(PORT, () => {
    console.log(`App is listening at http://localhost:${PORT}`);
});
