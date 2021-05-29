const express = require("express");
const morgan = require("morgan");

const PORT = 3000;
const app = express();

app.use(morgan("combined"));

app.get("/", (req, res) => {
    res.send("Page INDEX");
});
app.get("/trang-chu", (req, res) => {
    res.send("Page trang chu");
});

app.listen(PORT, () => {
    console.log(`App is listening at http://localhost:${PORT}`);
});
